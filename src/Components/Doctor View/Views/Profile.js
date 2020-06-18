import React from 'react';
import './Profile.css'
import dp from './dp.jfif'

const Profile =({user})=>{
    return(
        <div className="doc-profile">
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
                    <td> <h3>DEPARTMENT ID : </h3> </td>
                    <td> <h4>{`${user.dept_id}`}</h4> </td>
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
                    <button>Edit Details</button>
                </tr>
            </table>
            
            
        </div>
    );
}

export default Profile; 
 

