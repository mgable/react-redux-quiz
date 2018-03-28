import React from 'react';
import ChoiceList from './ChoiceList.jsx';
import './Layout.css'
import Results from './Results.jsx';
import { STATES } from '../../actions';
 
const Layout = ({image, response, total, status, correct, current, wrong, ...rest}) => {
	var itemStyle = {
		color: 'white',
		backgroundImage: 'url(' + image + ')',
		WebkitTransition: 'all', // note the capital 'W' here
		msTransition: 'all' // 'ms' is the only lowercase vendor prefix
	};

	if (status === STATES.LOADED){
		return (
			<div className="quiz-holder">
				<img className="wait" alt="wait spinner" src="./ajax-loader.gif" />
				<div className="image-holder" style={itemStyle}></div>
				<ChoiceList response={response} {...rest}></ChoiceList>
				<Results total={total} correct={correct} wrong={wrong} current={current}></Results>
			</div>
		)
	} else if (status === STATES.FINISH){
		return (
			<div className="quiz-holder">
				<img className="wait" alt="wait spinner" src="./ajax-loader.gif" />
				<div className="image-holder" style={itemStyle}></div>
				<div>Game Over Man!</div>
				<Results total={total} correct={correct} wrong={wrong} current={current}></Results>
			</div>
		)
	} else {
		return null;
	}
}
 
 
export default Layout
