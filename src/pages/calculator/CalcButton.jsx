import "./CalcButton.css";

function CalcButton(props) {
  return (
    <button className={"calc-button " + props.type} onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default CalcButton;
