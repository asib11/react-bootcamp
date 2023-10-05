import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const details = [{name:"Asib", mobile:"01753249719"},{name:"Goru", mobile:"0151111111"},{name:"Basur", mobile:"1234456788"}];
  return (
    
    <div className="App">
      <h1>web world</h1>
      {/* <Person name="Asib" mobile="01753249719"></Person>
      <Person name="Goru" mobile="0151111111"></Person>
      <Person name="Basur" mobile="1234456788"></Person> */}
      {details.map(person => <Person name={person.name} mobile={person.mobile}></Person>)}
      <Counter></Counter>
    </div>
  );
}

function Person(props) {
  return (
    <div className = "person">
      <h2>name: {props.name}</h2>
      <p>phone: {props.mobile}</p>
      
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const increase = () => setCount(count+1);
  const decrease = () => setCount(count-1);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  )
}

export default App;
