import React, { Component, useState, useEffect } from "react";
import {useParams, useHistory} from 'react-router-dom'
// import Modal from 'react-modal'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';

import QuestionOption from './questionOption';
import PopUp from './popUp'

import "../scripts/scriptsQuestion";

import "../css/question.css";

import Loader from "./loader";
import {
  newQuestionIndex,
  shuffleArray,
  shuffleOptions,
} from "./../scripts/scriptsQuestion";


const Question = () => {
  const {theme} = useParams()
  let history = useHistory()
  const url = `http://localhost:5000/api/questions/${theme}`;
  let [questions, setQuestions] = useState([]);
  let [shuffledOptions, setshuffledOptions] = useState([]);
  let [correctAnswers, setcorrectAnswers] = useState(0)
  let [currentCount, setcurrentCount] = useState(1)
  let [modalValue, setmodalValue] = useState(false)
  let [currentQuestion, setCurrentQuestion] = useState(
    Math.floor(Math.random() * questions.length)
  );
  let [currentClasses, setCurrentClasses] = useState(["", "", "", ""]);
  const totalQuestions = 8;
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

  const Message = (correctAnswers) => {
    console.log(correctAnswers)
    switch(true) {
        case (correctAnswers < 3):
            return 'Te ira mejor a la proxima'
        case (correctAnswers < 6):
            return 'Bien!'
        case (correctAnswers < 8):
            return 'Felicidades!'
    }
  }


  const handleCloseModal = () => {
    console.log('hello modal')
    setmodalValue(false)
    history.push('/Home')
  }

  const handleOpenModal = () => {
      setmodalValue(true)
  }

  let question = questions[currentQuestion];
  let multipleChoices = question.multipleChoice;

  let usedQuestions = []

  const handleSelectedOption = (idOption) => {
    let newCurrentClasses = ["", "", "", ""];
    let emptyClasses = ["", "", "", ""];
    if (0 === idOption) {
      newCurrentClasses[idOption] = "correct";
      setcorrectAnswers(correctAnswers++)
    } else {
      newCurrentClasses[idOption] = "wrong";
    }
    setCurrentClasses(newCurrentClasses);

    if (currentCount < totalQuestions) {
    usedQuestions.push(currentQuestion);
    let newIndicePregunta = newQuestionIndex(questions, usedQuestions);

    setTimeout(() => {
      setCurrentClasses(emptyClasses);
      setCurrentQuestion(newIndicePregunta);
      setcurrentCount(currentCount + 1)
    }, 500);

    } else {
      handleOpenModal()
    }
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
        <div className="title">{question.question}  {` ${currentCount} / ${totalQuestions}`}</div>
        {choicesDiv}
      </div>
      {/* <Modal
        isOpen={modalValue}
        shouldCloseOnOverlayClick={false}
        style={{
          width: '20rem'
        }}
        > 
        <PopUp
        handleCloseModal={handleCloseModal}
        totalQuestions={totalQuestions}
        correctAnswers={correctAnswers}
        />
        </Modal> */}
        <Modal show={modalValue} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{Message(correctAnswers)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PopUp
          handleCloseModal={handleCloseModal}
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          />
        </Modal.Body>
        </Modal>
    </div>
  );

  return <React.Fragment>{questionDiv}</React.Fragment>;
};

export default Question;
