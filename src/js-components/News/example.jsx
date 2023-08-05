import React from "react";
import './News.css'

const ChildComponent = (props) =>{
	return (
	<div className="example">
		<h1>This is child component</h1>
		{props.children}
	</div>
	)
}
export default ChildComponent;