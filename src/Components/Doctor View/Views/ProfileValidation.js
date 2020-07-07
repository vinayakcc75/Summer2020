import * as Yup from "yup";
import { Formik, Field } from "formik";
import React from "react";
import "./ProfileValidation.css";

class ProfileValidation extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: "John",
      lname: "Abraham",
      age: 25,
      gender: "Male",
      dob: "dd-mm-yyyy",
      email: "john@gmail.com",
      address: "Format",
      department: "",
      qualification: "",
      specialization: "",
    };
  }
  /*
  emailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  firstNameChange = (event) => {
    this.setState({ fname: event.target.value });
  };
  lastNameChange = (event) => {
    this.setState({ lname: event.target.value });
  };
  dobChange = (event) => {
    this.setState({ fname: event.target.value });
  };
  genderChange = (x) => {
    this.setState({ gender: x });
  };
  addressChange = (event) => {
    this.setState({ address: event.target.value });
  };
  */
  submit = () => {
    fetch(`/profile/save_edit`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: this.props.patientId,
        doctor_id: this.props.user.user_id,
        symptoms: this.state.diagnosis,
        prescribed: this.state.prescription,
      }),
    })
      .then((response) => response.json())
      .then(async (ret) => {
        console.log(this.state);
      });
  };
  render() {
    return (
      <div className="profile-validation-popup">
        <div className="valid-profile-wraper">
          <div className="valid-profile">
            <div className="centered">
              <h2>Edit Details</h2>
            </div>
            <Formik
              initialValues={this.state}
              onSubmit={(values, { setSubmitting }, cb = this.props.toggle) => {
                setSubmitting(true);
                setTimeout(() => {
                  console.log("Saved ", values);
                }, 500);
                //Connecting to Backend
                this.submit();
                cb(values);
                setSubmitting(false);
              }}
              validationSchema={Yup.object().shape({
                fname: Yup.string().required("Required"),
                lname: Yup.string().required("Required"),
                age: Yup.number().required("Required"),
                gender: Yup.string().required("Required"),
                dob: Yup.date().required("Required"),
                email: Yup.string().email().required("Required"),
                address: Yup.string().required("Required"),
                department: Yup.string().required("Required"),
                qualification: Yup.string().required("Required"),
                specialization: Yup.string().required("Required"),
              })}
            >
              {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleSubmit,
                } = props;
                return (
                  <form autoComplete="off" onSubmit={handleSubmit}>
                    <div>
                      <div className="div-name">
                        <label htmlFor="fname">First Name</label>
                        <br />
                        <br />
                        <Field
                          type="text"
                          name="fname"
                          value={values.fname}
                          placeholder="Enter Your First Name"
                          contentEditable="true"
                          className={errors.fname && touched.fname && "error"}
                        />
                        <br />
                        <br />
                        {errors.fname && touched.fname && (
                          <div className="input-feedback">{errors.fname}</div>
                        )}
                      </div>
                      <div className="div-name div-name-inner">
                        <label htmlFor="lname">Last Name</label>
                        <br />
                        <br />
                        <Field
                          type="text"
                          name="lname"
                          value={values.lname}
                          placeholder="Enter Your Last Name"
                          contentEditable="true"
                          className={errors.lname && touched.lname && "error"}
                        />
                        <br />
                        <br />
                        {errors.lname && touched.lname && (
                          <div className="input-feedback">{errors.lname}</div>
                        )}
                      </div>
                    </div>
                    <label htmlFor="male">Male</label>

                    <Field
                      type="radio"
                      name="gender"
                      value="Male"
                      className={
                        "input-gender" ||
                        (errors.gender && touched.gender && "error")
                      }
                      defaultChecked={values.gender === "Male"}
                    />
                    <label htmlFor="female">Female</label>
                    <Field
                      type="radio"
                      name="gender"
                      value="Female"
                      className={
                        "input-gender" ||
                        (errors.gender && touched.gender && "error")
                      }
                      defaultChecked={values.gender === "Female"}
                    />
                    <br />
                    <br />
                    <label htmlFor="dob">Date of Birth</label>
                    <br />
                    <br />
                    <Field
                      type="date"
                      name="dob"
                      value={values.dob}
                      placeholder="Enter Your Date Of Birth"
                      className={
                        "input-style" || (errors.dob && touched.dob && "error")
                      }
                    />
                    <br />
                    <br />
                    {errors.dob && touched.dob && (
                      <div className="input-feedback">{errors.dob}</div>
                    )}
                    <label htmlFor="email">Email</label>
                    <br />
                    <br />
                    <Field
                      type="text"
                      name="email"
                      value={values.email}
                      placeholder="Enter Your email"
                      className={
                        "input-style" ||
                        (errors.email && touched.email && "error")
                      }
                    />
                    <br />
                    <br />
                    {errors.email && touched.email && (
                      <div className="input-feedback">{errors.email}</div>
                    )}
                    <label htmlFor="address">Address</label>
                    <br />
                    <br />
                    <Field
                      name="address"
                      contentEditable="true"
                      placeholder="Enter Your Address"
                      value={values.address}
                      className={
                        "input-style" ||
                        (errors.address && touched.address && "error")
                      }
                    />
                    <br />
                    <br />
                    {errors.address && touched.address && (
                      <div className="input-feedback">{errors.address}</div>
                    )}

                    <label htmlFor="department">Department</label>
                    <br />
                    <br />
                    <Field
                      name="department"
                      placeholder="Enter Your Department Name"
                      value={values.department}
                      className={
                        "input-style" ||
                        (errors.department && touched.department && "error")
                      }
                    />
                    {errors.department && touched.department && (
                      <div className="input-feedback">{errors.department}</div>
                    )}
                    <label htmlFor="qualification">Qualification</label>
                    <br />
                    <br />
                    <Field
                      name="qualification"
                      placeholder="Enter Your Qualification"
                      value={values.qualification}
                      className={
                        "input-style" ||
                        (errors.qualification &&
                          touched.qualification &&
                          "error")
                      }
                    />
                    {errors.qualification && touched.qualification && (
                      <div className="input-feedback">
                        {errors.qualification}
                      </div>
                    )}
                    <label htmlFor="specialization">Specialization</label>
                    <br />
                    <br />
                    <Field
                      name="specialization"
                      placeholder="Enter Your Specialization"
                      value={values.specialization}
                      className={
                        "input-style" ||
                        (errors.specialization &&
                          touched.specialization &&
                          "error")
                      }
                    />
                    {errors.specialization && touched.specialization && (
                      <div className="input-feedback">
                        {errors.specialization}
                      </div>
                    )}
                    <div className="centered">
                      <button type="submit" disabled={isSubmitting}>
                        Save
                      </button>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileValidation;
