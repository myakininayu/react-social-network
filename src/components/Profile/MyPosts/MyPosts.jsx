import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
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
                <Post message='How are you?' likesCount='15' />
                <Post message="Hi, it's my first post" likesCount='20' />
            </div>
        </div>
    );
}

export default MyPosts;