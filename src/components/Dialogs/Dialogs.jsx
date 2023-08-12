import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'

const Dialogs = () => {
    let DialogsData = [
        { id: 1, name: 'Yulia' },
        { id: 2, name: 'Valeria' },
        { id: 3, name: 'Ekaterina' }
    ];

    let MessagesData = [
        { id: 1, message: 'Hii!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' }
    ];

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogItem user={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogItem user={DialogsData[1].name} id={DialogsData[1].id} />
                <DialogItem user={DialogsData[2].name} id={DialogsData[2].id} />
            </div>
            <div className={style.messageItems}>
                <MessageItem message={MessagesData[0].message} />
                <MessageItem message={MessagesData[1].message} />
                <MessageItem message={MessagesData[2].message} />
            </div>
        </div>
    );
}

export default Dialogs;