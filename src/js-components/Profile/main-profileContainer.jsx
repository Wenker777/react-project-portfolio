import "./main-profile.css";
import React, { useEffect } from 'react';
import { setUserProfile } from "../../redux/profile-reducer";
import Profile from "./main-profile";
import { connect } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";


const ProfileContainer = (props) => {
	let params = useParams();
	let currentUserId = params.userId;
	if (!currentUserId){
		currentUserId = 2;
	}
		useEffect(() => {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${currentUserId}`)
		.then(response => {
		props.setUserProfile(response.data);
	})
	}, [currentUserId])

	
	return (
		<Profile {...props} profile={props.profile}/>
	);
}


let mapStateToProps = ( state ) => ({
	profile: state.profilePage.profile,
})



export default connect (mapStateToProps, {setUserProfile})(ProfileContainer);