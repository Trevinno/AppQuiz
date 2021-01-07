import React, { Component, useState } from "react";
import "../css/question.css";

const QuestionOption = ({
  choice,
  handleSelectedOption,
  classes,
  idOption,
}) => {
  let [isHovering, setHovering] = useState(false);

  const handleClick = () => {
    handleSelectedOption(idOption);
  };

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={handleClick}
      className={`choices ${isHovering ? "hover" : ""} ${classes}`}
      //   className={`choices ${isHovering ? "hover" : ""} ${
      //     isSelected && correctAnswer === choice ? "correct" : ""
      //   }${isSelected && correctAnswer !== choice ? "wrong" : ""}`}
    >
      {choice}
    </div>
  );
};

export default QuestionOption;
