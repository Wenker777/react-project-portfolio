import s from "./Dialogs.module.css"
import WritingMessage from "./DialogsWritingMessage";

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
		</div>
	);
}
export default Dialogs;