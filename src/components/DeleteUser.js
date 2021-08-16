import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";


const CmdUser = () => {

    const { id } = useParams();
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);
    const history = useHistory();

    
    useEffect(() => {
    
  
        setTimeout(() => {
          fetch('http://localhost:9393/users/' + id,)
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch data');
          }
          return res.json();
        })
        .then(data => {
          setQuotes(data);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
          setError(err.message);
          }
        })
        
        }, 10);
  

      }, [id]);

      const handleCick= () => {
          fetch('http://localhost:9393/users/' + id, {
              method: `DELETE`
          }).then(() => {
              history.push('/');

          })

      }

    return (
      <div className="container">
      { error && <div>{ error }</div> }
       {users && (
           <article>
               <h2>{ quotes.title}</h2>
               <p>Written by: { quotes.author }</p>
               <div class="text md-start">{ quotes.body }</div>
               
               <img src={quotes.image} class="rounded img-thumbnail w-50 p-3" alt="" />
               
               <button onClick={ handleCick }>Delete</button>
           
           
           </article>
           
          
           
       )}
        </div>
);
}

 
export default QuotesContainer;