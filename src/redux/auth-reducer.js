import { usersAPI } from "../API/api";
let initialState = {
	userId: null,
	email: null,
	login: null,
}

const authReducer = (state = initialState, action) => { 

	switch (action.type) {
		case 'UPDATE-POST-TEXT':
			return{
				...state,
				...action.data
			}

		default:
			return state;
	}
}

export let setAuthUserData = (userId, email, login) => {
	return ({
		type: 'SET-USER-DATA',
		data: {userId, email, login}
})
}

export const getAuthMeThunkCreator = (dispatch) => {
	usersAPI.getAuthData()
	.then(data => {
		console.log(data.data)
		if(data.resultCode === 0){
			let {id, email, login} = data.data;
			dispatch(setAuthUserData(id, email, login));
		} else{
			console.log('Нужно авторизоваться')
		}
})
}
export default authReducer;