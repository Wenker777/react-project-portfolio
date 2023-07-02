import messagesReducer from "./messages-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

// import { renderEntireTree } from "../render";
let store = {
	_state: {
		profilePage: {
			postData: [
				{ id: 1, likes: 15, message: 'Hello, what`s your name and how old are you?' },
				{ id: 2, likes: 20, message: 'Hi, my name is Kerim and i`m 20 y.o.' },
			],
			newPostText: ''
		},
		newsPage: {
			newsData: [
				{ name: 'Kerim', article: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam tempore provident cupiditate ut harum aliquid tenetur distinctio soluta corrupti excepturi!' },
				{ name: 'Akim', article: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam tempore provident cupiditate ut harum aliquid tenetur distinctio soluta corrupti excepturi!' }
			],
		},

		messagesPage: {
			dialogsData: [
				{ id: 1, name: 'Керим' },
				{ id: 2, name: 'Ильяс' },
				{ id: 3, name: 'Ибраим' },
				{ id: 4, name: 'Ахмад' },
				{ id: 5, name: 'Аким' },
			],
			messagesData: [
				{ id: 1, message: 'Hello, how are you?' },
				{ id: 2, message: 'Hi, i`m good' },
			],
			newMessage: ''
		},

		sideBar: {
			userInfo: [
				{ name: 'Kerim', ava: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png' },
				{ name: 'Amet', ava: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png' },
				{ name: 'Suleyman', ava: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png' },
			]
		}
	},
	_callSubscriber() {
		console.log('state changed')
	},


	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);

		this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

		this._state.sideBar = sidebarReducer(this._state.sideBar, action);

		this._state.newsPage = newsReducer(this._state.newsPage, action);


		this._callSubscriber(this._state);
	},
}

export default store;