import "./NewPost.css"
import React from 'react';
const NewPost = (props) => {
	let enter = (e) =>{
		if(e.keyCode === 13 && e.ctrlKey){
			let paragraph = true;
      onPostChange(e, paragraph);
		}
		else if(e.key === 'Enter'){
			addPost();
		}
		
	}


let onPostChange = (e, paragraph) =>{
	let textFromNewPost = '';
		if(e.target.value !== '\n'){
			textFromNewPost =  e.target.value;
		}

	props.onPostChangeActionCreator(textFromNewPost, paragraph);
}
let addPost = () =>{
	props.addPost();
}
	return (
		<div className="main-screen__content-inputNews">
			<div className="main-screen__content-form">
				<div className="main-screen__content-form-wrapper">
					<textarea onChange={onPostChange} onKeyDown={enter} value={props.newPostText} placeholder="Write something..." className="main-screen__content-textarea"/>
					<button type="button" onClick={addPost}  className="main-screen__content-button">
						Add post
					</button>
				</div>
			</div>
		</div>
	);
}

export default NewPost;

