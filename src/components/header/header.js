import "./header.css";
import logo from "../../fonts_images/logo.png";

function reloadPage () {

  window.location.reload()
}

function Header(props) {


  return (
    <nav className="header">

    <img onClick={() => reloadPage()} 
    src={logo} alt="Hands on world"></img>
      
      
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#posts"> Posts </a></li>
        <li><a href="#contact"> Contact </a></li>
        <li className="welcome"><a href="#welcome">Marwa D.</a>        </li>
      </ul>
    </nav>
  );
}

export default Header;
