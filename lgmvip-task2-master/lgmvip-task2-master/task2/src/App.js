import React, { useState} from 'react';
import './App.css';
import logo from "./LGM.png"

const App=()=>{

  const [users, setUsers] = useState([]);
  const loadusers = async() => {
    const response = await fetch ("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    setUsers(jsonresponse.data);
  };

  return (
    <div className="App">
      <div className="Navigation">
        <img src={logo} alt="lgm"></img>
        <button onClick={loadusers}>Get Users</button>
      </div>
      <div className="user">
        {
          users.map(({email, first_name, last_name, avatar})=>{
            return(
              <div className="card">
                <div className="pic">
                  <img src={avatar} about alt=""></img>  
                </div>
                <div className="details">
                  <h2>{first_name} {last_name}</h2>
                  <h3>{email}</h3>
                </div>
              </div>  

            )
          })
        }
      </div>
    </div>  
  );  
}
export default App;