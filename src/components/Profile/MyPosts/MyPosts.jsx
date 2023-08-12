import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>New post</textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={style.posts}>
                {props.posts.map((el) => { return (<Post message={el.message} likesCount={el.likesCount} />); })}
            </div>
        </div>
    );
}

export default MyPosts;