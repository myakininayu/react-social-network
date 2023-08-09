import style from './Dialogs.module.css'

const Dialogs = () => {
    return(
    <div className={style.dialogs}>
        <div className={style.dialogItems}>
            <div className={style.dialog + ' ' +style.active}>
                Yulia
            </div>
            <div className={style.dialog}>
                Valeria
            </div>
            <div className={style.dialog}>
                Ekaterina
            </div>
        </div>
        <div className={style.messageItems}>
            <div className={style.message}>
                Hii!
            </div>
            <div className={style.message}>
                How are you?
            </div>
            <div className={style.message}>
                Yo
            </div>
        </div>
    </div>
    );
}

export default Dialogs;