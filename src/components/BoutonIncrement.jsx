import { useState } from 'react';
export default function BoutonIncrement({texte,nb}){
    const [count ,setCount]=useState(nb);
    function HandleIncremente(){
        setCount(count+1);
    }
    return(
    <div>
    <p> {texte } {count} fois.</p>
  <button onClick={ HandleIncremente}>Incrementer</button>
  
  </div>);
}