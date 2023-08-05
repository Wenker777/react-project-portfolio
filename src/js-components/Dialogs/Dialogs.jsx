import s from "./Dialogs.module.css"
import WritingMessage from "./DialogsWritingMessage";
import React from "react";
const Dialogs = React.memo((props) => {
	return (
		<div className={s.dialogs__row}>
			<div className={s.dialogs__items}>
				{props.dialogsElements}
			</div>
			<div className={s.dialogs__messages}>
				<div>
				{props.messagesElements}
				</div>
				<WritingMessage newMessage={props.newMessage} dispatch={props.dispatch}/>
			</div>
		</div>
	);
})

export default Dialogs;