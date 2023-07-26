import React, {useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import PreguntaService from '../services/PreguntaService';
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PruebaComponent() {
  const { dificultad } = useParams();
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    cargarPreguntas();
  }, [dificultad]); // Ejecuta la función cargarPreguntas cada vez que la dificultad cambie

  const cargarPreguntas = () => {
    PreguntaService.obtenerPreguntasDificultad(dificultad)
      .then((res) => {
        // Almacena las preguntas obtenidas en el estado de preguntas
        setPreguntas(res.data);
      })
      .catch((error) => {
        // Manejo de errores
        console.error('Error al cargar las preguntas:', error);
      });
  };


  // Aquí puedes utilizar la variable 'dificultad' para buscar preguntas
  // específicas basadas en la dificultad seleccionada.

  return (
    <div>
      <h1 className='text-center'><b>Prueba de dificultad {dificultad}</b></h1>
      {/* Mostrar las preguntas de la dificultad seleccionada */}
      {preguntas.map((pregunta, id) => (
        <div key={id}>
          {/* Mostrar detalles de la pregunta (imagen, respuesta, etc.) */}
          <Form>
            <img src={pregunta.imagen} alt={`Pregunta ${id}`} style={{ width: '100px', height: '100px' }} />
            <p>Respuesta: {pregunta.respuesta}</p>
            {/* Agrega más detalles si es necesario */}
          </Form>
        </div>
      ))}
    </div>
  );
}

export default PruebaComponent;