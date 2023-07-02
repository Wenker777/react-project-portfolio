import DialogItem from "./DialogItem";
import Dialogs from "./Dialogs";
import DialogMessage from "./DialogsMessage";
import React from "react"
import { connect } from "react-redux";

// const DialogsContainer = (props) => {
	
// 	return (
// 		<StoreContext.Consumer>
// 			{
// 			(store) => {
// 				let state = store.getState();
// 				let dialogsElements = state.messagesPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
// 				/*Создаем новую переменную в которую присваиваем преобразование массива данных применяя метод .map 
// 				 далее объявляем стрелочную ф-ию => и пишем компоненту внутри неё прописываем атрибуты name & id которые достаем из названия ф-ии.
// 				 Далее просто вставляем новый массив в нужный участок JSX разметки
// 				 и он отобразит максимальное колличество элементов в случае dialogsData их будет 5*/
// 				let messagesElements = state.messagesPage.messagesData.map(m => <DialogMessage message={m.message} />);
// 				return(
// 				<Dialogs 
// 					dialogsElements={dialogsElements} 
// 					messagesElements={messagesElements}
// 					newMessage={state.messagesPage} 
// 					dispatch={store.dispatch} />
// 				 )
// 			}
// 		}
// 		</StoreContext.Consumer>
// 	);
// }


const mapStateToProps = (state) =>{  // Возвращает объект    // state - store.getState() это тоже самое, но библиотека коннект сама преобразовывает его в state
	return {
		dialogsElements: state.messagesPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />),
		/*Создаем новую переменную в которую присваиваем преобразование массива данных применяя метод .map 
		далее объявляем стрелочную ф-ию => и пишем компоненту внутри неё прописываем атрибуты name & id которые достаем из названия ф-ии.
		Далее просто вставляем новый массив в нужный участок JSX разметки
		и он отобразит максимальное колличество элементов в случае dialogsData их будет 5*/
		messagesElements: state.messagesPage.messagesData.map(m => <DialogMessage message={m.message} />),

		newMessage: state.messagesPage,
	}
}

const mapDispatchToProps = (dispatch) =>{
return {
	dispatch: dispatch,
	}
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;