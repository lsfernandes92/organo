import UserCard from "../UserCard";
import hexToRgba from 'hex-to-rgba';
import { IoMdCloseCircle } from "react-icons/io";
import "./Team.css"

export const Team = (props) => {
  const primaryColor = props.color;
  const secondaryColor = hexToRgba(primaryColor, '0.5'); ;
  const bgImage = "url(/images/bg.png)";

  return(
    (props.users.length > 0) &&
    <section className="team" style={{"--team-bg-color": secondaryColor, "backgroundImage": bgImage }}>
      <input 
        type="color"
        onChange={event => props.onChangeColor(event.target.value, props.id)}
        value={primaryColor}
        className="input-color"
      />
      <IoMdCloseCircle className="delete-team" size={25} onClick={() => props.onDeleteTeam(props.id)} />
      <h3 style={{"--team-border-color": primaryColor}}>{props.name}</h3>
      <div className="users">
        {props.users.map(user => {
          return(
            <UserCard
              key={user.id}
              id={user.id}
              bgColor={primaryColor}
              image={user.image}
              name={user.name}
              role={user.role}
              fav={user.fav}
              onFav={props.onFav}
              onDelete={props.onDeleteUserCard}
            />
          )
        })}
      </div>
    </section>
  );
}

export default Team;