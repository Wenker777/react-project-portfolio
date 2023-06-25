import DialogItem from "./DialogItem";
import s from "./Dialogs.module.css"
import DialogMessage from "./DialogsMessage";
import WritingMessage from "./DialogsWritingMessage";
const Dialogs = (props) => {
	let dialogsElements = props.dialogsElements.dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>) 
	/*Создаем новую переменную в которую присваиваем преобразование массива данных применяя метод .map 
	 далее объявляем стрелочную ф-ию => и пишем компоненту внутри неё прописываем атрибуты name & id которые достаем из названия ф-ии.
	 Далее просто вставляем новый массив в нужный участок JSX разметки
	 и он отобразит максимальное колличество элементов в случае dialogsData их будет 5*/

	// let messagesElements = props.dialogsElements.map( m => <DialogMessage message={m.messagesData.message}/>)
	// let messagesAnotherElements = props.dialogsElements.messagesAnotherData.map( m => <DialogMessage messageFromAnother={m.message} />)
	let messagesElements = props.dialogsElements.messagesData.map( m => <DialogMessage message={m.message}/>);
	// const filteredObj = Object.fromEntries(
	// 	Object.entries(messagesElements[0]).props.filter(([key, value]) => value !== undefined)
	// );
	// console.log(filteredObj);

// 	const messagesElements = props.dialogsElements.messagesData.map(m => <DialogMessage messageFromMe={m.messageFromeMe} messageFromAnother={m.messageFromAnother}/>);
// const filteredElements = messagesElements.map(el => {
//   const filteredProps = Object.fromEntries(Object.entries(el.props).filter(([key, value]) => value !== undefined));
//   return Object.assign({}, el, { props: filteredProps });
// });
// console.log(filteredElements);
	return (
		<div className={s.dialogs__row}>
			<div className={s.dialogs__items}>
				{dialogsElements}
			</div>
			<div className={s.dialogs__messages}>
				<div>
				{messagesElements}
				</div>
				<WritingMessage newMessage={props.dialogsElements} updateMessageText={props.updateMessageText} addMassage={props.addMassage}/>
			</div>
		</div>
	);
}
export default Dialogs;