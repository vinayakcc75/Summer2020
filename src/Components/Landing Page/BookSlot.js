import React from 'react';
import './AboutUs.css';
import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar';
import DatePicker from 'react-date-picker';
import TimeSlotsCalender from './TimeSlotsCalender'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import './BookSlot.css';
let timeslots = [
    ['13', '14'], // 1:00 AM - 2:00 AM
    ['14', '15'], // 2:00 AM - 3:00 AM
    ['16', '17'], // 4:00 AM - 6:00 AM
    '18', // 5:00 AM
    ['19', '20'] // 4:00 AM - 6:00 AM - 7:00AM - 8:00AM
];
let lastSelectedTimeslot = [
    ['13', '14'], // 1:00 AM - 2:00 AM
    
];
// let disabledTimeslots = [
//     {
//         startDate: 'April 30th 2017, 12:00:00 AM',
//         format: 'MMMM Do YYYY, h:mm:ss A',
//     },
//     {
//         startDate: 'May 1st 2017, 3:00:00 PM',
//         format: 'MMMM Do YYYY, h:mm:ss A',
//     },
//     {
//         startDate: 'May 5th 2017, 6:00:00 PM',
//         format: 'MMMM Do YYYY, h:mm:ss A',
//     },
// ];

let startDateInputProps = {
    class: 'some-random-class',
    name: 'May 28th 2020, 6:00:00 PM',
};
 let   ignoreweekends={
    'saturdays': false,
    'sundays': false
    }
let a=[];
let doctorsArray=[];
class BookSlot extends React.Component{
    constructor(){
        super();
        this.state={
            dept:'Select Department',
            arr:"",
            current_date:new Date(),
            doctor:'Select Doctor',
            docArr:"",
            docId:"",
            patientEmail:'',
            patientName:'',
            patientPhone:'',
            date: new Date()
        }
  }
 
  onChange = (date) =>{
      this.setState({date})
       this.setState({ current_date:date },()=>console.log(this.state.current_date));
  }
 
    componentDidMount=()=>{
        fetch('http://localhost:8080/register/department', {
          method: 'get',
          headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(ret => {
          if (ret.status===true) {
            this.setState({arr: ret.message});
            this.state.arr.map((arr)=>{a.push(arr.department_name)})
            console.log(a);
          }
        })
    }

    getDeptID=(a)=>{
        this.setState({dept:a.value});
        this.state.arr.map(arr=>{
            if(arr.department_name===a.value){
                this.setState({dept_id:arr.department_id},()=>console.log(this.state.dept_id))
            }
        })
        fetch('http://localhost:8080/department/doctor', {
          method: 'get',
          headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(ret => {
          if (ret.status===true) {
            this.setState({arr: ret.message});
            this.state.arr.map((arr)=>{doctorsArray.push(arr.doctor_name)})
            console.log(doctorsArray);
          }
        })
    }
   
    slotemailChange=(event)=>{
        this.setState({patientEmail:event.target.value});
    }
    slotnameChange=(event)=>{
        this.setState({patientName:event.target.value});
    }
    slotphoneChange=(event)=>{
        this.setState({patientPhone:event.target.value});
    }
    updateDoctors=()=>{
        
    }
    getDocID=(a)=>{
        this.setState({doctor:a.value});
        // this.state.doctorArray.map(arr=>{
        //     if(arr.doctor_name===a.value){
        //         this.setState({doc_Id:arr.department_id},()=>console.log(this.state.dept_id))
        //     }
        // })
    }
    render(){
    return(
        <div >
        <h1>SLOT BOOKING</h1>
        <form style={{marginLeft:'20%',justifyContent:'center', width:'60%'}} method='GET'>
            <div className="slot-book">
        <label htmlFor="email">Email </label>
        : <input onChange={this.slotemailChange}
        type="email" placeholder="Enter Email" name="email"></input>
        <br/><br/>
        <label htmlFor="name">Name </label>
        : <input onChange={this.slotnameChange}
        type="text" placeholder="Enter Full Name" name="patient-name"></input>
        <br/><br/>
        <label htmlFor="phone">Contact Info </label>
        : <input onChange={this.slotphoneChange}
        type="phone" placeholder="Enter Contact No" name="contact"></input>
        <br/>
        <h3>⬇</h3>
        <div className="shift" >
        {/* <label  htmlFor="dept">Select Department</label> */}
      
        <Dropdown 
        onChange={this.getDeptID} 
        options={a}
        controlClassName="controlClassName"
        menuClassName="menuClassName"
        className="myClassName"
        placeholder={`${this.state.dept}`} />
        <br/><br/>
        {/* <label htmlFor="doc">Select Doctor</label><br/><br/> */}

        {this.updateDoctors()}

        <Dropdown 
        onChange={this.getDocID} 
        options={doctorsArray}
        controlClassName="controlClassName"
        menuClassName="menuClassName"
        className="myClassName"
        placeholder={`${this.state.doctor}`} />
        <br/>
        <h3>⬇</h3>
        </div>
        </div>
        <h3>Select a date to fix an appointment</h3>
        <div className='head'>
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
        <br/><br/>
        <h3>⬇</h3>
        <h3>Select a time slot</h3>
        <TimeSlotsCalender current_date={this.current_date}/>
        
        <button id="solo" type="button">Book Slot</button>
        </div>
        </form>
        </div>
    );
}
}

 export default BookSlot; 