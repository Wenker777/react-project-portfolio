import './index.css';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import { renderEntireTree } from './render';
import { updatePostText, addPost } from './redux/state';

renderEntireTree(state, updatePostText, addPost);


reportWebVitals();
