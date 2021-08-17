// import { useState, useEffect} from 'react'
// import { BASE_URL } from '../constraints'
// import { Button, Form } from 'semantic-ui-react'



// export default function UpdateUser({user, updateUser, newUser }) {
    
//    const [newUser, setNewUser] = useState({...user})
   

// function handleChange(e) {
//     const updatedValue = {...newUser}
//     updatedValue[e.target.name] = e.target.value
//     setNewUser({...updatedValue})

// }

// function handleUpdate(e) {
//    e.preventDefault()
//    updateUser(newUser)
// }


// // //   UPDATE
// useEffect (() => {
//         fetch(BASE_URL + 'userS/' + user.id, {
//         method:"PUT",
//         body: JSON.stringify(user),
//         headers: {
//             "Accept": "applicaton/json",
//             "Content-Type": "application/json"
//         }
//         })
//         const newUsers = users.map (usern => {
//         if (usern.id === user.id) {
//             usern = user
//         }
//         return usern
//         })
//         setUsers(newUser)
//     }, [newUser, user, users])


// return(

//   <Form onSubmit={handleUpdate} className="cmdUser-form">
//     <Form.Field>
//       <label className='form-label'>Name</label>
//       <input placeholder='Type Your Name Here' name="name" value={newUser.name} onChange={handleChange} />
//     </Form.Field>
//     <Form.Field>
//       <label>Gender Identity </label>
//       <input placeholder='Type Gender Identity Here' gender="gender" value={newUser.gender} onChange={handleChange} />
//     </Form.Field>
    
//     <Button type='submit'>Update User</Button>
//   </Form>
// )
// }
