import React from 'react';
import './ViewAppointments.css';
import {Link} from 'react-router-dom'
let a=[
    {
    patientid:'1',
    patientName:"Ram",
    timing:'09:00'
    },
    {
        patientid:'2',
        patientName:"Kyle",
        timing:'09:30'
    }
]

class ViewAppointments extends React.Component{
    constructor(){
        super();
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
    render(){
        return(
            <div>
                 <h1 style={{"margin-left":"10%"}}>Appointments Today</h1>
                <div style={{"fontWeight":"bold"}} className="app-details">
                <div>Patient ID</div>
                <div>Patient Name</div>
                <div>Appointment Time</div>
                <div>
                    Create Entry
                </div>
                </div>
                <br/>
                {a.map((a)=>this.appointments(a))}
            </div>
        )
    }
}
export default ViewAppointments;