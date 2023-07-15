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

export default authReducer;