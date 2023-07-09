import React, { useEffect } from 'react';
import './AllFriends.css'
import axios from 'axios'
import userPhoto from '../../images/user.jpg'
import preloader from '../../images/preloader.gif'
const Users = (props) => {

	useEffect(() => {
		if (props.users.length === 0) {
			props.setIsFetching(true);
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`).then(response => { //page - номер отображаемой страницы, count - кол-во отображаемых юзеров или то как называется pageSize в апишке
			props.setIsFetching(false);
				props.setUsers(response.data.items);
				props.setTotalUsersPage(response.data.totalCount);
			})
		}
	})
	let pageCount = Math.ceil(props.totalUsersCount / props.pageSize) // получаем кол-во страниц

	let pages = []; //массив в котором будут записаны цифры от 1 до последней страницы через цикл for. [1, 2, 3, 4, 5, 6]
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}


	let onPageChanged = (currentPage) => {
		props.setIsFetching(true);
		props.setCurrentPage(currentPage);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${props.pageSize}`).then(response => { //page - номер отображаемой страницы, count - кол-во отображаемых юзеров или то как называется pageSize в апишке
		props.setIsFetching(false);	
		props.setUsers(response.data.items);
		})
	}


return (
	<div>
		
		<div className="main-screen__page-number"> {/* Выведет все номера страниц, а для выбранной присвоит специальный стиль. && - тернарный оператор if, пишется когда нет определенного else*/}
			{pages.map(p => {
				return <span onClick={() => { onPageChanged(p) }} className={props.currentPage === p ? 'main-screen__page selected' : 'main-screen__page'}>{p}</span>
			})}
			<div >
			{props.isFetching ? <img className="main-screen__page-number-loader" src={preloader}></img> : null}
			</div>
		</div>

		{
			props.users.map(u => <div key={u.id} className="main-screen__all-friends">

				<div className="main-screen__friend-row">

					<div className="main-screen__friend-IF">
						<div className="main-screen__friend-image">
							<img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
						</div>
						{u.followed
							? <button className="main-screen__friend-following" onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
							: <button className="main-screen__friend-following" onClick={() => { props.follow(u.id) }}>Follow</button>}
					</div>

					<div className="main-screen__NameStatusLocation">
						<div className="main-screen__NameStatus">
							<div className="main-screen__Name">
								{u.name}
							</div>
							<div className="main-screen__Status">
								{u.status === null ? 'status' : u.status}
							</div>
						</div>
						<div className="main-screen__Location">
							<div className="main-screen__Location-country"> {"u.location.country"} </div>
							<div className="main-screen__Location-city"> {"u.location.city"} </div>
						</div>
					</div>

				</div>
			</div>)
		}
	</div>
)
}


export default Users;

