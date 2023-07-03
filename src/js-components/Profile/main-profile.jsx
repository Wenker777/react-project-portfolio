import { connect } from "react-redux";
import NewPostContainer from "./MyPosts/NewPostContainer";
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import "./main-profile.css";
import React from 'react';

const Content = (props) => {
	let postElements = props.profileElements.postData.map( p => <Post likes={p.likes} message={p.message} key={p.id}/>)
	return (
		<div className="main-screen__content">
			<ProfileInfo/>
			<NewPostContainer />  {/*dispatch={props.dispatch} newPostText={props.profileElements.newPostText} */}
			{ postElements }
		</div>
	);
}

export default Content;