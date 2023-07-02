import React from 'react';
import s from "./Dialogs.module.css"
import { addMessageActionCreator, newMessageActionCreator } from '../../redux/messages-reducer';
const WritingMessage = (props) => {                                                                                                                                                                                                

	let newMessage = (e) =>{
		let newText =  e.target.value;
		let action = newMessageActionCreator(newText);
		props.dispatch(action);
	}

	let addMessage = () =>{
		props.dispatch(addMessageActionCreator());
	}

	return (
		<div className={s.dialogs__messageWr}>
			<form action="#" className={s.dialogs__messageForm}>
				<div className={s.dialogs__messageTextWrapper}>
					<textarea onChange={newMessage} className={s.dialogs__messageText} value={props.newMessage.newMessage}/>
					<button onClick={addMessage} className={s.dialogs__messageButton}>
						Send
					</button>
				</div>
			</form>
		</div>
	);
}

export default WritingMessage;