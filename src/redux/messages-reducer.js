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
	switch (action.type) {
		case 'UPDATE-MESSAGE-TEXT':
			state.newMessage = action.newMessageText;

			return state;

		case 'ADD-MESSAGE':
			let newMessage = {
				id: 3,
				message: state.newMessage,
			}
			state.messagesData.push(newMessage);
			state.newMessage = '';

			return state;

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