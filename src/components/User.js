
import { Table, Button, Icon, Form } from "semantic-ui-react";
import { useState, useEffect} from "react";

export default function User({user, deleteUser, updateUser, initialDelay=0}) {
    
    const [newUser, setNewUser] = useState({...user});
    const [editMode, setEditMode] = useState(false);
    const [render, setRender] = useState(false)
   
    useEffect(() => {
        const timeout = setTimeout(() => {setRender(true)}, initialDelay)
        return () => clearTimeout(timeout)
      }, [initialDelay])

    function handleChange(e) {
        const updatedValue = {...newUser}
        updatedValue[e.target.name] = e.target.value;
        setNewUser({ ...updatedValue });
    
    }

    function toggleEdit() {
        setEditMode(!editMode);
      }

   
    
    function handleUpdate(e) {
       e.preventDefault();
       updateUser(newUser);
       setEditMode(false);
    }
    if (!render) {
        return <></>
      }
    
    
    return (

       
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
   
        <Table.Row key={user.id}>
        <Table.Cell>{ user.id }</Table.Cell>
        <Table.Cell>{ user.name}</Table.Cell>
        <Table.Cell>{ user.gender}</Table.Cell>
      </Table.Row>
     
   
    
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='4'>
        {/* <Link to='/UpdateUser'>
          <Button onClick='Submit'
            floated='right'
            icon
            labelPosition='left'
            primary
            size='small'
          >
            <Icon name='user' /> Update User
          </Button>
          </Link> */}
          <Button onClick={() => deleteUser(user)}
            floated='right'
            icon
            labelPosition='left'
            primary
            size='small'
          >
            <Icon name='user' /> Delete User
          </Button>
          
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  {editMode && (
            <>
  <Form onSubmit={handleUpdate} className="cmdUser-form">
    <Form.Field>
      <label className='form-label'>Name</label>
      <input name="name" value={newUser.name} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label className='form-label'>Gender Identity </label>
      <input name="gender" value={newUser.gender} onChange={handleChange} />
    </Form.Field>
    
    <Button type='submit'>Update User</Button>
  </Form>
  </>
  )}
  
  <button onClick={toggleEdit}>Edit</button>
  </div>
);
        

}
 
