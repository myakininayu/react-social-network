import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogItem user='Yulia' id="1" />
                <DialogItem user='Valeria' id="2" />
                <DialogItem user='Ekaterina' id="3  " />
            </div>
            <div className={style.messageItems}>
                <MessageItem message='Hii!' />
                <MessageItem message='How are you?' />
                <MessageItem message='Yo' />
            </div>
        </div>
    );
}

export default Dialogs;