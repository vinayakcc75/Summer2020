import React from 'react';
import './Profile.css'
import dp from './dp.jfif'

class Profile extends React.Component{
  render(){
    return(
      <div className="profile-main-wraper">
      <div className="profile-main">
        <div className="block-wraper">
            <div>
              <h1>Your Profile</h1>
            </div>
        </div>
        <div className="block-wraper">
            <div>
              <div>
                <img src={dp} alt="Profile Pic" /> 
              </div>
            </div>
        </div>
        <div className="block-wraper">
            <div>
              <div className="content">
                <h3>Name</h3>
              </div>
              <div className="value">
                <p>John</p>
              </div>
            </div>  
        </div>  
        <div className="block-wraper">
          <diV>
            <div className="content">
              <h3>Age</h3>
            </div>
            <div className="value">
             <p>25</p>
            </div>
          </diV>
        </div>
        <div className="block-wraper">
          <div>
            <div className="content">
              <h3>Gender</h3>
            </div>
            <div className="value">
             <p>Male</p>
            </div>
          </div>
        </div>
        <div className="block-wraper">
          <div>
            <div className="content">
              <h3>Date of Birth</h3>
            </div>
            <div className="value">
             <p>DD-MM-YYYY</p>
            </div>
          </div>  
        </div>
        <div className="block-wraper">
          <div>
            <div className="content">
              <h3>E-mail</h3>
            </div>
            <div className="value">
             <p>john@exmaple.com</p>
            </div>
          </div>  
        </div>
        <div className="block-wraper">
          <div>
            <div className="content">
              <h3>Patient Id</h3>
            </div>
            <div className="value">
             <p>11100</p>
            </div>
          </div>  
        </div>
        <div className="block-wraper">
          <div>
            <div className="content">
              <h3>Address</h3>
            </div>
            <div className="value">
             <p>Format</p>
            </div>
          </div>    
        </div>
        <div className="block-wraper">
          <div>
            <button>Edit Details</button>
          </div>
        </div>
      </div>
      </div>
      );
  }  
}
export default Profile; 
 
