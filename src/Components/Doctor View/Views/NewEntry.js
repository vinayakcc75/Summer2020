import React from 'react';
import './NewEntry.css'
const NewEntry =()=>{
    return(
        <div className="entry">
        <br/>
         <h1>New Entry</h1>
         <form>
             <br/><br/>
             <label htmlFor="patient id">Patient Id</label>
             : <input type="number" ></input><br/><br/><br/>

             <label htmlFor="patient name">Patient Name</label>
            : <input type="text" ></input><br/><br/><br/>

            <label htmlFor="patient id">Diagnosis</label>
            : <span className="span"  contenteditable="true" /><br/><br/><br/>

            <label htmlFor="prescription">Prescription</label> 
            : <span className="span"  contenteditable="true" /><br/><br/><br/>
            <button type="button">Submit</button>
         </form>
        </div>
    );
}
 export default NewEntry; 
 