import "./main-header.css"
import {NavLink} from "react-router-dom";
import React, { useEffect } from 'react';
import { setAuthUserData } from "../../redux/auth-reducer";
import axios from "axios";
import { connect } from "react-redux";

const Header = (props) => {

	useEffect(() => {
		
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
		.then(response => {
			console.log(response)
			if(response.data.resultCode === 0){
				let {id, email, login} = response.data.data;
				props.setAuthUserData(id, email, login);
			}
	})
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
			</div>
	 </header>
	);

}

let mapStateToProps = (state) =>{

}
export default connect (mapStateToProps, {setAuthUserData})(Header);


