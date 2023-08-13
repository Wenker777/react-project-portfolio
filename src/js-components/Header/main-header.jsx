import "./main-header.css"
import {NavLink} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import {setAuthUserData, getAuthMeThunkCreator } from "../../redux/auth-reducer";
import { connect } from "react-redux";

const Header = React.memo((props) => {
	let initialState = false;
	const [count, setCount] = useState(initialState);
	useEffect(() => {
		props.getAuthMeThunkCreator(count);
	})

	return (
		<header className="main-screen__header">
			<NavLink to="/profile" className="main-screen__header-button-logo">
			<img className="main-screen__header-logo" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1024px-VK_Compact_Logo_%282021-present%29.svg.png" />
				<p>вконтакте</p>
			</NavLink>	
			<div className="main-screen__header-login">
				{/* <NavLink to='/login'> */}
				<button onClick={() => setCount(prevCount => prevCount === false ? prevCount = true : prevCount = false)}>Header render - login</button> 
				{/* </NavLink> */}
				
			</div>
	 </header>
	);

})

let mapStateToProps = (state) =>({

})
export default connect (mapStateToProps, { setAuthUserData, getAuthMeThunkCreator})(Header);


