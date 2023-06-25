import { renderEntireTree } from "../render";
let state = {
	profilePage: {
		postData: [
			{id: 1, likes: 15, message: 'Hello, what`s your name and how old are you?'},
			{id: 2, likes: 20, message: 'Hi, my name is Kerim and i`m 20 y.o.'},
		],
		newPostText: ''
	},
	newsPage: {
		newsData: [
			{name: 'Kerim', article: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam tempore provident cupiditate ut harum aliquid tenetur distinctio soluta corrupti excepturi!'},
			{name: 'Akim', article: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam tempore provident cupiditate ut harum aliquid tenetur distinctio soluta corrupti excepturi!'}
		],
	},
	
	messagesPage: {
		dialogsData: [
			{id: 1, name: 'Керим'},
			{id: 2, name: 'Ильяс'},
			{id: 3, name: 'Ибраим'},
			{id: 4, name: 'Ахмад'},
			{id: 5, name: 'Аким'},
		],
		messagesData: [
				{id: 1, message: 'Hello, how are you?'},
				{id: 2, message: 'Hi, i`m good'},
		],
		newMessage: ''
	},

	sideBar: {
		userInfo: [
			{name: 'Kerim', ava: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png'},
			{name: 'Amet', ava: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png'},
			{name: 'Suleyman', ava: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png'},
		]
	}

}


export let updatePostText = (newText) =>{
	state.profilePage.newPostText = newText;
	renderEntireTree(state);
}

export let addPost = () =>{
	let newPost = {
		id: 3,
		likes: 0,
		message: state.profilePage.newPostText,
	}
	state.profilePage.postData.unshift(newPost);
	state.profilePage.newPostText = '';
	renderEntireTree(state);
}

export let updateMessageText = (newMessageText) =>{
	state.messagesPage.newMessage = newMessageText;
	renderEntireTree(state);
} 

export let addMassage = () =>{
	let newMessage = {
		id: 3, 
		message: state.messagesPage.newMessage,
	}
	state.messagesPage.messagesData.push(newMessage);
	state.messagesPage.newMessage ='';
	renderEntireTree(state);
}

export default state;