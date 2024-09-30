import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import ToggleButton from "./components/ToggleButton";
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

  const initialUserList = [
    {
      id: uuidv4(),
      fav: false,
      name: "Lucas Fernandes",
      role: "Instructor",
      image: "https://github.com/lsfernandes92.png",
      team: teamList[0]
    }
  ]

  const [users, setUsers] = useState(initialUserList)
  const [formVisibility, setFormVisibility] = useState(true)

  const handlerOnUserCreate = (user) => {
    setUsers([...users, {...user, team: teamList.find(team => team.name === user.team)}])
  }

  const handlerOnTeamCreate = (team) => {
    setTeamList([...teamList, {...team, id: uuidv4() }])
  }
  
  const handlerOnChangeColor = (color, id) => {
    setTeamList(teamList.map(team => {
      if(team.id === id) {
        team.color = color;
      }
      return team;
    }))
  }

  const handlerOnDeleteUserCard = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const handlerOnDeleteTeam = (id) => {
    setUsers(users.filter(user => user.team.id !== id))
  }

  const handlerOnFav = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        user.fav = !user.fav;
      }
      return user;
    }))
  }

  const handlerFormVisibility = () => {
    setFormVisibility(!formVisibility)
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        teamNames={teamList.map(team => team.name)}
        formVisibility={formVisibility}
        onVisibilityChange={handlerFormVisibility}
        onUserCreate={user => handlerOnUserCreate(user)}
        onTeamCreate={team => handlerOnTeamCreate(team)}
      />
      <ToggleButton onClick={handlerFormVisibility} />
      {teamList.map(team =>
        <Team
          key={team.name}
          id={team.id}
          name={team.name}
          color={team.color}
          users={users.filter(user => user.team.name === team.name)}
          onChangeColor={handlerOnChangeColor}
          onDeleteUserCard={handlerOnDeleteUserCard}
          onDeleteTeam={handlerOnDeleteTeam}
          onFav={handlerOnFav}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;