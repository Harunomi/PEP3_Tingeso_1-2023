package com.tingeso.backend.services;

import java.util.ArrayList;

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

    public void borrarTodo(){
        preguntaRepository.deleteAll();
    }
}
