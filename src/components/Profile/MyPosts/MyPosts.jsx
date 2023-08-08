import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea>New post</textarea>
                <button>Add Post</button>
            </div>
            <div className='posts'>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;