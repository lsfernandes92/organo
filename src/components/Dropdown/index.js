import "./Dropdown.css"

const Dropdown = (props) => {
  return(
    <div className="dropdown">
      <label>{props.label}</label>
      <select 
        required={props.required}
        value={props.value}
        onChange={event => props.handlerOnChange(event.target.value)}
      >
        {props.list.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default Dropdown;