import React from "react";

function Header(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">Tingeso Evaluacion 3</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/crear-pregunta">Crear Pregunta</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
        
    );
}

export default Header;