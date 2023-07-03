import "./main-header.css"
import {NavLink} from "react-router-dom";
import React from 'react';

const Header = () => {
	return (
		<header className="main-screen__header">
			<NavLink to="/profile" className="main-screen__header-button-logo">
			<img className="main-screen__header-logo" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1024px-VK_Compact_Logo_%282021-present%29.svg.png" />
				<p>вконтакте</p>
			</NavLink>	
	 </header>
	);

}

export default Header;


