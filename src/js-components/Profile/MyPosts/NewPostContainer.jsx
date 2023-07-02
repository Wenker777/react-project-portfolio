import React from 'react';
import { onPostChangeActionCreator, addPostActionCreator } from "../../../redux/profile-reducer";
import NewPost from "./NewPost";
const NewPostContainer = (props) => {
let onPostChange = (textFromNewPost) =>{
	let action = onPostChangeActionCreator(textFromNewPost);
	props.dispatch(action);
}
let addPost = () =>{
	props.dispatch(addPostActionCreator());
}
	return (<NewPost addPost={addPost} onPostChangeActionCreator={onPostChange} newPostText={props.newPostText}/>)
}

export default NewPostContainer;

