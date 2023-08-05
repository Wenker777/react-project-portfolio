let initialState = {
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
	
};
const messagesReducer = (state = initialState, action) => { // 
	let stateCopy = {...state} // Сообщения могут отправляться без субскрайбера в index.js
	switch (action.type) {
		case 'UPDATE-MESSAGE-TEXT':
			stateCopy.newMessage = action.newMessageText;
			return stateCopy;

		case 'ADD-MESSAGE':
			stateCopy.messagesData = [...state.messagesData]
			let newMessage = {
				id: 3,
				message: state.newMessage,
			}
			stateCopy.messagesData.push(newMessage);
			stateCopy.newMessage = '';

			return stateCopy;

		default:
			return state;
	}
}


export let newMessageActionCreator = (newText) => ({
	type: 'UPDATE-MESSAGE-TEXT',
	newMessageText: newText,
})
export let addMessageActionCreator = () => ({
	type: 'ADD-MESSAGE',
})

export default messagesReducer;