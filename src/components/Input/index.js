import "./Input.css"

const Input = (props) => {
  const type = props.type || "text"
  const placeHolderWithReticences = `${props.placeholder}...`

  const handlerOnChange = (event) => {
    props.handlerOnChange(event.target.value)
  }

  return(
    <div className="input">
      <label>{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        required={props.required}
        placeholder={placeHolderWithReticences}
        onChange={handlerOnChange}
      />
    </div>
  );
}

export default Input;