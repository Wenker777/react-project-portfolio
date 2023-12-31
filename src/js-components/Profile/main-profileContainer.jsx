import "./main-profile.css";
import React, { useEffect } from 'react';
import { getCurrentIdThunkCreator } from "../../redux/profile-reducer";
import Profile from "./main-profile";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

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



export default connect (mapStateToProps, {getCurrentIdThunkCreator})(ProfileContainer);