import "./InputText.css"

const InputText = (props) => {
  const placeHolderWithReticences = `${props.placeholder}...`

  const handlerOnChange = (event) => {
    props.handlerOnChange(event.target.value)
  }

  return(
    <div className="input-text">
      <label>{props.label}</label>
      <input 
        value={props.value}
        required={props.required}
        placeholder={placeHolderWithReticences}
        onChange={handlerOnChange}
      />
    </div>
  );
}

export default InputText;