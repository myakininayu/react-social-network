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
                <Post message='How are you?' likesCount='15'/>
                <Post message="Hi, it's my first post" likesCount='20'/>
            </div>
        </div>
    );
}

export default MyPosts;