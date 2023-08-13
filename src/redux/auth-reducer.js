import { authAPI } from "../API/api";
let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	authentication: false,
}

const authReducer = (state = initialState, action) => { 
	
	switch (action.type) {
		case 'SET-USER-DATA':
			
			if(!state.isAuth){
				console.log('Нужно авторизоваться')
			} else{console.log('Авторизация прошла успешно')}
			return{
				...state,
				...action.data,
				isAuth: true,
			}
		case 'TOGGLE-IS-AUTHENTICATING':
			console.log(state.authentication)
			return {
				...state, authentication: action.toggle
			}

		default:
			return state;
	}
}
export let isAuthenticating = (toggle) => {
	return ({
		type: 'TOGGLE-IS-AUTHENTICATING',
		toggle,
	})
}


export let setAuthUserData = (userId, email, login) => {
	return ({
		type: 'SET-USER-DATA',
		data: {userId, email, login}
})
}

export const getAuthMeThunkCreator = (count) => (dispatch) => {
	dispatch(isAuthenticating(true))
	authAPI.getAuthData()
	.then(data => {
		if(data.resultCode === 0){
			let {id, email, login} = data.data;
			dispatch(setAuthUserData(id, email, login));
		}
		dispatch(isAuthenticating(false))
})
}
export default authReducer;