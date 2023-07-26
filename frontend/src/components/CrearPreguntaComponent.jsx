import { useState } from 'react';
import PreguntaService from '../services/PreguntaService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';

export default function CrearPregunta(props) {
    const estadoInicial = {
        imagen: "",
        respuesta: "",
        dificultad: ""
    };

    const [input, setInput] = useState(estadoInicial);

    const changeImagenHandler = event => {
        setInput({ ...input, imagen: event.target.value });
        console.log(input.imagen);
    };

    const changeRespuestaHandler = event => {
        setInput({ ...input, respuesta: event.target.value });
        console.log(input.respuesta);
    };

    const changeDificultadHandler = event => {
        setInput({ ...input, dificultad: event.target.value });
        console.log(input.dificultad);
    };

    const crearPregunta = e => {
        e.preventDefault();
        swal({
            title: "¿Seguro que quieres crear la pregunta?",
            icon: "warning",
            buttons: ["Cancelar", "Enviar"],
            dangerMode: true
        }).then(respuesta => {
            if (respuesta) {
                swal("Pregunta creada", { icon: "success", timer: "1000" });
                let pregunta = { imagen: input.imagen, respuesta: input.respuesta, dificultad: input.dificultad };
                console.log(input.imagen)
                console.log(input.respuesta)
                console.log(input.dificultad)
                PreguntaService.crearPregunta(pregunta).then(
                    (res) => {

                    }
                );
            } else {
                swal({ text: "Pregunta no creada.", icon: "error" });
            }
        });
    };
    return (
        <Styles>
            <div className="home">
                <div className="mainclass">
                    <div className='form1'>
                        <h1 className='text-center'><b>Preguntas</b></h1>
                        <div className='container'>
                            <hr></hr>
                            <div className='container'>
                                <Form>
                                    <Form.Group className='mb-3' controlId="Link de la imagen" value={input.imagen} onChange={changeImagenHandler}>
                                        <Form.Label>Link de la imagen de la pregunta</Form.Label>
                                        <Form.Control type="imagen" placeholder="Link imagen" />
                                    </Form.Group>

                                    <Form.Group className='mb-3' controlId="respuesta" value={input.respuesta} onChange={changeRespuestaHandler}>
                                        <Form.Label>Respuesta</Form.Label>
                                        <Form.Control type="respuesta" placeholder="Respuesta de la pregunta" />
                                    </Form.Group>

                                    <Form.Group className='mb-3' controlId="dificultad" value={input.dificultad} onChange={changeDificultadHandler}>
                                        <Form.Label>Ingrese la dificultad de la pregunta</Form.Label>
                                        <Form.Select value={input.dificultad} onChange={changeDificultadHandler}>
                                            <option value="basico">Básico</option>
                                            <option value="intermedio">Intermedio</option>
                                            <option value="avanzado">Avanzado</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Form>
                            </div>
                            <Button className='boton' onClick={crearPregunta}>Crear Pregunta</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Styles>
    )
}
const Styles = styled.div`
:root {
    --text: #e8e0f0;
    --background: #07050a;
    --primary: #a184c2;
    --secondary: #160f1f;
    --accent: #7a52a7;
  }
  
  .text-center {
    text-align: center;
    justify-content: center;
    padding-top: 8px;
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 30px;
    letter-spacing: 0px;
    word-spacing: 2px;
    color: var(--text); /* Usamos el color de texto personalizado */
    font-weight: 700;
    text-decoration: none solid rgb(68, 68, 68);
    font-style: normal;
    font-variant: normal;
    text-transform: uppercase;
  }
  
  .mainclass {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    font-family: Roboto, Arial, sans-serif;
    font-size: 15px;
    color: var(--text); /* Usamos el color de texto personalizado */
  }
  
  .form1 {
    border: 9px solid var(--primary); /* Usamos el color secundario personalizado */
    background-color: var(--secondary); /* Usamos el color primario personalizado */
    width: 50%;
    padding: 36px;
  }
  
  input[type="imagen"],
  input[type="respuesta"],
  input[type="dificultad"] {
    width: 100%;
    padding: 16px 8px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  
  Button {
    background-color: var(--accent); /* Usamos el color de acento personalizado */
    color: var(--text); /* Usamos el color de texto personalizado */
    padding: 14px 0;
    margin: 10px 0;
    border: none;
    cursor: grabbing;
    width: 100%;
  }
  
  Button:hover {
    opacity: 0.8;
  }
  
  .formcontainer {
    text-align: left;
    margin: 24px 100px 9px;
  }
  
  .container {
    padding: 24px 0;
    text-align: left;
  }
  
  span.psw {
    float: right;
    padding-top: 0;
    padding-right: 15px;
  }
`  