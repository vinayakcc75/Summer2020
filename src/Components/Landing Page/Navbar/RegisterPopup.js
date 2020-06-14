import React from 'react';
import './RegisterPopup.css';
import Backdrop from './Backdrop';
import person from './icons8-person-64.png';

class RegisterPopup extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            operator:"patient",
            user:{
            username:'',
            phone:"",
            password:"",
            email:"",
            type:"0"
            }
        }
    }
    nameChange=(event)=>{
        this.setState(Object.assign(this.state.user,{username:event.target.value}));
    }
    passChange=(event)=>{
        this.setState(Object.assign(this.state.user,{password:event.target.value}));
    }
    emailChange=(event)=>{
        this.setState(Object.assign(this.state.user,{email:event.target.value}));
    }
    telChange=(event)=>{
        this.setState(Object.assign(this.state.user,{phone:event.target.value}));
    }
    operatorChange=(text)=>{
        if(text==='patient'){
        this.setState({operator:"patient"});
        this.setState(Object.assign(this.state.user,{type:'0'}));
        }
        else{
        this.setState({operator:"doctor"})
        this.setState(Object.assign(this.state.user,{type:'1'}));
        }
    }
    
    
  submitF=()=>{
      console.log('entered');
    fetch('http://localhost:8080/api/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username:this.state.user.username,
        phone:this.state.user.phone,
        password:this.state.user.password,
        email:this.state.user.email,
        type:this.state.user.type
      })
    })
    .then(response => response.json())
    .then(ret => {
      if (ret.status===true) {
        // this.props.loadUser(this.state.user);
        alert('Registered Successfully! Now Login');
        window.location.reload();
        this.props.onRouteChange('none');

      }
    })
  }
    render(){

        const {onRouteChange} = this.props;
    return(
        <div>
        <Backdrop onRouteChange={onRouteChange}/>
        <div className="register-container" >
        <img src={person} alt="google" height='40' width='40'/>
        <br/>
            <h1 className="heading">REGISTER </h1><br/>
            <form method='PUT'>
                <div className="user-selection">
                <label htmlFor="doctor">Doctor</label>
                <input onClick={()=>this.operatorChange('doctor')}
                type="radio" name="user" value="doctor" />
                <label htmlFor="patient">Patient</label>
                <input type="radio" onClick={()=>this.operatorChange('patient')}
                 name="user" value="patient" />
                </div>
                <br/>
                { (this.state.operator==='patient')?(
                    <div>
                    <input type="text" placeholder="Enter Patient's Name"
                    onChange={this.nameChange}></input><br/><br/>
                    <input type="email" placeholder="Enter Email"
                    onChange={this.emailChange}></input><br/><br/>
                    <input type="password" placeholder="Enter Password"
                    onChange={this.passChange}></input><br/><br/>
                    <input type="tel" placeholder="Enter Contact No"
                    onChange={this.telChange}></input><br/><br/>
                    <button type="button" onClick={this.submitF} >Register as Patient</button>
                    </div>
                ):
                (
                    <div>
                    <input type="text" placeholder="Enter Doctor Name"
                    onChange={this.nameChange}></input><br/><br/>
                    <input type="email" placeholder="Enter Email"
                    onChange={this.emailChange}></input><br/><br/>
                    <input type="password" placeholder="Enter Password"
                    onChange={this.passChange}></input><br/><br/>
                    <input type="tel" placeholder="Enter Contact No"
                    onChange={this.telChange}></input><br/><br/>
                    <button type="button" onClick={this.submitF} >Register as Doctor</button>
                    </div>
                )
                }
            </form>
        </div>
        </div>
    )
    }
}
export default RegisterPopup;