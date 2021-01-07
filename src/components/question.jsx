import React, { Component, useState } from "react";
import QuestionOption from "./questionOption";
import Timer from "./timer";

import "../css/question.css";

const Question = () => {
  let [currentTimer, setCurrentTimer] = useState(10);

  let newQuestionIndex = () => {
    let newIndicePregunta = Math.floor(Math.random() * questions.length);
    while (currentQuestion === newIndicePregunta) {
      newIndicePregunta = Math.floor(Math.random() * questions.length);
    }
    return newIndicePregunta;
  };

  let questions = [
    {
      _id: "1",
      question: "¿Le gana rayados a Santos?",
      multipleChoice: ["Si", "No", "Chance", "No sé"],
      option: 1,
    },
    {
      _id: "2",
      question: "¿Le gana rayados a Santos Pregunta 2?",
      multipleChoice: ["Si", "No", "Chance", "No sé"],
      option: 0,
    },
  ];

  let [currentQuestion, setCurrentQuestion] = useState(
    Math.floor(Math.random() * questions.length)
  );

  let [currentClasses, setCurrentClasses] = useState(["", "", "", ""]);

  let question = questions[currentQuestion];
  let multipleChoices = question.multipleChoice;

  const handleSelectedOption = (idOption) => {
    let newCurrentClasses = ["", "", "", ""];
    let emptyClasses = ["", "", "", ""];
    if (question.option === idOption) {
      newCurrentClasses[idOption] = "correct";
    } else {
      newCurrentClasses[idOption] = "wrong";
    }
    setCurrentClasses(newCurrentClasses);

    let newIndicePregunta = newQuestionIndex();

    setTimeout(() => {
      setCurrentClasses(emptyClasses);
      setCurrentQuestion(newIndicePregunta);
    }, 500);
  };

  let choicesDiv = (
    <div className="choices-father">
      <div className="flex-column">
        <QuestionOption
          handleSelectedOption={handleSelectedOption}
          idOption={0}
          choice={multipleChoices[0]}
          classes={currentClasses[0]}
        />
        <QuestionOption
          idOption={1}
          handleSelectedOption={handleSelectedOption}
          choice={multipleChoices[1]}
          classes={currentClasses[1]}
        />
      </div>
      <div className="flex-column">
        <QuestionOption
          idOption={2}
          handleSelectedOption={handleSelectedOption}
          choice={multipleChoices[2]}
          classes={currentClasses[2]}
        />
        <QuestionOption
          idOption={3}
          handleSelectedOption={handleSelectedOption}
          choice={multipleChoices[3]}
          classes={currentClasses[3]}
        />
      </div>
    </div>
  );

  let changingQuestion = false;

  const handleTimeout = () => {
    if (!changingQuestion) {
      let newIndicePregunta = newQuestionIndex();
      changingQuestion = true;

      setCurrentQuestion(newIndicePregunta);
      setCurrentTimer(10);

      changingQuestion = false;
    }
  };

  const handleTimer = () => {
    if (currentTimer === 0 && !changingQuestion) {
      handleTimeout();
    } else if (!changingQuestion) {
      setTimeout(() => setCurrentTimer(currentTimer - 1), 1000);
    }
  };

  handleTimer();

  let questionDiv = (
    <div>
      <Timer seconds={currentTimer} />
      <div className="flex-container">
        <div className="title">{question.question}</div>
        {choicesDiv}
      </div>
    </div>
  );

  return <React.Fragment>{questionDiv}</React.Fragment>;
};

export default Question;
