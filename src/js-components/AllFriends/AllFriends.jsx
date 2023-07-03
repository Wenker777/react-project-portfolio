import React from "react";
import './AllFriends.css'
const Users = (props) =>{
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1, photoUrl: 'https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
				followed: true, fullName: 'Bekir', status: 'Something', location: { city: 'Aqmescit', country: 'Qirim' }
			},
			{
				id: 2, photoUrl: 'https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
				followed: true, fullName: 'Seyran', status: 'Nogay', location: { city: 'Aqmescit', country: 'Qirim' }
			},
			{
				id: 3, photoUrl: 'https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
				followed: false, fullName: 'Osman', status: 'Yo', location: { city: 'Aqmescit', country: 'Qirim' }
			},
			{
				id: 4, photoUrl: 'https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
				followed: true, fullName: 'Suleyman', status: 'Len`', location: { city: 'Aqmescit', country: 'Qirim' }
			},
			{
				id: 5, photoUrl: 'https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
				followed: false, fullName: 'Emir', status: 'F', location: { city: 'Aqmescit', country: 'Qirim' }
			},
		]

		)
	}
	return(
		<div>
			{
		props.users.map( u => <div key={u.id} className="main-screen__all-friends">
			<div className="main-screen__friend-row">

				<div className="main-screen__friend-IF">
				<div className="main-screen__friend-image">
					<img src={u.photoUrl} alt="" />
				</div>
				{ u.followed 
				? <button className="main-screen__friend-following" onClick={ () => { props.unfollow(u.id) } }>Unfollow</button> 
				: <button className="main-screen__friend-following" onClick={ () => { props.follow(u.id) } }>Follow</button>}
				</div>
				
				<div className="main-screen__NameStatusLocation">
					<div className="main-screen__NameStatus">
						<div className="main-screen__Name">
							{ u.fullName }
						</div>
						<div className="main-screen__Status">
							{ u.status }
						</div>
					</div>
					<div className="main-screen__Location">
						<div className="main-screen__Location-country"> { u.location.country } </div>
						<div className="main-screen__Location-city"> { u.location.city } </div>
					</div>
				</div>	

			</div>
		</div>)
}
		</div>
	)
}

export default Users;

	