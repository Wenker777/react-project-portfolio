import s from "./Dialogs.module.css"
import WritingMessage from "./DialogsWritingMessage";

const DialogMessage = (props) => {
	return (
		<div>
			<div>
			{props.message}
			</div>
		</div>
	);
}
export default DialogMessage;