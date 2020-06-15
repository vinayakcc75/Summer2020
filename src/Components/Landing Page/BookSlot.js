import React from 'react';
import './AboutUs.css';
import moment from 'moment';
import ReactTimeslotCalendar from 'react-timeslot-calendar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './BookSlot.css'
let timeslots = [
    ['13', '14'], // 1:00 AM - 2:00 AM
    ['14', '15'], // 2:00 AM - 3:00 AM
    ['16', '17'], // 4:00 AM - 6:00 AM
    '18', // 5:00 AM
    ['19', '20'] // 4:00 AM - 6:00 AM - 7:00AM - 8:00AM
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
const arr=['Pediatrician','Neurology','Oncology'];
const docs={
     'Pediatrician':[
        'Dr. Vinayak',
        'Dr. Kyle'
     ],
     'Neurology':[
        'Dr. Smith',
        'Dr. John'
     ],
     'Oncology':[
        'Dr. Jin',
        'Dr. Steve'
     ]
}
let newarray=[];
class BookSlot extends React.Component{
    constructor(){
        super();
        this.state={
            dept:'Select Department ⬇',
            doctor:'Select Doctor ⬇'
        }
    }
    deptSelect=(ar)=>{
        this.setState({dept:ar});
        console.log(ar);
        newarray=docs[ar];
        console.log(newarray);
    }
    doctorSelect=(a)=>{
        console.log(a);
        this.setState({doctor:a});
    }
    render(){
    return(
        <div className="slot-book">
        <h1>SLOT BOOKING</h1>
        <form style={{marginLeft:'20%',justifyContent:'center', width:'60%'}} method='PUT'>
        <label htmlFor="email">Email </label>
        : <input type="email" placeholder="Enter Email" name="email"></input>
        <br/><br/>
        <label htmlFor="name">Name </label>
        : <input type="text" placeholder="Enter Full Name" name="patient-name"></input><br/><br/>
        <label htmlFor="phone">Contact Info </label>
        : <input type="phone" placeholder="Enter Contact No" name="contact"></input><br/><br/>
        <label className="shift" htmlFor="dept">Select Department </label>
        :<DropdownButton className="drop" id="dropdown-item-button" title={`${this.state.dept}`} >
        {arr.map((arr,i)=>{return( <Dropdown.Item className="list" eventKey="4" onSelect={()=>this.deptSelect(arr)} as="option">{`${arr}`}</Dropdown.Item>)})}
        </DropdownButton>
        <br/><br/>
        <label className="shift" htmlFor="doc">Select Doctor</label>
        :<DropdownButton className="drop" id="dropdown-item-button" title={`${this.state.doctor}`} >
        {newarray.map((a,i)=>{return( <Dropdown.Item className="list"  as="option" onSelect={()=>this.doctorSelect(a)}>{`${a}`}</Dropdown.Item>)})}
        </DropdownButton>
        <br/><br/>
        <br/><br/>
        <button >Book Slot</button>
        </form>
        <br/>
        <br/>
        <h3>Select a slot</h3>
        <div className='head'>
        <ReactTimeslotCalendar
        timeslots={timeslots}
        startDateInputProps={startDateInputProps} 
        initialDate={moment().format()}
        />
        </div>
        
        </div>
    );}
}

 export default BookSlot; 
 