import Search from './services.js';
import _ from 'underscore';

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

 export function makeQuiz(quiz) {
 	return { type: MAKE_QUIZ, quiz }
 }


 export function fetchPosts() { 
 	return function (dispatch) { 
 		//dispatch(getData()) 
 		return _fetchData()
 		.then(
 			response => _makeQuiz(response),
 			error => console.log('An error occurred.', error)
 			)
 		.then(json => dispatch(makeQuiz(json))
 			)
 	}
 }

 function _fetchData(){
 	return new Promise((resolve, reject) => {
 		Search.getBreeds().then((response) => {
 			console.info("I got the breeds !!!!!!!!!!!!");
 			console.info(response);

 			resolve (response)
 			
 		}, (error) => {
 			console.info("I got and error 2");
 			console.info(error);
 			reject(error)
 		});	
 	});
 }

 const _makeQuiz = (breeds) => {
 	return new Promise((resolve, reject) => {
 		console.info("I am really making the quiz");
		console.info(breeds);
		var quiz = [], numOfQuestions = 1,
			rawBreedsList = Object.keys(breeds.message),
			breed,
			otherBreeds;

		while(numOfQuestions-- >= 0){
			quiz.push(_makeQuestion(rawBreedsList));
		}

		Promise.all(quiz).then((response) => {
			resolve(response);
		}, (error) => {
			reject(error)
		})
		
 	});
}

const _makeQuestion = (rawBreedsList) => {
	return new Promise((resolve, reject) => {
		let breed = _pickRandomBreed(rawBreedsList),
			otherBreeds = _pickRandomBreed(rawBreedsList, 3, breed),
			choiceList = _makeChoiceList(breed, otherBreeds), 
			question = {
				choiceList,
				answer: _.indexOf(choiceList, _.findWhere(choiceList, {"text": breed})),
				image: "https://dummyimage.com/150x250/000/fff",
				response: null
			}

		console.info(choiceList);

		resolve(question);
	});
}

const _makeChoiceList = (breed, otherBreeds) => {
	let breeds = [breed, ...otherBreeds],
		results = _.map(breeds, (breed, idx) => {
			return {text: breed, id: idx};
		});

	return results
}

const _pickRandomBreed = (_rawBreedsList, howMany = 1, omit) => {
	var results = [],
		total = howMany,
		rawBreedsList;

	if (omit){
		rawBreedsList = _.without(_rawBreedsList, omit);
	} else {
		rawBreedsList = _rawBreedsList.slice(0)
	}

	while(total--){
		var index = Math.floor((Math.random() * rawBreedsList.length)),
		item = rawBreedsList.splice(index, 1);
		results.push(item[0]);
	}

	if (howMany === 1){
		return results[0];
	}

	return results;
}