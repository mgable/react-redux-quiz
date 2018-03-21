import React from 'react';
import ChoiceList from './ChoiceList.jsx';
 
const Layout = ({image, response, ...rest}) => {
	return (
		<div className="quiz-holder">
			<span>current is {response}</span>
			<img src={image} />
			<ChoiceList response={response} {...rest}></ChoiceList>
		</div>
	)
}
 
 
export default Layout
