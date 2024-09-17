import "./Form.css"
import InputText from "../InputText";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [image, setImage] = useState("")
  const [team, setTeam] = useState("Programmers")
  const [teamName, setTeamName] = useState("")
  const [teamColor, setTeamColor] = useState("")

  const onSubmitUser = (event) => {
    event.preventDefault();
    props.onUserCreate({
      name,
      role,
      image,
      team
    })
    setName("")
    setRole("")
    setImage("")
    setTeam("Programmers")
  }

  const onSubmitTeam = (event) => {
    event.preventDefault();
    props.onTeamCreate({
      name: teamName,
      color: teamColor
    })
    setTeamName("")
    setTeamColor("")
  }

  return (
    <section className="forms">
      <form className="user-form" onSubmit={onSubmitUser}>
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
          list={props.teamNames}
          required={true}
          value={team}
          handlerOnChange={value => setTeam(value)}
        />
        <Button>
          Create card
        </Button>
      </form>
      <form className="team-form" onSubmit={onSubmitTeam}>
        <h2>Please fill in the following fields to create a team</h2>
        <InputText 
          label="Name"
          required
          placeholder="Type the team name"
          value={teamName}
          handlerOnChange={value => setTeamName(value)}
        />
        <InputText 
          label="Color"
          required
          placeholder="Type the team color"
          value={teamColor}
          handlerOnChange={value => setTeamColor(value)}
        />
        <Button>
          Create team
        </Button>
      </form>
    </section>
  );
}

export default Form;