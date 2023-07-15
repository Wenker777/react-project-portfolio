import React from "react"
import preloader from '../../images/preloader.gif'
import { connect } from "react-redux"
const Preloader = (props) =>{
	return(
		<div>
			{props.isFetching ? <img className="main-screen__page-number-loader" src={preloader}></img> : null}
		</div>
	)
}
let mapStateToProps = (state) =>({
	isFetching: state.usersPage.isFetching,
})
export default connect(mapStateToProps, {})(Preloader)