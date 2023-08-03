import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}

const Technologies = () => {
  return (
    <div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>React</li>
        </ul>
    </div>
  );
}

const Header = () => {
  return (
    <div className="App">
      <a href="#">HTML</a>
      <a href="#">CSS</a>
      <a href="#">JS</a>
      <a href="#">React</a>
    </div>
  );
}

export default App;
