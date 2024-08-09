import "./Form.css"
import InputText from '../InputText';
import Dropdown from "../Dropdown";

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

  return (
    <section className="form">
      <form>
        <h2>Please fill in the following fields to create a card</h2>
        <InputText label="Name" placeholder="Type your name here" />
        <InputText label="Role" placeholder="Type your position here" />
        <InputText label="Image" placeholder="Type here your image address" />
        <Dropdown label="Team" list={teamList} />
      </form>
    </section>
  );
}

export default Form;