import React from 'react';
import './ViewAppointments.css';
import {Link} from 'react-router-dom';
import DatePicker from 'react-date-picker';

let a=[
    {
    patientid:'1',
    patientName:"Ram",
    timing:'09:00 am'
    },
    {
        patientid:'2',
        patientName:"Kyle",
        timing:'09:30 am'
    }
]

class ViewAppointments extends React.Component{
    constructor(){
        super();
        this.state={
            date:new Date()
        }
    }
    somethings=(a,b)=>{
        this.props.setpid(a,b);
    }
    appointments=(a)=>{
        return(
            <div className="individual-appoint">
                <div className="app-details">
                <div>{a.patientid} </div>
                <div>{a.patientName}</div>
                <div>{a.timing}</div>
                <div>
                    <Link to='/newentry'>
                       <button onClick={()=>{this.somethings(a.patientid,a.patientName)}}>New</button>
                    </Link>
                </div>
                </div>
            </div>
        )
    }
    onChange=(d)=>{
        this.setState({date:d})
    }
    render(){
        return(
            <div className="box">
                 <h1 style={{"margin-left":"10%"}} className="dates">
                     Appointments
                     </h1>
                     <div className="cal">
                 Date : <DatePicker
                        onChange={this.onChange}
                        value={this.state.date}
                        />
                        </div>
                        <br/><br/>
                <div style={{"fontWeight":"bold"}} className="app-details">
                <div>Patient ID</div>
                <div>Patient Name</div>
                <div>Appointment Time</div>
                <div>
                    Add Prescription
                </div>
                </div>
                <br/>
                {a.map((a)=>this.appointments(a))}
            </div>
        )
    }
}
export default ViewAppointments;