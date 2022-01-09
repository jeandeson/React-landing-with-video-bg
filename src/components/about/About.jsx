import React from "react";
import imagem7 from "../../imagens/imagem7.jpeg";
import imagem5 from "../../imagens/imagem5.jpeg";
import imagem6 from "../../imagens/imagem6.jpeg";
// import imagem3 from "../../imagens/imagem3.jpg";
// import imagem4 from "../../imagens/imagem4.jpg";

import "./Styles.css";

const About = () => {
  return (
    <div className="about-container">
      <div
        class="caixa1"
        style={{
          backgroundImage: `url(${imagem5})`,
        }}
      >
        <div class="conteudo-titulo">
          <span className="titulo">About us</span>
        </div>
      </div>
      <div class="conteudo">
        <h3>Morbi consectetur cursus</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.Lorem ipsum dolor sit amet,
          consectetur adispicing elit. Morbi consectetur cursus purus eu
          semper.Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.Lorem ipsum dolor sit amet,
          consectetur adispicing elit. Morbi consectetur cursus purus eu
          semper.Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.Lorem ipsum dolor sit amet,
          consectetur adispicing elit. Morbi consectetur cursus purus eu
          semper.Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.Lorem ipsum dolor sit amet,
          consectetur adispicing elit. Morbi consectetur cursus purus eu
          semper.Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.
        </p>
      </div>
      <div
        class="caixa2"
        style={{
          backgroundImage: `url(${imagem6})`,
        }}
      >
        <div class="conteudo-titulo">
          <span class="titulo">What we do</span>
        </div>
      </div>
      <div class="conteudo">
        <h3>Morbi consectetur cursus</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.Lorem ipsum dolor sit amet,
          consectetur adispicing elit. Morbi consectetur cursus purus eu
          semper.Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.Lorem ipsum dolor sit amet,
          consectetur adispicing elit. Morbi consectetur cursus purus eu
          semper.Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.Lorem ipsum dolor sit amet,
          consectetur adispicing elit. Morbi consectetur cursus purus eu
          semper.Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.Lorem ipsum dolor sit amet,
          consectetur adispicing elit. Morbi consectetur cursus purus eu
          semper.Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.
        </p>
      </div>
      <div
        class="caixa2"
        style={{
          backgroundImage: `url(${imagem7})`,
        }}
      >
        <div class="conteudo-titulo">
          <span class="titulo">WHO WE ARE</span>
        </div>
      </div>
      <div class="conteudo">
        <h3>Morbi consectetur cursus</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.Lorem ipsum dolor sit amet,
          consectetur adispicing elit. Morbi consectetur cursus purus eu
          semper.Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.Lorem ipsum dolor sit amet,
          consectetur adispicing elit. Morbi consectetur cursus purus eu
          semper.Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.Lorem ipsum dolor sit amet,
          consectetur adispicing elit. Morbi consectetur cursus purus eu
          semper.Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.Lorem ipsum dolor sit amet,
          consectetur adispicing elit. Morbi consectetur cursus purus eu
          semper.Lorem ipsum dolor sit amet, consectetur adispicing elit. Morbi
          consectetur cursus purus eu semper.
        </p>
      </div>
    </div>
  );
};

export default About;
