import "./ToggleButton.css"

const ToggleButton = (props) => {
  return(
    <div className="toggle-form-button">
      <img
        src="/images/toggle_form.png"
        alt="Button to toggle form visibility"
        onClick={props.onClick}
      />
    </div>
  );
}

export default ToggleButton