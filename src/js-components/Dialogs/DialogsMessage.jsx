import s from "./Dialogs.module.css"

const DialogMessage = (props) => {
	return (
		<div className={s.message}>
			<p>
			{props.message}	
			</p>
		</div>
	);
}
export default DialogMessage;