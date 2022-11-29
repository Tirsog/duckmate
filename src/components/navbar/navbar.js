import "./navbar.css";
import logo from "./logo.png";
import {useState} from "react"

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav>
      <img src={logo} alt="Hands on world"></img>
      <div id="mobile">
      <div className={isNavExpanded ? "hide" : "display"}>
      <button className="icon" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}><i className="fa fa-bars"></i></button>
      </div>
      <div className={isNavExpanded ? "display" : "hide"}>
      <button className="icon" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}><i className="fas fa-times"></i></button>
      </div>
       </div>
      <ul className={isNavExpanded ? "display" : "hide"}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#profile">Profile</a>
        </li>
        <li>
          <a href="#projects"> Projects </a>
        </li>
        <li>
          <a href="#contact"> Contact </a>
        </li>
        <li className="welcome">
          <a href="#user">Tirso G.</a>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
