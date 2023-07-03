let initialState = {
	users: [
		//временно хранятся в jsx 
	],
}

const usersReducer = (state = initialState, action) => { // Изначально под именем state пришел profilePage при удовлетворении условия if он преобразовывается и возвращается через тот-же state
	// rerender происходит не здесь

	// let stateCopy;
	switch (action.type) {
		case 'SET-USERS':
			return{
				...state, users: [...action.users]
			}

		case 'FOLLOW':
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {
							...u,
							followed: true,
						}
					}
					return u; // если id не совпадает
				})
			}

		case 'UNFOLLOW':
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {
							...u,
							followed: false,
						}
					}
					return u;
				})
			}


		default:
			return state;
	}
}

export let setUsersAC = (users) => {
	return ({
		type: 'SET-USERS',
		users,
	})
}


export let followAC = (userId) => {
	return ({
		type: 'FOLLOW',
		userId,
	})
}
export let unfollowAC = (userId) => {
	return ({
		type: 'UNFOLLOW',
		userId,
	})
}


export default usersReducer;