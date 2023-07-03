import { onPostChangeActionCreator, addPostActionCreator } from "../../../redux/profile-reducer";
import NewPost from "./NewPost";
import { connect } from 'react-redux';
import React from 'react';
// const NewPostContainer = (props) => {
// 	let onPostChange = (textFromNewPost) => {
// 		let action = onPostChangeActionCreator(textFromNewPost);
// 		props.dispatch(action);
// 	}
// 	let addPost = () => {
// 		props.dispatch(addPostActionCreator());
// 	}
// 	return (<NewPost
// 		addPost={addPost}
// 		onPostChangeActionCreator={onPostChange}
// 		newPostText={props.newPostText} />)
// }

const mapStateToProps = (state) => {
	return ({
		newPostText: state.profilePage.newPostText,
	})
}

const mapDispatchToProps = (dispatch) => {
	return ({
		addPost: () => {
			dispatch(addPostActionCreator());
		},

		onPostChangeActionCreator: (textFromNewPost) => {
			let action = onPostChangeActionCreator(textFromNewPost);
			dispatch(action);
		},
	})
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;

