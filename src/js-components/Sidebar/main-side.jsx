import s from "./main-side.module.css"
import {NavLink} from "react-router-dom";

const Sidebar = () =>{
	return (
		<div className={s["main-screen__sidebar"]}>
			<div className={s["main-screen__sidebar-list"]}>
				<div className={s.item}>
				<NavLink to="/profile">Profile</NavLink>
				</div>
				<div className={s.item}>
				<NavLink to="/dialogs ">Messages</NavLink>
				</div>
				<div className={s.item}>
				<NavLink to="/news">News</NavLink>
				</div>
				<div className={s.item}>
				<NavLink to="/music">Music</NavLink>
				</div>
				<div className={s.item}>
				<NavLink to="/settings">Settings</NavLink>
				</div>
			</div>
		</div>
	);
}
export default Sidebar;