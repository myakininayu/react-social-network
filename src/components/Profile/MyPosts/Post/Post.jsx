import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img className={style.user} src='./images/user.jpg' alt='User avatar' />
            {props.message}
            <div><span>Likes</span> {props.likesCount}</div>
        </div>
    );
}

export default Post;