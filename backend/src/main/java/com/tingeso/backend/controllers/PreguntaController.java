package com.tingeso.backend.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tingeso.backend.entities.PreguntaEntity;
import com.tingeso.backend.services.PreguntaService;

@RestController
@RequestMapping
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
}
