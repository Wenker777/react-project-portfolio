import NewPost from "./MyPosts/NewPost";
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import "./main-profile.css";
const Content = (props) => {


	let postElements = props.postElements.map( p => <Post likes={p.likes} message={p.message}/>)
	return (
		<div className="main-screen__content">
			<ProfileInfo/>
			<NewPost/>
			{ postElements }
			{/* <Post likes={postData[0].likes} message={postData[0].message}/>
			<Post likes={postData[1].likes} message={postData[1].message}/> */}
		</div>
	);
}
export default Content;