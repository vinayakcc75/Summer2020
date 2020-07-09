import * as Yup from "yup";
import { Formik, Field } from "formik";
import React from "react";
import "./ProfileValidation.css";

class ProfileValidation extends React.Component {
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
        //console.log(this.state);
      });
  };
  render() {
    {
      console.log(this.props.values);
    }
    return (
      <div className="valid-profile-wraper">
        <div className="valid-profile">
          <div className="valid-profile-centered">
            <h2>Edit Details</h2>
          </div>
          <Formik
            initialValues={this.props.values}
            onSubmit={(values, { setSubmitting }, cb = this.props.toggle) => {
              setSubmitting(true);
              console.log("Saved ", values);
              //Connecting to Backend
              //this.submit();
              cb(values);
              setSubmitting(false);
            }}
            validationSchema={Yup.object().shape({
              fname: Yup.string().required("Required"),
              lname: Yup.string().required("Required"),
              gender: Yup.string().required("Required"),
              dob: Yup.date().required("Required"),
              experience: Yup.string().required("Required"),
              address: Yup.string().required("Required"),
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
                    defaultChecked={values.gender === "M"}
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
                    defaultChecked={values.gender === "F"}
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
                  <label htmlFor="experience">Experience</label>
                  <br />
                  <br />
                  <Field
                    type="text"
                    name="experience"
                    value={values.experience}
                    placeholder="Enter Your experience"
                    className={
                      "input-style" ||
                      (errors.experience && touched.experience && "error")
                    }
                  />
                  <br />
                  <br />
                  {errors.experience && touched.experience && (
                    <div className="input-feedback">{errors.experience}</div>
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
                  <label htmlFor="qualification">Qualification</label>
                  <br />
                  <br />
                  <Field
                    name="qualification"
                    placeholder="Enter Your Qualification"
                    value={values.qualification}
                    className={
                      "input-style" ||
                      (errors.qualification && touched.qualification && "error")
                    }
                  />
                  <br />
                  <br />
                  {errors.qualification && touched.qualification && (
                    <div className="input-feedback">{errors.qualification}</div>
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
                  <br />
                  <br />
                  {errors.specialization && touched.specialization && (
                    <div className="input-feedback">
                      {errors.specialization}
                    </div>
                  )}
                  <div className="valid-profile-centered">
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
    );
  }
}

export default ProfileValidation;
