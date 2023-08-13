import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import DialogItem from "./DialogItem";
import Dialogs from "./Dialogs";
import DialogMessage from "./DialogsMessage";
import React from "react"
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToProps = (state) =>{  // Возвращает объект    // state - store.getState() это тоже самое, но библиотека коннект сама преобразовывает его в state
	return {
		dialogsElements: state.messagesPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} /> ),
		/*Создаем новую переменную в которую присваиваем преобразование массива данных применяя метод .map 
		далее объявляем стрелочную ф-ию => и пишем компоненту внутри неё прописываем атрибуты name & id которые достаем из названия ф-ии.
		Далее просто вставляем новый массив в нужный участок JSX разметки
		и он отобразит максимальное колличество элементов в случае dialogsData их будет 5*/
		messagesElements: state.messagesPage.messagesData.map(m => <DialogMessage key={m.id} message={m.message}/>),

		newMessage: state.messagesPage,
		isAuthing: state.auth.authentication,
	}
}

const mapDispatchToProps = (dispatch) =>{
return {
	dispatch: dispatch,
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);