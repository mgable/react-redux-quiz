
import React from 'react';
import Choice from './Choice';
 
const ChoiceList = ({ choices, onChoiceClick, ...rest }) => {
	return (
	  <ul>
	    {choices.map((choice, index) => (
	      <Choice key={index} {...choice}  index={index} { ...rest} onClick={() => onChoiceClick(index)}/>
	    ))}
	  </ul>
  	)
}
 
 
export default ChoiceList