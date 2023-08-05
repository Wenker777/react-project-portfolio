import "./NewPost.css"
import React, { useEffect } from 'react';
const NewPost = React.memo(props => {
let onPostChange = (e) =>{
	let textFromNewPost = e.target.value;
	props.onPostChangeActionCreator(textFromNewPost);
}
let addPost = () =>{
	props.addPost();
}
	return (
		<div className="main-screen__content-inputNews">
			<div className="main-screen__content-form">
				<div className="main-screen__content-form-wrapper">
					<textarea onChange={onPostChange} value={props.newPostText} placeholder="Write something..." className="main-screen__content-textarea"/>
					<button type="button" onClick={addPost}  className="main-screen__content-button">
						Add post
					</button>
				</div>
			</div>
		</div>
	);
})

export default NewPost;

