import Preloader from "../common/Preloader";
import s from "./Dialogs.module.css"
import WritingMessage from "./DialogsWritingMessage";
import React from "react";
const Dialogs = (props) => {
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
			<Preloader/>
		</div>
	);
}

export default Dialogs;