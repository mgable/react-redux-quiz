import React from 'react';
import ChoiceList from './ChoiceList.jsx';
import './Layout.css'
import Results from './Results.jsx';
 
const Layout = ({image, response, total, loaded, correct, wrong, ...rest}) => {
	var itemStyle = {
		color: 'white',
		backgroundImage: 'url(' + image + ')',
		WebkitTransition: 'all', // note the capital 'W' here
		msTransition: 'all' // 'ms' is the only lowercase vendor prefix
	};

	if (loaded){
		return (
			<div className="quiz-holder">
				<img className="wait" alt="wait spinner" src="./ajax-loader.gif" />
				<div className="image-holder" style={itemStyle}></div>
				<ChoiceList response={response} {...rest}></ChoiceList>
				<Results total={total} correct={correct} wrong={wrong}></Results>
			</div>
		)
	} else {
		return null;
	}
}
 
 
export default Layout
