import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [count ,setCount] = useState(10);
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
    { "id":1,"nom":"Honda"},];
    // comportement//
    //rendu


  return (
    <div className="App">
      <Header title = "la world compagny" texte= "React JS fonde par facebook"/>
      {message}
      {message2}
      {calcul}
      {loggedIn && <p>vous etes connecte</p>}
      {loggedIn  ? <p>vous etes connecte</p>: <p>Inscription</p>}
      <ul>
      {voitures2.map((voiture )=>(
      <li key ={voiture.id}>{voiture.nom}</li>))
      }
      </ul>
      <div>
        <p> vous pouvez appuyer sur le bouton ci  dessous {count} fois.</p>
      <button onClick={() =>setCount(count +1)}>Incrementer</button>
      </div>
  
    <Footer/>

    </div>
   
  )
}

export default App;
