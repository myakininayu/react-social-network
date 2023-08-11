import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='./images/bg.jpg' alt='User background' />
            </div>
            <div className={style.descriptionBlock}>
                <img id={style.user_avatar} src='./images/user.jpg' alt='User avatar' />
            </div>
        </div>
    );
}

export default ProfileInfo;