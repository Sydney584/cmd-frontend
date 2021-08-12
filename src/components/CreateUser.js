import { useState } from 'react';
import { Form } from 'semantic-ui-react'




const CreateUser = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  

  const postData = () => {
    console.log(name);
    console.log(gender)
}

    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Name' placeholder='Please Type Your Name.' onChange={(e) => setName(e.target.value)}/>
          <Form.Input
            fluid
            label='Gender Identity'
            // options={options}
            placeholder='Type Gender Identity Here'
            onChange={(e) => setGender(e.target.value)}/>
        </Form.Group>
        <Form.Button onClick={postData} type='submit'>Submit</Form.Button>
      </Form>
    )
  }


export default CreateUser;