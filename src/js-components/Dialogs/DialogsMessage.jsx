import s from "./Dialogs.module.css"

const DialogMessage = (props) =>{
	return(
		<div className={s.dialogs__message}>
			{props.message}
		</div>
	);
}
export default DialogMessage;