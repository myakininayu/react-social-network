import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src='./images/bg.jpg' alt='User background' />
            </div>
            <div>
                <img id={style.user_avatar} src='./images/user.jpg' alt='User avatar' />
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;