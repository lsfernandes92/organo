import UserCard from "../UserCard";
import "./Team.css"

export const Team = (props) => {
  const primaryColor = props.primaryColor;
  const secondaryColor = props.secondaryColor;

  return(
    (props.users.length > 0) &&
    <section className="team" style={{"--team-bg-color": secondaryColor }}>
      <h3 style={{"--team-border-color": primaryColor}}>{props.name}</h3>
      <div className="users">
        {props.users.map(user => 
          <UserCard
            key={user.name}
            bgColor={primaryColor}
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