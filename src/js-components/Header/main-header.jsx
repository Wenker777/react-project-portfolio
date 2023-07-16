import "./main-header.css"
import {NavLink} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { setAuthUserData, getAuthMeThunkCreator } from "../../redux/auth-reducer";

import { connect } from "react-redux";

const Header = (props) => {
	let initialState = 0;
	const [count, setCount] = useState(initialState);

	useEffect(() => {
		getAuthMeThunkCreator();
	// 	usersAPI.getAuthData()
	// 	.then(data => {
	// 		console.log(data.data)
	// 		if(data.resultCode === 0){
	// 			let {id, email, login} = data.data;
	// 			props.setAuthUserData(id, email, login);
	// 		} else{
	// 			console.log('Нужно авторизоваться')
	// 		}
	// })
	})

	return (
		<header className="main-screen__header">
			<NavLink to="/profile" className="main-screen__header-button-logo">
			<img className="main-screen__header-logo" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1024px-VK_Compact_Logo_%282021-present%29.svg.png" />
				<p>вконтакте</p>
			</NavLink>	
			<div className="main-screen__header-login">
				<NavLink to='/login'>
				Login
				</NavLink>
				<button onClick={() => setCount(initialState)}>Сбросить</button>
				<button onClick={() => setCount(prevCount => prevCount += 1)}>Прибавить</button>
				<button onClick={() => setCount(prevCount => prevCount -= 1)}>Отнять</button>
				Счёт: {count}
			</div>
	 </header>
	);

}

let mapStateToProps = (state) =>{

}
export default connect (mapStateToProps, {setAuthUserData, getAuthMeThunkCreator})(Header);


