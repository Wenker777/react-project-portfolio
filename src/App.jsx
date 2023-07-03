import './css/App.css';
import "./css/nullstyle.css";
import "./js-components/App-main-screen.css";

import React from 'react';

import Header from "./js-components/Header/main-header";
import Music from "./js-components/Music/Music";
import News from "./js-components/News/News";
import Content from "./js-components/Profile/main-profile";
import Settings from "./js-components/Settings/Settings";
import Sidebar from "./js-components/Sidebar/main-side";

import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './js-components/Dialogs/DialogsContainer';
import UsersContainer from './js-components/AllFriends/AllFriendsContainer';


function App(props) { 
	return (
		<div className="wrapper">
			<div className="content">
				<div className="main-screen">
				<div className="container">
					<div className="main-screen__row">
						<Header />
						<Sidebar sideBarElements={props.state.sideBar}/>
						<div className="main-screen__main-content">
							<Routes>
								<Route path='/profile' element={<Content profileElements={props.state.profilePage}/>} />{/*profileElements={props.state.profilePage} dispatch={props.dispatch} */}
								<Route path='/dialogs/*' element={<DialogsContainer />} /> {/*dialogsElements={props.state.messagesPage} dispatch={props.dispatch} */}
								<Route path='/news' element={<News newsElements={props.state.newsPage}/>}/>
								<Route path="/music" element={<Music/>}/>
								<Route path="/settings" element={<Settings/>}/>
								<Route path="/users" element={<UsersContainer/>}/>
							</Routes>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	);
	
}

export default App;
