import "./main-profile.css";
import React, { useEffect } from 'react';
import { setUserProfile, getCurrentIdThunkCreator } from "../../redux/profile-reducer";
import Profile from "./main-profile";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { usersAPI } from "../../API/api";


const ProfileContainer = (props) => {
	let params = useParams();
	let currentUserId = params.userId;
	if (!currentUserId){
		currentUserId = 2;
	}
		useEffect(() => {
			props.getCurrentIdThunkCreator(currentUserId);
	}, [currentUserId])

	
	return (
		<Profile {...props} profile={props.profile}/>
	);
}


let mapStateToProps = ( state ) => ({
	profile: state.profilePage.profile,
})



export default connect (mapStateToProps, {setUserProfile, getCurrentIdThunkCreator})(ProfileContainer);