import axios from 'axios';

const URL = "http://localhost:8080/pregunta";

class PreguntaService {
    obtenerPreguntas(){
        return axios.get(URL+"/listaPreguntas");
    }    

    crearPregunta(pregunta){
        return axios.post(URL,pregunta);
    
    }

    obtenerPreguntasDificultad(dificultad){
        return axios.get(URL+"/listaPreguntas/"+dificultad);
    }

    obtenerPrueba(dificultad){
        return axios.get(URL + "/prueba/" + dificultad);
    }
}

export default new PreguntaService()