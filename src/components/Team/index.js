import UserCard from "../UserCard";
import "./Team.css"

export const Team = (props) => {
  const primaryColor = props.primaryColor;
  const secondaryColor = props.secondaryColor;
  const bgImage = "url(/images/bg.png)";

  const handlerOnDelete = () => {
    console.log("deleting usercard...");
  }

  return(
    (props.users.length > 0) &&
    <section className="team" style={{"--team-bg-color": secondaryColor, "backgroundImage": bgImage }}>
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