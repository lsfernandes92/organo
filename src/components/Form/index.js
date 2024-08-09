import "./Form.css"
import InputText from '../InputText';

const Form = () => {
  return (
    <section className="form">
      <form>
        <h2>Please fill in the following fields to create a card</h2>
        <InputText label="Name" placeholder="Type your name here" />
        <InputText label="Role" placeholder="Type your position here" />
        <InputText label="Imagem" placeholder="Type here your image address" />
      </form>
    </section>
  );
}

export default Form;