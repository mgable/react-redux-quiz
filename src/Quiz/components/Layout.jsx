import React from 'react';
import ChoiceList from './ChoiceList.jsx';
 
const Layout = ({image, response, ...rest}) => {
	return (
		<div className="quiz-holder">
			<img src={image} alt="breed"/>
			<ChoiceList response={response} {...rest}></ChoiceList>
		</div>
	)
}
 
 
export default Layout
