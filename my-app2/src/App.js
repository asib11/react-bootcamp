import logo from './logo.svg';
import './App.css';


function App() {
  const details = [{name:"Asib", mobile:"01753249719"},{name:"Goru", mobile:"0151111111"},{name:"Basur", mobile:"1234456788"}];
  return (
    
    <div className="App">
      <h1>web world</h1>
      {/* <Person name="Asib" mobile="01753249719"></Person>
      <Person name="Goru" mobile="0151111111"></Person>
      <Person name="Basur" mobile="1234456788"></Person> */}
      {details.map(person => <Person name={person.name} mobile={person.mobile}></Person>)}
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

export default App;
