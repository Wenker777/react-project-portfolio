import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let newsData = [
	{name: 'Kerim', article: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam tempore provident cupiditate ut harum aliquid tenetur distinctio soluta corrupti excepturi!'},
	{name: 'Akim', article: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam tempore provident cupiditate ut harum aliquid tenetur distinctio soluta corrupti excepturi!'}
]
let postData = [
	{likes: 15, message: 'Hello, what`s your name and how old are you?'},
	{likes: 20, message: 'Hi, my name is Kerim and i`m 20 y.o.'},
]

let dialogsData = [
	{id: 1, name: 'Керим'},
	{id: 2, name: 'Ильяс'},
	{id: 3, name: 'Ибраим'},
	{id: 4, name: 'Ахмад'},
	{id: 5, name: 'Аким'},
]

let messagesData = [
	{id: 1, message: 'Hello, how are you?'},
	{id: 2, message: 'Hi, i`m good'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<App dialogs={dialogsData} messages={messagesData} news={newsData} posts={postData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
