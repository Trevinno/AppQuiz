import React, { Component, useState, useEffect, useRef } from "react";
import QuestionOption from "./questionOption";
import axios from "axios";
import "../scripts/scriptsQuestion";

import "../css/question.css";
import Loader from "./loader";
import {
  newQuestionIndex,
  shuffleArray,
  shuffleOptions,
} from "./../scripts/scriptsQuestion";

const url = "http://localhost:5000/api/questions";

const Question = () => {
  let [questions, setQuestions] = useState([]);
  let [shuffledOptions, setshuffledOptions] = useState([]);

  let [currentQuestion, setCurrentQuestion] = useState(
    Math.floor(Math.random() * questions.length)
  );
  let [currentClasses, setCurrentClasses] = useState(["", "", "", ""]);

  console.log(shuffledOptions);
  const getQuestions = async () => {
    let questions = await axios.get(url);
    return questions;
  };

  useEffect(async () => {
    let questionsAPU = await getQuestions();
    setQuestions(shuffleArray(questionsAPU.data));
    setshuffledOptions(shuffleOptions());
  }, []);

  if (questions.length === 0) {
    return <Loader />;
  }

  let question = questions[currentQuestion];
  let multipleChoices = question.multipleChoice;

  const handleSelectedOption = (idOption) => {
    let newCurrentClasses = ["", "", "", ""];
    let emptyClasses = ["", "", "", ""];
    if (0 === idOption) {
      newCurrentClasses[idOption] = "correct";
    } else {
      newCurrentClasses[idOption] = "wrong";
    }
    setCurrentClasses(newCurrentClasses);

    let newIndicePregunta = newQuestionIndex(currentQuestion, questions);

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
          idOption={shuffledOptions[0]}
          choice={multipleChoices[shuffledOptions[0]]}
          classes={currentClasses[shuffledOptions[0]]}
          // handleSelectedOption={handleSelectedOption}
          // idOption={0}
          // choice={multipleChoices[0]}
          // classes={currentClasses[0]}
        />
        <QuestionOption
          idOption={shuffledOptions[1]}
          handleSelectedOption={handleSelectedOption}
          choice={multipleChoices[shuffledOptions[1]]}
          classes={currentClasses[shuffledOptions[1]]}
          // idOption={1}
          // handleSelectedOption={handleSelectedOption}
          // choice={multipleChoices[1]}
          // classes={currentClasses[1]}
        />
      </div>
      <div className="flex-column">
        <QuestionOption
          idOption={shuffledOptions[2]}
          handleSelectedOption={handleSelectedOption}
          choice={multipleChoices[shuffledOptions[2]]}
          classes={currentClasses[shuffledOptions[2]]}
          // idOption={2}
          // handleSelectedOption={handleSelectedOption}
          // choice={multipleChoices[2]}
          // classes={currentClasses[2]}
        />
        <QuestionOption
          idOption={shuffledOptions[3]}
          handleSelectedOption={handleSelectedOption}
          choice={multipleChoices[shuffledOptions[3]]}
          classes={currentClasses[shuffledOptions[3]]}
          // idOption={3}
          // handleSelectedOption={handleSelectedOption}
          // choice={multipleChoices[3]}
          // classes={currentClasses[3]}
        />
      </div>
    </div>
  );

  let questionDiv = (
    <div>
      <div className="flex-container">
        <div className="title">{question.question}</div>
        {choicesDiv}
      </div>
    </div>
  );

  return <React.Fragment>{questionDiv}</React.Fragment>;
};

export default Question;
