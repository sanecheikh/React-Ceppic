import {  Link } from "react-router-dom";
import "./Nav.css";
 export default function Nav(){
    return(
        <>
        <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
        <Link to="/notfound">NotFound</Link>
    </>
    );
 }