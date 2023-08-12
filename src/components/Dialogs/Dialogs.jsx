import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'

const Dialogs = () => {
    let dialogsData = [
        { id: 1, name: 'Yulia' },
        { id: 2, name: 'Valeria' },
        { id: 3, name: 'Ekaterina' }
    ];

    let messagesData = [
        { id: 1, message: 'Hii!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' }
    ];

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsData.map((el) => { return (<DialogItem user={el.name} id={el.id} />); })}
            </div>
            <div className={style.messageItems}>
                {messagesData.map((el) => { return (<MessageItem message={el.message} />); })}
            </div>
        </div>
    );
}

export default Dialogs;