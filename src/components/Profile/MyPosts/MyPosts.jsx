import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    let PostsData = [
        { id: 1, message: 'Yulia', likesCount: 15 },
        { id: 2, message: 'Valeria', likesCount: 20 }
    ];

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
                <Post message={PostsData[0].message} likesCount={PostsData[0].likesCount} />
                <Post message={PostsData[1].message} likesCount={PostsData[1].likesCount} />
            </div>
        </div>
    );
}

export default MyPosts;