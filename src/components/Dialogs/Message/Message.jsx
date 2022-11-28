import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Message = (props) => {
    return <div className={classes.messagesItems}>{props.message}</div>
}

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'German'},
        {id: 5, name: 'Dmitriy'}
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]
    let dialogsElements = dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElements = messages.map(message => <Message message={message.message}/>);


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsContainer}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;