import React from "react";
import "./Profile.css";
import dp from "./dp.jfif";
import ProfileValidation from "./ProfileValidation";

class Profile extends React.Component {
  constructor(props) {
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

  render() {
    return (
      <div>
        {this.state.open === false && (
          <div className="profile-main-wraper">
            <div className="profile-main">
              <div className="centered">
                <h1>Your Profile</h1>
              </div>
              <div className="centered">
                <img src={dp} alt="Profile Pic" />
              </div>
              <div className="centered">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h3>First Name</h3>
                      </td>
                      <td width="50px" />
                      <td>
                        <p>{this.state.data.fname}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Last Name</h3>
                      </td>
                      <td width="50px" />
                      <td>
                        <p>{this.state.data.lname}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Patient Id</h3>
                      </td>
                      <td width="50px" />
                      <td>
                        <p>{this.state.data.patId}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Gender</h3>
                      </td>
                      <td width="50px" />
                      <td>
                        <p>{this.state.data.gender}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Age</h3>
                      </td>
                      <td width="50px" />
                      <td>
                        <p>{this.state.data.age}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Date of Birth</h3>
                      </td>
                      <td width="50px" />
                      <td>
                        <p>{this.state.data.dob}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Address</h3>
                      </td>
                      <td width="50px" />
                      <td>
                        <p>{this.state.data.address}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="centered">
                <button onClick={this.toggle}>Edit Details</button>
              </div>
            </div>
          </div>
        )}
        {this.state.open === true && (
          <ProfileValidation
            data={this.state.data}
            toggle={this.saveAndToggle}
          />
        )}
      </div>
    );
  }
}
export default Profile;
