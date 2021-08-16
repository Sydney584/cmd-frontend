import React, { useState, useEffect } from "react"



const UserContainer = () => {
  const [users, setUsers] = useState([]);
  
  const usersList = users.map(user => <li>{user.name}; 
  {user.gender} </li>);

  
 

  // READ

  useEffect (() => {
    fetch('http://localhost:9393/users')
    .then(r => r.json())
    .then(usersRes => setUsers(usersRes));
  }, []);

  function updateUser(user) {
    fetch('http://localhost:9393/users' + user.id, {
      method: "PATCH",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }
     
    return (
        <div className="main">
          <h1 className="main-header">Create My Day Active Users</h1>
          <ul>
            {usersList}
          </ul>

       
      </div>
    );
  }


 
export default UserContainer;