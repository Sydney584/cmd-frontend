import React, { useState } from 'react'


const CreateUser = () => {
  
const [name, setName] = useState("");
const [gender, setGender] = useState("")
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
const user = {name, gender};

//     const postData = () => {
//       console.log(user);

// CREATE
fetch('http://localhost:9393/users', {
            method: `POST`,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            console.log('new user posted');
            setIsLoading(false);
            
           
        })

    }
    return (

  <form onSubmit={ handleSubmit } className="cmdUser-form">
  
      <label className='form-label'>Name</label>
      <input type="text"
      placeholder='Type Your Name Here'
      required 
      value={ name }
      onChange={(e) => setName(e.target.value)} />
    
    
      <label className="form-label">Gender Identity</label>
      <input type="text"
      placeholder='Type Gender Identity Here' 
      value={ gender }
      onChange={(e) => setGender(e.target.value)} />
  
    
  { !isLoading && <button>Submit</button>}
  { isLoading && <button disabled>Creating Account</button>}
  </form>
);
    }
  

export default CreateUser;