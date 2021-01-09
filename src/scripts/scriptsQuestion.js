export let newQuestionIndex = (questions, usedQuestions) => {
  let newIndicePregunta = Math.floor(Math.random() * questions.length);
  while ( usedQuestions.includes(newIndicePregunta)) {
    newIndicePregunta = Math.floor(Math.random() * questions.length);
  }
  return newIndicePregunta;
};

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function shuffleOptions() {
  let array = [0, 1, 2, 3];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
