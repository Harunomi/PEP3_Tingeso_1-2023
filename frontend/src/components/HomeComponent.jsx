import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export default function Home() {
    return (
        <div>
            <GlobalStyle />
            <HomeStyle>
                <h1 className="text-center"><b>LearnPython</b></h1>
                <div class="box-area">
                    <div class="single-box">
                        <a href="/prueba/basico">
                            <div class="img-area1">
                            </div>
                        </a>
                        <div class="img-text">
                            <span class="header-text"><strong>Prueba Dificultad Basica</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/prueba/intermedio">
                            <div class="img-area2">
                            </div>
                        </a>
                        <div class="img-text">
                            <span class="header-text"><strong>Prueba Dificultad Intermedio</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/prueba/avanzado">
                            <div class="img-area3">
                            </div>
                        </a>
                        <div class="img-text">
                            <span class="header-text"><strong>Prueba Dificultad Avanzada</strong></span>
                        </div>
                    </div>
                </div>
            </HomeStyle>
        </div>
    );
}

const GlobalStyle = createGlobalStyle`
body {
    background-color: #07050a;
}
`
const HomeStyle = styled.nav`

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
    color: var(--text); 
  }
  
  .box-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
  .single-box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: auto;
    border-radius: 4px;
    background-color: var(--secondary); 
    text-align: center;
    margin: 20px;
    padding: 20px;
    transition: 0.3s;
    color: var(--text); 
  }
  
  .img-area1, .img-area2, .img-area3 {
    display: flex;
    justify-content: center;
    align-items: fill;
    width: 80px;
    height: 80px;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
  }
  
  .img-area2 {
    width: 160px;
  }
  
  .img-area3 {
    width: 240px;
  }
  
  .single-box:nth-child(1) .img-area1 {
    background-image: url(https://media.discordapp.net/attachments/459599874166620160/1133624391641608284/1.png?width=676&height=676);
  }
  
  .single-box:nth-child(2) .img-area2 {
    background-image: url(https://media.discordapp.net/attachments/459599874166620160/1133624391910047874/2.png?width=1351&height=676);
  }
  
  .single-box:nth-child(3) .img-area3 {
    background-image: url(https://media.discordapp.net/attachments/459599874166620160/1133624392161689610/3.png?width=1402&height=468);
  }
  
  .header-text {
    font-size: 23px;
    font-weight: 500;
    line-height: 48px;
    color: var(--primary); 
  }
  
  .img-text p {
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
    color: var(--text); 
  }
  
  .single-box:hover {
    background: var(--accent); 
    color: var(--text); 
  }
  
  .login-box {
    cursor: pointer;
  }
  
`
