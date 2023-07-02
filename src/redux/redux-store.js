import {combineReducers, legacy_createStore as createStore} from "redux"; 
import messagesReducer from "./messages-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer, 
	sideBar: sidebarReducer,
	newsPage: newsReducer,
})

let store = createStore(reducers); // создает внутри себя state у которых есть 

export default store;