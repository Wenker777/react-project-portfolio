import React from 'react';
import s from "./Dialogs.module.css"
const WritingMessage = (props) => {                                                                                                                                                                                                
	let newMessageElement = React.createRef();

	let newMessage = () =>{
		let newText =  newMessageElement.current.value;
		props.updateMessageText(newText);
	}

	let addMessage = () =>{
		props.addMassage();
	}

	return (
		<div className={s.dialogs__messageWr}>
			<form action="#" className={s.dialogs__messageForm}>
				<div className={s.dialogs__messageTextWrapper}>
					<textarea onChange={newMessage} ref={newMessageElement} className={s.dialogs__messageText} value={props.newMessage.newMessage}/>
					<button onClick={addMessage} className={s.dialogs__messageButton}>
						Send
					</button>
				</div>
			</form>
		</div>
	);
}

export default WritingMessage;