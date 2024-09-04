import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const teamList = [
    {
      name: "Programmers",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Front-end",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX & Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Innovation and management",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ]

  const initialTeamList = [
    {
      name: "Lucas Fernandes",
      role: "Instructor",
      image: "https://github.com/lsfernandes92.png",
      team: "Programmers"
    }
  ]

  const [users, setUsers] = useState(initialTeamList)

  const handleOnUserCreate = (user) => {
    setUsers([...users, user])
  }

  return (
    <div className="App">
      <Banner />
      <Form teamNames={teamList.map(team => team.name)} onUserCreate={user => handleOnUserCreate(user)}/>
      {teamList.map(team =>
        <Team 
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          users={users.filter(user => user.team === team.name)}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;