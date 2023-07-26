import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import PreguntaService from '../services/PreguntaService';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PruebaComponent() {
  const { dificultad } = useParams();
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState([]);
  const [resultados, setResultados] = useState([]);
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0); // Estado del tiempo transcurrido en segundos
  const intervalRef = useRef(null); // Referencia al intervalo
  const [calificacion, setCalificacion] = useState(null); // Estado de la calificación del usuario

  useEffect(() => {
    cargarPreguntas();
  }, [dificultad]);

  useEffect(() => {
    // Actualiza el tiempo transcurrido cada segundo
    intervalRef.current = setInterval(() => {
      setTiempoTranscurrido((prevTiempo) => prevTiempo + 1);
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalRef.current);
  }, []);

  const cargarPreguntas = () => {
    PreguntaService.obtenerPrueba(dificultad)
      .then((res) => {
        setPreguntas(res.data);
        setRespuestas(new Array(res.data.length).fill(''));
      })
      .catch((error) => {
        console.error('Error al cargar las preguntas:', error);
      });
  };

  const changeRespuestaHandler = (event, id) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[id] = event.target.value;
    setRespuestas(nuevasRespuestas);
  };

  const verificarRespuestas = () => {
    clearInterval(intervalRef.current);
    const nuevosResultados = preguntas.map((pregunta, id) => {
      const respuestaUsuario = respuestas[id].toLowerCase();
      const respuestaCorrecta = pregunta.respuesta.toLowerCase();
      const esCorrecta = respuestaUsuario === respuestaCorrecta;
  
      return {
        pregunta: pregunta,
        respuestaUsuario: respuestaUsuario,
        esCorrecta: esCorrecta,
      };
    });
  
    setResultados(nuevosResultados);
  
    // Calcular la calificación
    const preguntasCorrectas = nuevosResultados.filter((resultado) => resultado.esCorrecta).length;
    const preguntasIncorrectas = nuevosResultados.filter((resultado) => !resultado.esCorrecta).length;
    const calificacion = (preguntasCorrectas * 7 + preguntasIncorrectas) / 4;
    setCalificacion(calificacion);
  };  

  return (
    <Styles>
      <div className='mainclass'>
        <div className='form1'>
          <h1 className='text-center'><b>Prueba de dificultad {dificultad}</b></h1>
          <div className='container'>
            <hr></hr>
            <div className='container'>
              <div>
                {preguntas.map((pregunta, id) => (
                  <div key={id}>
                    <Form>
                      <img src={pregunta.imagen} alt={`Pregunta ${id}`} />
                      <Form.Group className='mb-3'>
                        <Form.Label><h4>Respuesta</h4></Form.Label>
                        <Form.Control
                          type='respuesta'
                          placeholder='Ingrese la respuesta'
                          value={respuestas[id]}
                          onChange={(event) => changeRespuestaHandler(event, id)}
                        />
                      </Form.Group>
                    </Form>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='save-container'>
          <Button onClick={verificarRespuestas} variant='primary' size='lg'>
            Verificar Respuestas
          </Button>
          
          <div className='results-container'>
            <span>Tiempo transcurrido: {tiempoTranscurrido} segundos</span>
            {resultados.map((resultado, id) => (
              <div key={id} className='result-item'>
                <span className='result-text'>
                  Pregunta {id + 1}:
                </span>
                {resultado.esCorrecta ? (
                  <img
                    className='result-image'
                    src='https://media.discordapp.net/attachments/459599874166620160/1133683743534620682/correcto.png?width=676&height=676'
                    alt='Respuesta Correcta'
                  />
                ) : (
                  <img
                    className='result-image'
                    src='https://media.discordapp.net/attachments/459599874166620160/1133683743786283068/incorrecto.png?width=676&height=676'
                    alt='Respuesta Incorrecta'
                  />
                )}
                {!resultado.esCorrecta && (
                  <span className='correct-answer'>
                    Respuesta Correcta: {resultado.pregunta.respuesta}
                  </span>
                )}
              </div>
            ))}
            {calificacion !== null && (
            <div className='result-item'>
              <span className='result-text'>
                Calificación: {calificacion}
              </span>
            </div>
          )}
          </div>
        </div>
      </div>
    </Styles>
  );
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
    color: var(--text); 
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
    color: var(--text); 
  }

  img {
    max-width: 100%;
    height: auto; 
  }
  
  .form1 {
    border: 9px solid var(--primary); 
    background-color: var(--secondary); 
    width: 50%;
    padding: 36px;
  }

  .question-container {
    margin-bottom: 30px;
  }

  .save-container {
    position: fixed;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    z-index: 999;
  }

  .separator {
    border: 2px solid #ccc;
    margin: 30px 0;
  }
  .result-image {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  
  input[type="respuesta"] {
    width: 100%;
    padding: 16px 8px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  
  Button {
    background-color: var(--accent);
    color: var(--text); 
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
  .results-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .result-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }

  .result-text {
    margin-right: 10px;
  }

  .correct-answer {
    margin-left: 10px;
    font-weight: bold;
  }
`

export default PruebaComponent;