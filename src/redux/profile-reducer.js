let initialState = {
	postData: [
		{ id: 1, likes: 15, message: 'Hello, what`s your name and how old are you?' },
		{ id: 2, likes: 20, message: 'Hi, my name is Kerim and i`m 20 y.o.' },
	],
	newPostText: ''
}

const profileReducer = (state = initialState, action) => { // Изначально под именем state пришел profilePage при удовлетворении условия if он преобразовывается и возвращается через тот-же state
	// rerender происходит не здесь


	switch (action.type) {
		case 'UPDATE-POST-TEXT':
			state.newPostText = action.newText;
			return state;

		case 'ADD-POST':
			let newPost = {
				id: 3,
				likes: 0,
				message: state.newPostText,
			}
			state.postData.unshift(newPost);
			state.newPostText = '';
			return state;

		default:
			return state;
	}
}

export let onPostChangeActionCreator = (textFromNewPost) => {
	return {
		type: 'UPDATE-POST-TEXT',
		newText: textFromNewPost,
	}
}
export let addPostActionCreator = () => {
	return {
		type: 'ADD-POST'
	}
}
export default profileReducer;