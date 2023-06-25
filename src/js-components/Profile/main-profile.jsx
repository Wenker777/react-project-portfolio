import NewPost from "./MyPosts/NewPost";
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import "./main-profile.css";
import React from 'react';
const Content = (props) => {
	let postElements = props.profileElements.postData.map( p => <Post likes={p.likes} message={p.message}/>)
	return (
		<div className="main-screen__content">
			<ProfileInfo/>
			<NewPost newPostText={props} addPost={props.addPost} updatePostText={props.updatePostText}/>
			{ postElements }
		</div>
	);
}
export default Content;