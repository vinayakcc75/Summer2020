import React from 'react';
import './AboutUs.css';
import DatePicker from 'react-date-picker';
import TimeSlotsCalender from './TimeSlotsCalender'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './BookSlot.css';
import ModernDatepicker from 'react-modern-datepicker';
import {Link} from 'react-router-dom';
//YYYY-MM-DD
//HH:MI:SS
let a=[];

let doctorsArray=['ram'];

class BookSlot extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dept:'Select Department',
            arr:"",
            current_date:new Date(),
            doctor:'Select Doctor',
            dept_id:"",
            now:false,
            docArr:"",
            doctor_id:"",
            patientEmail:'',
            patientName:'',
            patientPhone:'',
            date:new Date(),
            now:false,
            selectedSlot:'',
            slotsOpen:false,
            patientID:"",
            openDates:false,
            disabledSlots:""
        }
  }

  onChange = async (date) =>{
      await this.setState({date})
      await this.setState({ current_date:date },()=>console.log(this.state.current_date));
       fetch('http://localhost:8080/appointments/time_available', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({
              doctor_id:this.state.doctor_id,
              date:this.state.current_date
          })
        })
        .then(response => response.json())
        .then(async ret => {
          if (ret.status===true) {
            if(ret.message!==undefined){
            const temp=[];
            ret.message.map((time)=>{temp.push(time.time)});
             this.setState({disabledSlots:temp},()=>console.log(this.state.disabledSlots));
            }
          }
        })
        await this.setState({slotsOpen:true});

  }
 
    componentDidMount=()=>{
        fetch('http://localhost:8080/register/department', {
          method: 'get',
          headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(async ret => {
          if (ret.status===true) {
            await(this.setState({arr: ret.message},()=>console.log(this.state.arr)));
            await(this.state.arr.map((arr)=>{a.push(arr.department_name)}));
            console.log(a);
          }
        })
    }

     getDeptID=async(a)=>{
       this.setState({doctor:"Select Doctor"})
        await(this.setState({dept:a.value}));
        await(this.state.arr.map(arr=>{
            if(arr.department_name===a.value){
                this.setState({dept_id:arr.department_id},()=>console.log(this.state.dept_id))
            }
        }))
        fetch('http://localhost:8080/department/doctor', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            department_id:this.state.dept_id
          })
        })
        .then(response => response.json())
        .then(async (ret) => {
          if (ret.status===true) {
            this.docArr="";
            await(this.setState({docArr: ret.message}));
            doctorsArray=[];
            await(this.state.docArr.map((arr)=>{doctorsArray.push(arr.doctor)}))}
            this.setState({now:true})
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
    
    getDocID=async(a)=>{
        await(this.setState({doctor:a.value},()=>console.log(this.state.doctor)));
        this.state.docArr.map(arr=>{
            if(arr.doctor===a.value){
              this.setState({doctor_id:arr.doctor_id},()=>console.log('docid',this.state.doctor_id))
            }
        })
        fetch('http://localhost:8080/appointments/date_available', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            doctor_id:this.state.doctor_id
          })
        })
        .then(response => response.json())
        .then(async (ret) => {
          if (ret.status===true) {
            if(ret.message.length>0){
              alert('Sorry Doctor not avaialable');
              window.location.reload();
            }}
               this.setState({openDates:true});
         })
    }
    display=()=>{
      console.log(this.state.selectedSlot,' ',this.state.date)
    }
    upDate=(k)=>{
      this.setState({selectedSlot:k},()=>{
        console.log(this.state.selectedSlot)
      })

    }
    bookAppointmentNow=()=>{
      console.log('entered')
      fetch('http://localhost:8080/appointments', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({
              date:this.state.date,
              time:this.state.selectedSlot,
              doctor_id:this.state.doctor_id,
              patient_id:this.props.user.user_id
            })
        })
        .then(response => response.json())
        .then(async ret => {
          if (ret.status===true) {
               alert('Slot successfully Booked');
               window.location.reload();

          }
          else{
            alert('Please Login/Register First !')
                           window.location.reload();

          }
        })
        console.log('exit')

    }
    render(){
    return(
        <div >
        <h1>SLOT BOOKING </h1>
        {(this.props.user.username)?(
          <div>
        <h2>Hi {this.props.user.username} !!!</h2>
        <form  style={{marginLeft:'20%', width:'60%'}} method='GET'>
          {/* <div className="slot-book">
        <label htmlFor="email">Email </label>
        : <input onChange={this.slotemailChange}
        type="email" placeholder="Enter Email" name="email"></input>
        : <div className="holder">{this.props.user.email}</div>
        <br/><br/>
        <label htmlFor="name">Name </label>
        : <input onChange={this.slotnameChange}
        type="text" placeholder="Enter Full Name" name="patient-name"></input>
        : <div className="holder">{this.props.user.username}</div>
        <br/><br/>
        <label htmlFor="phone">Contact Info </label>
        : <input onChange={this.slotphoneChange}
        type="phone" placeholder="Enter Contact No" name="contact"></input>
        : <div className="holder">{this.props.user.phone}</div>
        <br/> */}
        <h3>⬇</h3>
        <div className="shift" >
        <Dropdown 
        onChange={this.getDeptID} 
        options={a}
        controlClassName="controlClassName"
        menuClassName="menuClassName"
        className="myClassName"
        placeholder={`${this.state.dept}`} />
        <br/><br/>
        <Dropdown 
        options={doctorsArray}
        onChange={this.getDocID} 
        controlClassName="controlClassName"
        menuClassName="menuClassName"
        className="myClassName"
        placeholder={`${this.state.doctor}`} />
        <br/>
        <h3>⬇</h3>
        </div>
        <div className='head'>
        <h3>Select a date to fix an appointment</h3>
        {this.state.openDates&&<ModernDatepicker
          className="color"
          date={this.state.date}
          format={'YYYY-MM-DD'}
          showBorder
          onChange={date => this.onChange(date)}
          placeholder={'Select a date'}
        />}
        <br/><br/>
        <h3>⬇</h3>
        <h3>Select a time slot</h3>
        {this.state.slotsOpen && 
        <TimeSlotsCalender 
        upDate={this.upDate} disabledSlots={this.state.disabledSlots}/>}
        <button id="solo" type="button" onClick={this.bookAppointmentNow} >Book Slot</button>
        </div>
        </form>
        </div>
        ):
        <h2 style={{"textDecoration":"underline"}}>
          <Link to='/'>
          Please Login First
          </Link>
          </h2>}
        </div>
    );}
    }

 export default BookSlot; 