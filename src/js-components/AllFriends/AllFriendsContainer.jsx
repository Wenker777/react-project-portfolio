import React from "react";
import Users from "./AllFriends";
import { connect } from "react-redux";
import { follow, getUsersThunkCreator, unfollow, removeUser, sortUsers} from "../../redux/users-reducer";
import { getByDisplayValue } from "@testing-library/react";

let mapStateToProps = (state) =>{
	return{
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,

	}
}
// let mapDispatchToProps = (dispatch) =>{
// 	return{
// 		follow: (userId) =>{
// 			dispatch(follow(userId));
// 		},
// 		unfollow: (userId) =>{
// 			dispatch(unfollow(userId));
// 		},
// 		setUsers: (users) =>{
// 			dispatch(setUsers(users));
// 		},
// 		setCurrentPage: (currentPage) =>{
// 			dispatch(setCurrentPage(currentPage))
// 		},
// 		setTotalUsersPage: (totalCount) =>{
// 			dispatch(setTotalUsersPage(totalCount))
// 		},
// 		setIsFetching: (toggle) =>{
// 			dispatch(isFetching(toggle))
// 		},
// 	}
// }

const UsersContainer = connect(mapStateToProps, { follow, unfollow, removeUser, sortUsers,
	 getUsersThunkCreator})(Users);

export default UsersContainer;