import s from "../main-side.module.css"
import React from 'react';
const SideFriend = (props) => {
	return (
			<div className={s["main-screen__sidebar-friend"]}>
				<div className={s["main-screen__sidebar-friend-ava"]}>
					<img src={`${props.ava}`} alt="" />
				</div>
				<div className={s["main-screen__sidebar-friend-name"]}>
					<p>
						{props.name}
					</p>
				</div>
			</div>
	)
}
export default SideFriend;