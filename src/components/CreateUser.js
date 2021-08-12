
import React, {  useState }from 'react';
import { Button, Form } from 'semantic-ui-react'

const CreateUser = () => {
  const [name, setName] = useState('');
  
  const postData = () => {
        console.log(name);
  }
  

  return (
  
  <div>
  <Form className="createUser-form">
    <Form.Field>
      <label>Name: </label>
      <input placeholder='Please Type Your Name' onChange={(e) => setName(e.target.value)}/>
    </Form.Field>
    {/* <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field> */}
    <Button onClick={postData} type='submit'>Submit</Button>
  </Form>
  </div>
)
  }

export default CreateUser;