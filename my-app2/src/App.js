import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>web world</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
}

function Person() {
  return (
    <div className = "person">
      <h2>name: Asib</h2>
      <p>phone 0123456789</p>
    </div>
  )
}

export default App;
