import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [teamList, setTeamList] = useState([
    {
      id: uuidv4(),
      name: "Programmers",
      color: "#57C278",
    },
    {
      id: uuidv4(),
      name: "Front-end",
      color: "#82CFFA",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#A6D157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#E06B69",
    },
    {
      id: uuidv4(),
      name: "UX & Design",
      color: "#DB6EBF",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      id: uuidv4(),
      name: "Innovation and management",
      color: "#FF8A29",
    },
  ])

  const initialTeamList = [
    {
      id: uuidv4(),
      name: "Lucas Fernandes",
      role: "Instructor",
      image: "https://github.com/lsfernandes92.png",
      team: "Programmers"
    }
  ]

  const [users, setUsers] = useState(initialTeamList)

  const handlerOnUserCreate = (user) => {
    setUsers([...users, user])
  }

  const handlerOnChangeColor = (color, id) => {
    setTeamList(teamList.map(team => {
      if(team.id === id) {
        team.color = color;
      }
      return team;
    }))
  }

  const handlerOnDelete = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="App">
      <Banner />
      <Form teamNames={teamList.map(team => team.name)} onUserCreate={user => handlerOnUserCreate(user)}/>
      {teamList.map(team =>
        <Team 
          key={team.name}
          id={team.id}
          name={team.name}
          color={team.color}
          users={users.filter(user => user.team === team.name)}
          onChangeColor={handlerOnChangeColor}
          onDelete={handlerOnDelete}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;