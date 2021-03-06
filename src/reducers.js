import { combineReducers } from 'redux'
import { SUBMIT_ANSWER, NEXT_QUESTION } from './actions'
import _ from 'underscore'

 
const initialState = {
  currentQuestion: 0,
  currentSelection: null,
  questions: [{
      choiceList: [
        {text: "Doberman", id: 1},
        {text: "Scottish Terrier", id: 2},
        {text: "Akira", id: 3},
        {text: "Hound", id: 4},
      ], 
      answer: 2,
      image: "https://dummyimage.com/150x250/000/fff",
      response: null
    },{
      choiceList: [
        {text: "Saint Bernard", id: 1},
        {text: "Germany Shepard", id: 2},
        {text: "Golden Retriever", id: 3},
        {text: "Great Dane", id: 4},
      ], 
      answer: 0,
      image: "https://dummyimage.com/150x250/CCC/FFF",
      response: null
    }]
}
 
function quiz(state = initialState, action) {
  switch(action.type){
    case SUBMIT_ANSWER: return r(state, action)
    case NEXT_QUESTION: return q(state, action)
    default: return state
  }  
}

function r(state, action){
  var question = state.questions[state.currentQuestion]
  question.response = (question.answer === action.answer) ? question.answer : false;
  state.currentSelection = action.answer;
  return _.extend({}, state);
}

function q(state, action){
  if (state.currentQuestion < (state.questions.length - 1)){
    state.currentQuestion += 1;
    state.currentSelection = null;
    console.info("next Question");
    return _.extend({}, state);
  } else {
    console.info("end");
    return state;
  }
}
 
const quizApp = combineReducers({
  quiz
})
 
export default quizApp