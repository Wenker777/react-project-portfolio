import "./NewPost.css"

const NewPost = () => {
	return (
		<div className="main-screen__content-inputNews">
			<form action="#" method="post" className="main-screen__content-form">
				<div className="main-screen__content-form-wrapper">
					<textarea name="textArea" placeholder="Write something..." id="textArea" className="main-screen__content-textarea">
					</textarea>
					<button className="main-screen__content-button">
						Send
					</button>
				</div>
			</form>
		</div>
	);
}

export default NewPost;