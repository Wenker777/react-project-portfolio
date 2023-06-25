import Dialogs from "./Dialogs/Dialogs";
import Header from "./Header/main-header";
import Music from "./Music/Music";
import News from "./News/News";
import Content from "./Profile/main-profile";
import Settings from "./Settings/Settings";
import Sidebar from "./Sidebar/main-side";
import "./main-screen.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainScreen = (props) => {
	// console.log(props.dialogsData);
	return (
		<BrowserRouter>
			<div className="main-screen">
				<div className="container">
					<div className="main-screen__row">
						<Header />
						<Sidebar />
						<div className="main-screen__main-content">
							<Routes>
								<Route path='/profile' element={<Content />} />
								<Route path='/dialogs/*' element={<Dialogs dialogsElements={props.dialogsData}/>} />
								<Route path='/news' element={<News/>}/>
								<Route path="/music" element={<Music/>}/>
								<Route path="/settings" element={<Settings/>}/>
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}
export default MainScreen;