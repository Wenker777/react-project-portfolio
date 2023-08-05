import axios from "axios"
const instance = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`
})
export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then( response => response.data)
	},
	
	getCurrentId(currentUserId){
		return instance.get(`profile/${currentUserId}`).then( response => response.data)
	}
}

export const authAPI = {
	getAuthData(){
		return instance.get(`auth/me`).then( response => response.data)
	},
}

