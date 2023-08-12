import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {props.dialogs.map((el) => { return (<DialogItem user={el.name} id={el.id} />); })}
            </div>
            <div className={style.messageItems}>
                {props.messages.map((el) => { return (<MessageItem message={el.message} />); })}
            </div>
        </div>
    );
}

export default Dialogs;