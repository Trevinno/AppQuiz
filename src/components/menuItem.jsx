import React, { Component } from "react";
import { useHistory } from "react-router-dom";


import "../css/quizApp.css";

const MenuItem = ({ theme, picUrl, size }) => {
  let history = useHistory()

  return (
    <React.Fragment>
      <div
        className={`large menu-item`}
        onClick={() => history.push(`/Preguntas/${theme}`)}
      >
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${picUrl})`,
          }}
        />
        <div className="content">
          <h1 className="title">{theme.toUpperCase()}</h1>
          <span className="subtitle">Iniciar</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MenuItem;
