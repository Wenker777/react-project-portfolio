let initialState = {
	users: [ ],
	pageSize: 20,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
}

const usersReducer = (state = initialState, action) => { // Изначально под именем state пришел profilePage при удовлетворении условия if он преобразовывается и возвращается через тот-же state
	// rerender происходит не здесь

	// let stateCopy;
	switch (action.type) {
		case 'SET-USERS':
			return{
				...state, users: action.users
			}


			case 'SET-CURRENT-PAGE':
				return{
					...state, currentPage: action.currentPage
				}


				case 'SET-TOTAL-USERS-PAGE':
					return{
						...state, totalUsersCount: action.totalPage
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

			case 'TOGGLE-IS-FETCHING':
				return{
					...state, isFetching: action.toggle
				} 
				
		default:
			return state;
	}
}

export let setUsers = (users) => {
	return ({
		type: 'SET-USERS',
		users,
	})
}

export let setCurrentPage = (currentPage) => {
	return ({
		type: 'SET-CURRENT-PAGE',
		currentPage
	})
}
export let setTotalUsersPage = (totalPage) => {
	return ({
		type: 'SET-TOTAL-USERS-PAGE',
		totalPage
	})
}


export let follow = (userId) => {
	return ({
		type: 'FOLLOW',
		userId,
	})
}
export let unfollow = (userId) => {
	return ({
		type: 'UNFOLLOW',
		userId,
	})
}
export let isFetching = (toggle) => {
	return ({
		type: 'TOGGLE-IS-FETCHING',
		toggle,
	})
	
}


export default usersReducer;