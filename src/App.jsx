import logo from './logo.svg';
import './App.css';

function App() {
  const message = <h1> hello tout le monde</h1>;
  const message2 = (<div>
  <h3> block htlm</h3>
  <p>Lorem ipsum dolor sit amet consectetur. </p>
    </div>);
    const calcul= <h2>cette opreration 2*6 ={2*6}</h2>;
    const loggedIn= true;
  const voitures = ["Ford","Audi","Honda"];
  const voitures2= [
    { "id":1,"nom":"Ford"},
    { "id":1,"nom":"Audi"},
    { "id":1,"nom":"Honda"},
  ];



  return (
    <div className="App">
      {message}
      {message2}
      {calcul}
      {loggedIn && <p>vous etes connecte</p>}
      <ul>{}
      {voitures2.map((voiture )=>(
      <li key ={voiture.id}>{voiture.nom}</li>))
      }
      </ul>

    </div>
   
  );
}

export default App;
