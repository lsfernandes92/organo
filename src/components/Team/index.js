import UserCard from "../UserCard";
import "./Team.css"

export const Team = (props) => {
  return(
    (props.users.length > 0) &&
    <section className="team" style={{"--team-bg-color": props.secondaryColor }}>
      <h3 style={{"--team-border-color": props.primaryColor}}>{props.name}</h3>
      <div className="users">
        {props.users.map(user => 
          <UserCard
            image={user.image}
            name={user.name}
            role={user.role}
          />
        )}
      </div>
    </section>
  );
}

export default Team;