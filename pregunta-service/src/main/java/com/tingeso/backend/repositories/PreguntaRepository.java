package com.tingeso.backend.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.tingeso.backend.entities.PreguntaEntity;

@Repository
public interface PreguntaRepository extends CrudRepository<PreguntaEntity,Long> {
    public ArrayList<PreguntaEntity> findByDificultad(String dificultad);
    
}
