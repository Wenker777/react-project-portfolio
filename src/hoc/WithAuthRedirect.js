import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
let mapStateToPropsForRedirect = (state) =>({
	auth: state.auth.isAuth, 
})
export const withAuthRedirect = (Component) => {
	const RedirectComponent = (props) =>{
      if(!props.auth) {
        return <Navigate to={'/login'}/>;
      }
    return <Component {...props}/>
	}

 let ConnectedRedirectComponet = connect(mapStateToPropsForRedirect)(RedirectComponent)
 return ConnectedRedirectComponet;
}
