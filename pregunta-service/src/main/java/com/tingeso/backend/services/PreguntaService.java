package com.tingeso.backend.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

import org.hibernate.mapping.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tingeso.backend.entities.PreguntaEntity;
import com.tingeso.backend.repositories.PreguntaRepository;

@Service
public class PreguntaService {
    @Autowired
    PreguntaRepository preguntaRepository;
    
    public ArrayList<PreguntaEntity> obtenerPreguntas(){
        return (ArrayList<PreguntaEntity>) preguntaRepository.findAll();
    }

    public ArrayList<PreguntaEntity> obtenerPreguntasPorDificultad(String dificultad){
        return (ArrayList<PreguntaEntity>) preguntaRepository.findByDificultad(dificultad);
    }

    public void guardarPregunta(PreguntaEntity pregunta){
        preguntaRepository.save(pregunta);
    }

    public ArrayList<PreguntaEntity> generarPrueba(String dificultad){
        ArrayList<PreguntaEntity> preguntasFiltradas = obtenerPreguntasPorDificultad(dificultad); // obtenemos la pregunta por dificultad
        Collections.shuffle(preguntasFiltradas,new Random()); // randomizamos las preguntas 
        ArrayList<PreguntaEntity> prueba = (ArrayList<PreguntaEntity>) preguntasFiltradas.subList(0, 4); // seleccionamos las 4 primeras 
        return prueba;
    }

    public void borrarTodo(){
        preguntaRepository.deleteAll();
    }
}
