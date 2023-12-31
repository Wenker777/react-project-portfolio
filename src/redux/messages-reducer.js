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

	let spaceCounter = 0;
	let letterCounter = 0;
	switch (action.type) {
		case 'UPDATE-MESSAGE-TEXT':
			let newTextWithParagraph = '';
			for(let i of action.newMessageText){
					newTextWithParagraph += i;
			}
			if(action.paragraph){
				newTextWithParagraph += "\n"
			}
			
			stateCopy.newMessage = newTextWithParagraph;
			
			return stateCopy;

		case 'ADD-MESSAGE':
			stateCopy.messagesData = [...state.messagesData]
			for(let l of stateCopy.newMessage){
				letterCounter += 1;
				if (l === ' '){
					spaceCounter += 1;
				} 
				else if (l === "\n"){
					spaceCounter += 1;
				}
			}
			
			let newMessage = {
				id: 3,
				message: stateCopy.newMessage,
			}

			if (letterCounter !== spaceCounter && letterCounter >= 1){
				stateCopy.messagesData.push(newMessage);
			}
			
			stateCopy.newMessage = '';

			return stateCopy;
			

		default:
			return state;
	}
}


export let newMessageActionCreator = (newText, paragraph) => ({
	type: 'UPDATE-MESSAGE-TEXT',
	newMessageText: newText,
	paragraph: paragraph,
})
export let addMessageActionCreator = () => ({
	type: 'ADD-MESSAGE',
})



export default messagesReducer;