import "./Form.css"
import InputText from '../InputText';
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";

const Form = () => {
  const teamList = [
    'Programmers',
    'Front-end',
    'Data Science',
    'Devops',
    'UX & Design',
    'Mobile',
    'Innovation and management',
  ]

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const onSave = (event) => {
    event.preventDefault();
    console.log("Form submitted with: ", name, role, image, team);
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Please fill in the following fields to create a card</h2>
        <InputText 
          label="Name"
          required={true}
          placeholder="Type your name here"
          value={name}
          handlerOnChange={value => setName(value)}
        />
        <InputText 
          label="Role"
          required={true}
          placeholder="Type your position here"
          value={role}
          handlerOnChange={value => setRole(value)}
        />
        <InputText
          label="Image"
          placeholder="Type here your image address"
          value={image}
          handlerOnChange={value => setImage(value)}
        />
        <Dropdown 
          label="Team"
          list={teamList}
          required={true}
          value={team}
          handlerOnChange={value => setTeam(value)}
        />
        <Button>
          Create card
        </Button>
      </form>
    </section>
  );
}

export default Form;