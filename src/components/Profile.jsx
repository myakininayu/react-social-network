import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src='./images/bg.jpg' alt='User background' />
            </div>
            <div>
                <img id={style.user_avatar} src='./images/user.jpg' alt='User avatar' />
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className='posts'>
                    <div className={style.item}>
                        Post 1
                    </div>
                    <div className={style.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;