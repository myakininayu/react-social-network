import style from './Post.module.css'

const Post = () => {
    return (
        <div className={style.item}>
            <img className={style.user} src='./images/user.jpg' alt='User avatar' />
            Post 1
            <div><span>Like</span></div>
        </div>
    );
}

export default Post;