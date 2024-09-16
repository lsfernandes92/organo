import UserCard from "../UserCard";
import hexToRgba from 'hex-to-rgba';
import "./Team.css"

export const Team = (props) => {
  const primaryColor = props.color;
  const secondaryColor = hexToRgba(primaryColor, '0.5'); ;
  const bgImage = "url(/images/bg.png)";

  const handlerOnDelete = () => {
    console.log("deleting usercard...");
  }

  return(
    (props.users.length > 0) &&
    <section className="team" style={{"--team-bg-color": secondaryColor, "backgroundImage": bgImage }}>
      <input 
        type="color"
        onChange={event => props.onChangeColor(event.target.value, props.id)}
        value={primaryColor}
        className="input-color"
      />
      <h3 style={{"--team-border-color": primaryColor}}>{props.name}</h3>
      <div className="users">
        {props.users.map(user => {
          return(
            <UserCard
              key={user.name}
              bgColor={primaryColor}
              image={user.image}
              name={user.name}
              role={user.role}
              onDelete={handlerOnDelete}
            />
          )
        })}
      </div>
    </section>
  );
}

export default Team;