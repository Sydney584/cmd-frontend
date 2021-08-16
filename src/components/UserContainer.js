import React, { useState, useEffect } from "react"
import { Table, Button, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function UserContainer() {

  const [users, setUsers] = useState([]);

  useEffect (() => {
    fetch('http://localhost:9393/users')
    .then(r => r.json())
    .then(usersRes => setUsers(usersRes));
  }, [])


  return(
    <div>
  <Table singleLine>
    <Table.Header className="main-header">
      <Table.Row>
        <Table.HeaderCell>User id</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Gender Identity</Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
    {users.map((user) => {
     return (
        <Table.Row key={user.id}>
        <Table.Cell>{ user.id }</Table.Cell>
        <Table.Cell>{ user.name}</Table.Cell>
        <Table.Cell>{ user.gender}</Table.Cell>
      </Table.Row>
     
   )})} 
    
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='4'>
        <Link to='/UpdateUser'>
          <Button
            floated='right'
            icon
            labelPosition='left'
            primary
            size='small'
          >
            <Icon name='user' /> Update User info
          </Button>
          </Link>
          
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>


  </Table>
  </div>


     );
    }


