import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={classes.dialogsItems}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>;
}
const Message = (props) => {
    return <div className={classes.messagesItems}>{props.message}</div>
}

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'German'},
        {id: 5, name: 'Dmitriy'}
    ]
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsContainer}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="German" id="4"/>
                <DialogItem name="Dmitriy" id="5"/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="Hello"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}

export default Dialogs;