import React from 'react';
import { onPostChangeActionCreator, addPostActionCreator } from "../../../redux/profile-reducer";
import NewPost from "./NewPost";
import { connect } from 'react-redux';

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

		onPostChangeActionCreator: (textFromNewPost, paragraph) => {
			let action = onPostChangeActionCreator(textFromNewPost, paragraph);
			dispatch(action);
		},
	})
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;

