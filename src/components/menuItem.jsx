import React, { Component } from "react";

import "../css/quizApp.css";

const MenuItem = ({ theme, picUrl, size, history }) => {
  return (
    <React.Fragment>
      <div
        className={`large menu-item`}
        onClick={() => history.push(`${theme}`)}
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
