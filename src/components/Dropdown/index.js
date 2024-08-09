import "./Dropdown.css"

const Dropdown = (props) => {
  return(
    <div className="dropdown">
      <label>{props.label}</label>
      <select>
        {props.list.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default Dropdown;