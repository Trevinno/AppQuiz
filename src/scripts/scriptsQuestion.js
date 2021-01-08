let newQuestionIndex = () => {
  let newIndicePregunta = Math.floor(Math.random() * questions.length);
  while (currentQuestion === newIndicePregunta) {
    newIndicePregunta = Math.floor(Math.random() * questions.length);
  }
  return newIndicePregunta;
};
