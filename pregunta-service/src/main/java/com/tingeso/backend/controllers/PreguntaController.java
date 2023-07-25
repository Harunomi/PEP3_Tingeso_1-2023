package com.tingeso.backend.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tingeso.backend.entities.PreguntaEntity;
import com.tingeso.backend.services.PreguntaService;

@RestController
@RequestMapping("/pregunta")
public class PreguntaController {
    @Autowired
    PreguntaService preguntaService;

    @GetMapping("/listaPreguntas")
    public ResponseEntity<ArrayList<PreguntaEntity>> listaPreguntas(){
        ArrayList<PreguntaEntity> preguntas = preguntaService.obtenerPreguntas();
        if (preguntas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }
    @GetMapping("/prueba/{dificultad}")
    public ResponseEntity<ArrayList<PreguntaEntity>> prueba(@PathVariable("dificultad") String dificultad){
        ArrayList<PreguntaEntity> prueba = preguntaService.generarPrueba(dificultad);
        if (prueba.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(prueba);
    }

    @GetMapping("/listaPreguntas/{dificultad}")
    public ResponseEntity<ArrayList<PreguntaEntity>> listaPreguntasDificultad(@PathVariable("dificultad") String dificultad){
        ArrayList<PreguntaEntity> preguntas = preguntaService.obtenerPreguntasPorDificultad(dificultad);
        if (preguntas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }

    @PostMapping
    public void crearPregunta(@RequestBody PreguntaEntity pregunta){
        preguntaService.guardarPregunta(pregunta);
    }

    @PostMapping("/borrarTodo")
    public void borrarTodo(){
        preguntaService.borrarTodo();
    }
}
