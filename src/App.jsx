import './css/App.css';
import "./css/nullstyle.css";
import "./js-components/App-main-screen.css";

import Dialogs from "./js-components/Dialogs/Dialogs";
import Header from "./js-components/Header/main-header";
import Music from "./js-components/Music/Music";
import News from "./js-components/News/News";
import Content from "./js-components/Profile/main-profile";
import Settings from "./js-components/Settings/Settings";
import Sidebar from "./js-components/Sidebar/main-side";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App(props) { //dialogs, messages
	console.log(props)
	return (
		<BrowserRouter>
		<div className="wrapper">
			<div className="content">
				<div className="main-screen">
				<div className="container">
					<div className="main-screen__row">
						<Header />
						<Sidebar />
						<div className="main-screen__main-content">
							<Routes>
								<Route path='/profile' element={<Content postElements={props.posts}/>} />
								<Route path='/dialogs/*' element={<Dialogs dialogsElements={props.dialogs} messagesElements={props.messages}/>} />
								<Route path='/news' element={<News newsElements={props.news}/>}/>
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
