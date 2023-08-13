import s from "./main-side.module.css"
import {NavLink} from "react-router-dom";
import SideFriend from "./Friends/sideBarFriends";
import React from 'react';
const Sidebar = (props) =>{
	let sideBarElements = props.sideBarElements.userInfo.map( s => <SideFriend key={s.id} name={s.name} ava={s.ava}/>)
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
				<NavLink to="/users">Users</NavLink>
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

			{/* <div className={s["main-screen__sidebar-friends"]}>
			<div className={s['main-screen__sidebar-friends-title']}>
				<NavLink to="/users">Friends</NavLink>
			</div>
			<div className={s["main-screen__sidebar-friends-wrapper"]}>
			{sideBarElements}
			</div>
		</div> */}

		</div>
		
	);
}
export default Sidebar;