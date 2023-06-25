import "./NewPost.css"
import React from 'react';
const NewPost = (props) => {
	let newPostElement = React.createRef();
	console.log(props)
	let onPostChange = () =>{
		let textFromNewPost = newPostElement.current.value;
		props.updatePostText(textFromNewPost);
	}
	let addPost = () =>{
		// let textFromNewPost = newPostElement.current.value;
		// let textFromNewPostForAdd = newPostElement.current.value;
		// props.addPost(textFromNewPostForAdd);
		// newPostElement.current.value = '';
		props.addPost();
}


	return (
		<div className="main-screen__content-inputNews">
			<div className="main-screen__content-form">
				<div className="main-screen__content-form-wrapper">
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText.profileElements.newPostText} placeholder="Write something..." className="main-screen__content-textarea"/>
					<button type="button" onClick={addPost}  className="main-screen__content-button">
						Add post
					</button>
				</div>
			</div>
		</div>
	);
}

export default NewPost;

