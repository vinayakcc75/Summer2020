import React from 'react';
import './NewEntry.css';
import * as yup from 'yup'; // for everything

const schema = yup.object().shape({
  patientid: yup.number().required().positive(),
  patientname: yup.string().required(),
  diagnosis:yup.string().required(),
  prescription:yup.string()
});
 
// you can try and type cast objects to the defined schema


class NewEntry extends React.Component{
    constructor(){
        super();
        this.state={
            patientId:"",
            patientName:"",
            diagnosis:"",
            prescription:""
        }
    }
    pidChange=(event)=>{
        this.setState({patientId:event.target.value})
    }
    pnameChange=(event)=>{
        this.setState({patientName:event.target.value})
    }
    diagnosisChange=(event)=>{
        this.setState({diagnosis:event.target.value})
    }
    presChange=(event)=>{
        this.setState({prescription:event.target.value})
    }
    submit=()=>{
        console.log(this.state.patientId," ",this.state.patientName);
    }
    render(){
    return(
        <div className="entry">
        <br/>
         <h1>New Entry</h1>
         <form>
             <br/><br/>
             <label htmlFor="patient id">Patient Id</label>
             : <input onChange={this.pidChange} type="number" ></input><br/><br/><br/>

             <label htmlFor="patient name">Patient Name</label>
            : <input onChange={this.pnameChange} type="text" ></input><br/><br/><br/>

            <label htmlFor="diagnosis">Diagnosis</label>
            : <span onChange={this.diagnosisChange} className="span"  contentEditable="true" /><br/><br/><br/>

            <label htmlFor="prescription">Prescription</label> 
            : <span onChange={this.presChange} className="span"  contentEditable="true" /><br/><br/><br/>
            <button onClick={this.submit} type="button">Submit</button>
         </form>
        </div>
    );}
}
 export default NewEntry; 
 