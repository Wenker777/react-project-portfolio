import { usersAPI } from "../API/api"
let initialState = {
	users: [],
	pageSize: 20,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	options: [
		{ option: 'Randomly', value: 'random' },
		{ option: 'By name', value: 'name' },
	],
	selectedValue: null,
}



const usersReducer = (state = initialState, action) => { // Изначально под именем state пришел profilePage при удовлетворении условия if он преобразовывается и возвращается через тот-же state
	// rerender происходит не здесь

	switch (action.type) {
		case 'SET-USERS':
			return {
				...state, users: action.users
			}


		case 'SET-CURRENT-PAGE':
			return {
				...state, currentPage: action.currentPage
			}


		case 'SET-TOTAL-USERS-PAGE':
			return {
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

		case 'DELETE-USER':
			return {
				...state,
				users: state.users.filter(u => u.id !== action.userIdForDelete)
			}


		case 'TOGGLE-IS-FETCHING':
			return {
				...state, isFetching: action.toggle
			}


		case 'SET_SELECTED_VALUE':
			return {
				...state, selectedValue: action.currentValue,
			}

		case 'SORT_USERS':
				const randomlySortedUsers = [...state.users].sort(() => Math.random() - 0.5);
				const sortedUsers = [...state.users].sort((a, b) => a.name.localeCompare(b.name));
			if (state.selectedValue === 'name') {
				return {
					...state,
					users: sortedUsers
				};
			} 
			else if (state.selectedValue === 'random'){
				return {
					...state,
					users: randomlySortedUsers
				};

			}
			return state;


		default:
			return state;
	}
}

export let setSelectedValue = (currentValue) => {
	return ({
		type: 'SET_SELECTED_VALUE',
		currentValue,
	})
}

export let sortUsers = () => {
	return ({
		type: 'SORT_USERS',
	})
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

export let removeUser = (userIdForDelete) => {
	return ({
		type: 'DELETE-USER',
		userIdForDelete,
	})
}

export let isFetching = (toggle) => {
	return ({
		type: 'TOGGLE-IS-FETCHING',
		toggle,
	})
}

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
	dispatch(isFetching(true));
	usersAPI.getUsers(currentPage, pageSize).then(data => { //page - номер отображаемой страницы, count - кол-во отображаемых юзеров или то как называется pageSize в апишке	
		dispatch(setCurrentPage(currentPage));
		dispatch(isFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setTotalUsersPage(data.totalCount));
	})
}


export default usersReducer;