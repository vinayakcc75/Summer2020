import React from 'react';
import './NewEntry.css';
import * as yup from 'yup'; // for everything

const schema = yup.object().shape({
  patientid: yup.number().required().positive(),
  patientname: yup.string().required(),
  diagnosis:yup.string().required(),
  prescription:yup.string()
});
 


class NewEntry extends React.Component{
    constructor(props){
        super(props);
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
        fetch('http://localhost:8080/save_medical_records', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({
            user_id:this.state.patientId,
            doctor_id:this.props.user.user_id,
            symptoms:this.state.diagnosis,
            prescribed:this.state.prescription
          })
        })
        .then(response => response.json())
        .then(async ret => {
          if (ret.status===true){
            alert('Record Saved !')
        }
        else{
            alert('Enter Valid Patient ID !');        }
        })
  }
    
    render(){
    return(
        <div className="entry">
        <br/>
         <h1>New Entry</h1>
         <form>
             <br/><br/>
             <label htmlFor="patient id">Patient Id</label>
             : <div className="wid">{this.props.patientId}</div><br/><br/><br/>

             <label htmlFor="patient name">Patient Name</label>
            : <div className="wid">{this.props.patientName}</div><br/><br/><br/>

            <label htmlFor="diagnosis">Diagnosis</label>
            : <textarea 
            name="text" rows="14" cols="10" wrap="soft"
            onChange={this.diagnosisChange} /><br/><br/><br/>

            <label htmlFor="prescription">Prescription</label> 
            : <textarea 
            name="text" rows="14" cols="10" wrap="soft"
            onChange={this.presChange}/><br/><br/><br/>
            <button onClick={this.submit} type="button">Submit</button>
         </form>
        </div>
    );}
}
 export default NewEntry; 
 