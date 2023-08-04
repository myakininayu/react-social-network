import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='./images/logo.png'/>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='./images/bg.jpg' alt='User background'/>
        </div>
        <div>
          <img id='user_avatar' src='./images/user.jpg' alt='User avatar'/>
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
    </div>
  );
}

export default App;
