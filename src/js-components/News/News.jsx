import EachNews from './EachNews/EachNews'
import './News.css'
import React from 'react';
const News = (props) =>{
	console.log(props);
	let newsElements = props.newsElements.newsData.map( n => <EachNews name={n.name} article={n.article}/>)
	return(
		<div className='main-screen__news'>
			{newsElements}
		</div>
	)
}
export default News;