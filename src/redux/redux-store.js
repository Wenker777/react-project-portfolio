import {combineReducers, legacy_createStore as createStore} from "redux"; 
import messagesReducer from "./messages-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer, 
	sideBar: sidebarReducer,
	newsPage: newsReducer,
	usersPage: usersReducer,
	auth: authReducer,
})

let store = createStore(reducers); // создает внутри себя state у которых есть 
window.store = store;
export default store;