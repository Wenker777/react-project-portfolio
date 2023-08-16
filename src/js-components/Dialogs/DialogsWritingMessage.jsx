import React from 'react';
import s from "./Dialogs.module.css"
import { addMessageActionCreator, newMessageActionCreator } from '../../redux/messages-reducer';
const WritingMessage = (props) => {    
	let enter = (e) =>{
		if(e.keyCode === 13 && e.ctrlKey){
			let paragraph = true;
      newMessage(e, paragraph);
		}
		else if(e.key === 'Enter'){
			addMessage();
		}
		
	}

	let newMessage = (e, paragraph) =>{
		let newText = '';
		if(e.target.value !== '\n'){
			newText =  e.target.value;
		}
		
		props.dispatch(newMessageActionCreator(newText, paragraph));
	}
	
	let addMessage = () =>{
		props.dispatch(addMessageActionCreator());
	}

	

	return (
		<div className={s.dialogs__messageWr}>
				<div className={s.dialogs__messageTextWrapper}>
					<textarea onChange={newMessage} onKeyDown={enter} className={s.dialogs__messageText} value={props.newMessage.newMessage}/>
					<button onClick={addMessage} className={s.dialogs__messageButton}>
						Send
					</button>
				</div>
		</div>
	);
}

export default WritingMessage;