import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
		<NavLink to={path} className={navData => navData.isActive ? s.active : s.dialogs__item}>
			<p>{props.name}</p>
		</NavLink>
	)
}
export default DialogItem;