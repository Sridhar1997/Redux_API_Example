import logo from './logo.svg';
import './App.css';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserList/>
      </header>
    </div>
  );
}

export default App;
