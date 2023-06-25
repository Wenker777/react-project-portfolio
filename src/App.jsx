import './css/App.css';
import "./css/nullstyle.css";
import "./js-components/App-main-screen.css";

import React from 'react';

import Dialogs from "./js-components/Dialogs/Dialogs";
import Header from "./js-components/Header/main-header";
import Music from "./js-components/Music/Music";
import News from "./js-components/News/News";
import Content from "./js-components/Profile/main-profile";
import Settings from "./js-components/Settings/Settings";
import Sidebar from "./js-components/Sidebar/main-side";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App(props) { 
	return (
		<BrowserRouter>
		<div className="wrapper">
			<div className="content">
				<div className="main-screen">
				<div className="container">
					<div className="main-screen__row">
						<Header />
						<Sidebar sideBarElements={props.state.sideBar}/>
						<div className="main-screen__main-content">
							<Routes>
								<Route path='/profile' element={<Content profileElements={props.state.profilePage} addPost={props.addPost} updatePostText={props.updatePostText}/>} />
								<Route path='/dialogs/*' element={<Dialogs dialogsElements={props.state.messagesPage} updateMessageText={props.updateMessageText} addMassage={props.addMassage}/>} />
								<Route path='/news' element={<News newsElements={props.state.newsPage}/>}/>
								<Route path="/music" element={<Music/>}/>
								<Route path="/settings" element={<Settings/>}/>
							</Routes>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
		</BrowserRouter>
	);
	
}

export default App;
