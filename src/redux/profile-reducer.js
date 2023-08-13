import { usersAPI } from "../API/api";
let initialState = {
	postData: [
		{ id: 1, likes: 15, message: 'Hello, what`s your name and how old are you?' },
		{ id: 2, likes: 20, message: 'Hi, my name is Kerim and i`m 20 y.o.' },
	],
	newPostText: '',
	profile: null,
}

const profileReducer = (state = initialState, action) => { // Изначально под именем state пришел profilePage при удовлетворении условия if он преобразовывается и возвращается через тот-же state
	// rerender происходит не здесь

	let stateCopy;
	let spaceCounter = 0;
	let letterCounter = 0;
	switch (action.type) {
		case 'UPDATE-POST-TEXT':
			stateCopy = {
				...state,
				newPostText: action.newText,
			};
			
		

			return stateCopy;

		case 'ADD-POST':
			stateCopy = {
				...state,
				postData: [...state.postData],
				newPostText: {...state.newPostText},
			};

			let newPost = {
				id: 3,
				likes: 0,
				message: state.newPostText,
			}	
			for(let l of newPost.message){
				letterCounter += 1;
				if (l === ' '){
					spaceCounter += 1;
				}
			}
			if (letterCounter !== spaceCounter){
				stateCopy.postData.unshift(newPost);
			}
				stateCopy.newPostText = '';
				console.log(newPost.message)
			return stateCopy;


			case 'SET-USER-PROFILE':
			return {...state, profile: action.profile}


		default:
			return state;
	}
}

export let onPostChangeActionCreator = (textFromNewPost) => {
	return ({
		type: 'UPDATE-POST-TEXT',
		newText: textFromNewPost,
})
}
export let addPostActionCreator = () => {
	return ({
		type: 'ADD-POST'
	})
}

export let setUserProfile = (profile) => {
	return ({
		type: 'SET-USER-PROFILE', 
		profile
	})
}


export const getCurrentIdThunkCreator = (currentUserId) => (dispatch) => {
	
	usersAPI.getCurrentId(currentUserId)
		.then(data => {
		dispatch(setUserProfile(data));
	})
}

export default profileReducer;