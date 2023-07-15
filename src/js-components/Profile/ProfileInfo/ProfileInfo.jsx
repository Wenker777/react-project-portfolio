import Preloader from "../../common/Preloader";
import "../main-profile.css";
import React from 'react';

const ProfileInfo = (props) => {
	if (!props.profile){
		return <Preloader/>
	}
	return (
		<div className="main-screen__content-profile">
			<div>
			<p>Full name: {props.profile.fullName}</p>
			<p>userId: {props.profile.userId}</p>
			</div>
			<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""></img>
			
		
		</div>
	)
}
export default ProfileInfo;
