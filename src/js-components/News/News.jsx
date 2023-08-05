import EachNews from './EachNews/EachNews'
import './News.css'
import React from 'react';
import ChildComponent from './example';

const News = (props) =>{
	let newsElements = props.newsElements.newsData.map( n => <EachNews key={n.id} name={n.name} article={n.article}/>)
	return(
		<div className='main-screen__news'>
			{newsElements}
			<ChildComponent>
				<p>Lorem ipsum dolor sit amet.</p>
			</ChildComponent>
		</div>
	)
}
export default News;