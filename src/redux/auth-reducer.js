import { authAPI } from "../API/api";
let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
}

const authReducer = (state = initialState, action) => { 

	switch (action.type) {
		case 'SET-USER-DATA':
			return{
				...state,
				...action.data,
				isAuth: true,
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

export const getAuthMeThunkCreator = (count) => (dispatch) => {
	console.log(count)
	authAPI.getAuthData()
	.then(data => {
		if(data.resultCode === 0){
			let {id, email, login} = data.data;
			dispatch(setAuthUserData(id, email, login));
		} else{
			console.log('Нужно авторизоваться')
		}
})
}
export default authReducer;