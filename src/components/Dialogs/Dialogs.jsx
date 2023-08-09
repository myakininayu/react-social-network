import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to='/dialogs/1'>Yulia</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/2'>Valeria</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/3'>Ekaterina</NavLink>
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