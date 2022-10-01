import logo from './logo.svg';
import './App.css';

function App() {
  const url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/href#Examples');
  console.log(url.hash);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
