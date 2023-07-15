import NewPostContainer from "./MyPosts/NewPostContainer";
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import "./main-profile.css";
import React from 'react';

const Profile = (props) => {
	let postElements = props.profileElements.postData.map( p => <Post likes={p.likes} message={p.message}/>)
	return (
		<div className="main-screen__content">
			<ProfileInfo profile={props.profile}/>
			<NewPostContainer />  {/*dispatch={props.dispatch} newPostText={props.profileElements.newPostText} */}
			{ postElements }
		</div>
	);
}

export default Profile;