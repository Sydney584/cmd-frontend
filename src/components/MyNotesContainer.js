
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";
import MyNote from "./MyNote.js";


export default function MyNotesDetails() {

  const [mynotes, setMynotes] = useState(null)

    // const { id } = useParams();

  useEffect(() => {
    fetch(BASE_URL + 'mynotes')
      .then((res) => res.json())
      .then((json) => setMynotes(json))
  }, [])

  

  

  function populateMynotes() {
    return mynotes.map(mynote => <MyNote mynote={mynote} key={mynote.id} />)
  }

    return (

        <div className="mynotes">
            {mynotes && populateMynotes()}



        </div>

    )
}
 
