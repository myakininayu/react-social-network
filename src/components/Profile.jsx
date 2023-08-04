const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src='./images/bg.jpg' alt='User background' />
            </div>
            <div>
                <img id='user_avatar' src='./images/user.jpg' alt='User avatar' />
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;