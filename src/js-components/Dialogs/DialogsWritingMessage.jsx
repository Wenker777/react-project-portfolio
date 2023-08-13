import React from 'react';
import s from "./Dialogs.module.css"
import { addMessageActionCreator, newMessageActionCreator } from '../../redux/messages-reducer';
const WritingMessage = (props) => {                                                                                                                                                                                                

	let newMessage = (e) =>{
		let newText =  e.target.value;
		// let action = newMessageActionCreator(newText);
		props.dispatch(newMessageActionCreator(newText));
	}

	let addMessage = () =>{
		props.dispatch(addMessageActionCreator());
	}

	return (
		<div className={s.dialogs__messageWr}>
				<div className={s.dialogs__messageTextWrapper}>
					<textarea onChange={newMessage} className={s.dialogs__messageText} value={props.newMessage.newMessage}/>
					<button onClick={addMessage} className={s.dialogs__messageButton}>
						Send
					</button>
				</div>
		</div>
	);
}

export default WritingMessage;