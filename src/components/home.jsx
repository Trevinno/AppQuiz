import React, { Component } from "react";

import "../css/quizApp.css";

import MenuItem from "../components/menuItem";

const Home = () => {
  let questions = [
    [
      { _id: "1", question: "", multipleChoice: ["", "", "", ""], option: "" },
      { _id: "2", question: "", multipleChoice: ["", "", "", ""], option: "" },
      { _id: "3", question: "", multipleChoice: ["", "", "", ""], option: "" },
    ],
    [
      { _id: "4", question: "", multipleChoice: ["", "", "", ""], option: "" },
      { _id: "5", question: "", multipleChoice: ["", "", "", ""], option: "" },
      { _id: "5", question: "", multipleChoice: ["", "", "", ""], option: "" },
    ],
  ];

  let menuItems = [
    {
      _id: "1",
      theme: "Historia",
      picUrl:
        "https://www.entornoturistico.com/wp-content/uploads/2020/09/mural-Epopeya-del-pueblo-mexicano-660x330.jpg",
    },
    {
      _id: "2",
      theme: "Cultura",
      picUrl:
        "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5f97164d5bafe82537aac059/1-cultura-mexicana_1.jpg",
    },
    {
      _id: "3",
      theme: "Deportes",
      picUrl:
        "https://i0.wp.com/naciondeportes.com/wp-content/uploads/2018/07/lag.jpg?fit=1000%2C600&ssl=1",
    },
    {
      _id: "4",
      theme: "Figuras",
      picUrl: "https://i.ibb.co/3SPDwSb/updated-khalo-final.jpg",
    },
  ];

  return (
    <React.Fragment>
      <div className="homepage">
        <div className="directory-menu">
          {menuItems.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
