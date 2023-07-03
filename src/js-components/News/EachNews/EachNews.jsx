import './../News.css'
import React from 'react';

const EachNews = (props) =>{
	return(
			<div className="main-screen__news-each">
				<div className="main-screen__autor">
					{props.name}
				</div>
				<div className="main-screen__article">
					{props.article}
				</div>
			</div>
	)
}
export default EachNews;