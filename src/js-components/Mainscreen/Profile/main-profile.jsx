import NewPost from "./MyPosts/NewPost";
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import "./main-profile.css";
const Content = () => {

	let postData = [
		{likes: 15, message: 'Hello, what`s your name and how old are you?'},
		{likes: 20, message: 'Hi, my name is Kerim and i`m 20 y.o.'},
	]
	let postElements = postData.map( p => <Post likes={p.likes} message={p.message}/>)
	return (
		<div className="main-screen__content">
			<ProfileInfo/>
			<NewPost/>
			{ postElements }
		</div>
	);
}
export default Content;