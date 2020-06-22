import React from 'react';
import './Profile.css'
import dp from './dp.jfif'
import ProfileValidation from './ProfileValidation'
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
    this.saveAndToggle = this.saveAndToggle.bind(this);
    this.state = {
      open: false,
      data: {
        fname: "John",
        lname: "Abraham",
        age: 25,
        gender: "Male",
        dob: "dd-mm-yyyy",
        email: "john@gmail.com",
        patId: "111100",
        address: "Format",
      },
    };
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  saveAndToggle = (newdata) => {
    this.toggle();
    this.setState({ data: newdata });
  };

render(){
    const {user} =this.props;
    return(
<div>
            {this.state.open === true && (
          <ProfileValidation
            data={this.state.data}
            toggle={this.saveAndToggle}
          />
        )}
        <div className="pat-profile">

        {this.state.open === false && (
            <table>   
                <tr>           
                <img src={dp} alt="Profile pic" /> 
                </tr>  
                <tr>
                    <button>Upload / Update  pic</button> 
                </tr>
                <br/><br/>
                <tr>
                <td> <h3>NAME : </h3> </td>
                    <td> <h4>{`${user.username}`}</h4> </td>
                </tr>
                <tr>
                    <td> <h3>USER ID : </h3> </td>
                    <td> <h4>{`${user.user_id}`}</h4> </td>
                </tr>
                <tr>
                    <td> <h3>EMAIL ID : </h3> </td>
                    <td> <h4>{`${user.email}`}</h4> </td>
                </tr>
                <tr>
                    <td> <h3>DATE OF BIRTH : </h3> </td>
                    <td> <h4>15/11/1999</h4> </td>
                </tr>
                <tr>
                    <td> <h3>GENDER : </h3> </td>
                    <td> <h4>Male</h4> </td>
                </tr>
                <tr>
                    <td> <h3>AGE : </h3> </td>
                    <td> <h4>20</h4> </td>
                </tr>
                <tr>
                    <td><h3>ADDRESS : </h3></td>
                    <td><h4>Delhi,IN</h4></td>
                </tr>
                <br/><br/>
                <tr>
                    <button onClick={this.toggle}>Edit Details</button>
                </tr>
            </table>)}
        </div>
        </div>
    );}
}

export default Profile; 
 

