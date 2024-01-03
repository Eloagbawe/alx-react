import logo from './logo.jpeg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor='email'>Email: </label>
          <input id="email"/>

          <label htmlFor='password'>Password: </label>
          <input id="password"/>
          <button>ok</button>
        </form>
      </div>

      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>

    </div>
  );
}

export default App;
