import DialogItem from "./DialogItem";
import s from "./Dialogs.module.css"
import DialogMessage from "./DialogsMessage";

const Dialogs = (props) => {
	// let dialogsData = props.dialogsElements;
	// let messagesData = props.messagesElements;
	
	let dialogsElements = props.dialogsElements.map( d => <DialogItem name={d.name} id={d.id}/>) 
	/*Создаем новую переменную в которую присваиваем преобразование массива данных применяя метод .map 
	 далее объявляем стрелочную ф-ию => и пишем компоненту внутри неё прописываем атрибуты name & id которые достаем из названия ф-ии.
	 Далее просто вставляем новый массив в нужный участок JSX разметки
	 и он отобразит максимальное колличество элементов в случае dialogsData их будет 5*/
	let messagesElemets = props.messagesElements.map( m => <DialogMessage message={m.message}/>)

	return (
		<div className={s.dialogs__row}>
			<div className={s.dialogs__items}>
				{dialogsElements}
			</div>
			<div className={s.dialogs__messages}>
				{messagesElemets}
			</div>
		</div>
	);
}
export default Dialogs;