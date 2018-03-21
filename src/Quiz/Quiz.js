import { connect } from 'react-redux'
import { submitAnswer, nextQuestion } from '../actions'
import Layout from './components/Layout.jsx'

const getChoices = (state) => {
	console.info(state);
  return state
}

const getImage = (state) => {
	console.info("the iamge");
	console.info(state);
  return state
}

const getResponse = (state) => {
	console.info("the response");
	console.info(state);
  return state
}

const mapStateToProps = state => {
  return {
    choices: getChoices(state.quiz.questions[state.quiz.currentQuestion].choiceList),
    image: getImage(state.quiz.questions[state.quiz.currentQuestion].image),
    response: getResponse(state.quiz.questions[state.quiz.currentQuestion].response),
    currentQuestion: getResponse(state.quiz.currentQuestion),
    currentSelection: getResponse(state.quiz.currentSelection),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChoiceClick: id => {
      dispatch(submitAnswer(id));
      setTimeout(() => {
      	dispatch(nextQuestion());
      }, 4000)
    }
  }
}

const QuizApp = connect(
  mapStateToProps,
 mapDispatchToProps
)(Layout)

export default QuizApp