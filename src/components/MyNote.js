




export default function MyNote({mynote}) {


    return (


        <div className="main">
        <div className="main-container">

            <br />
            <p>
            {mynote.id}
            </p>
            {mynote.thankful}
            <br/>
            {mynote.notes}
            
        </div>
        </div>

    );
}
 
