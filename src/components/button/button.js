
import './button.css'


function Button(props) {
  return (
    <button className={props.text} onClick={props.onClick}>Submit
    </button>
  );
}

export default Button;