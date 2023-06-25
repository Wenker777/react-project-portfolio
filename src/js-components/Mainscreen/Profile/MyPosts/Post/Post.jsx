import "./Post.css"

const Post = (props) => {
	return (
		<div className="main-screen__content-post">
			<div className="main-screen__content-post-at">
				<div className="main-screen__content-post-ava">
					<img alt="" src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png">
					</img>
				</div>
				<div className="main-screen__content-text">
					<p>
						{props.message} {props.name} {props.age}
					</p>
				</div>
			</div>

			<div className="main-screen__content-post-likes">
				<p>
					{props.likes + " likes"}
				</p>
			</div>
		</div>
	);
}

export default Post;