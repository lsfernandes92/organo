import "./InputText.css"

const InputText = (props) => {
  const placeHolderWithReticences = `${props.placeholder}...`

  return(
    <div className="input-text">
      <label>{props.label}</label>
      <input placeholder={placeHolderWithReticences} />
    </div>
  );
}

export default InputText;