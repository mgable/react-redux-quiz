import React from 'react';
import ChoiceList from './ChoiceList.jsx';
import './Layout.css'
 
const Layout = ({image, response, ...rest}) => {
	var itemStyle = {
		color: 'white',
		backgroundImage: 'url(' + image + ')',
		WebkitTransition: 'all', // note the capital 'W' here
		msTransition: 'all' // 'ms' is the only lowercase vendor prefix
	};

	return (
		<div className="quiz-holder">
			<img className="wait" alt="wait spinner" src="./ajax-loader.gif" />
			<div className="image-holder" style={itemStyle}></div>
			<ChoiceList response={response} {...rest}></ChoiceList>
		</div>
	)
}
 
 
export default Layout
