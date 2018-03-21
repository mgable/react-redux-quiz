/*
 * action types
 */

export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'
export const NEXT_QUESTION = 'NEXT_QUESTION'
export const MAKE_QUIZ = 'MAKE_QUIZ'

/*
 * action creators
 */

export function submitAnswer(answer) {
  return { type: SUBMIT_ANSWER, answer }
}

export function nextQuestion() {
  return { type: NEXT_QUESTION }
}

export function makeQuiz(state) {
  return { type: MAKE_QUIZ, state }
}