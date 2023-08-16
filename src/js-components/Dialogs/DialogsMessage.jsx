import s from "./Dialogs.module.css"

const DialogMessage = (props) => {
	return (
		<div className={s.message}>
			{props.message.split('\n').map((text, index) => (
    <p key={index}>{text}</p>
  ))}
		</div>
	);
}
export default DialogMessage;