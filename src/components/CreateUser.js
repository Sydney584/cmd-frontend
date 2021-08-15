import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

const CreateUser = () => {
  const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    const postData = () => {
      console.log(name);
      console.log(gender);
      
}
    return (

  <Form className="createUser-form">
    <Form.Field>
      <label>Name</label>
      <input placeholder='Type Your Name Here' onChange={(e) => setName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Gender Identity</label>
      <input placeholder='Type Gender Identity Here' onChange={(e) => setGender(e.target.value)} />
    </Form.Field>
    
    <Button onClick={postData} type='submit'>Submit</Button>
  </Form>
);
    }

export default CreateUser;