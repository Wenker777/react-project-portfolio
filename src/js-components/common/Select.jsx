import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setSelectedValue, sortUsers } from "../../redux/users-reducer";

const MySelect = (props) =>{
  function handleSelectChange(event) {
    props.setSelectedValue(event.target.value);
		
  }
	useEffect(() => {
		props.sortUsers();
	})
	return(
		<div> 
			<div>
				Sort
			</div>
				<select value={props.selectedValue} onChange={handleSelectChange}>
				{props.options.map( o => {
						return <option key={o.value} value={o.value}>{o.option}</option>
					})}
				</select>
			</div>
	)
}
const mapStateToProps = (state) => ({
	options: state.usersPage.options,
	selectedValue: state.usersPage.selectedValue,
})
export default connect(mapStateToProps, {setSelectedValue, sortUsers})(MySelect);
