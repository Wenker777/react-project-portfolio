import EachNews from './EachNews/EachNews'
import './News.css'

const News = (props) =>{
	let newsElements = props.newsElements.map( n => <EachNews name={n.name} article={n.article}/>)
	return(
		<div className='main-screen__news'>
			{newsElements}
		</div>
	)
}
export default News;