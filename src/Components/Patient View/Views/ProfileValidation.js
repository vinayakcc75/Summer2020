import * as Yup from "yup";
import { Formik, Field } from "formik";
import React from "react";
import "./ProfileValidation.css";

class ProfileValidation extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="profile-validation-popup">
        <div className="valid-profile-wraper">
          <div className="valid-profile">
            <div className="centered">
              <h2>Edit Details</h2>
            </div>
            <Formik
              initialValues={this.props.data}
              onSubmit={(values, { setSubmitting }, cb = this.props.toggle) => {
                setSubmitting(true);
                setTimeout(() => {
                  console.log("Saved ", values);
                }, 500);
                cb(values);
                setSubmitting(false);
              }}
              validationSchema={Yup.object().shape({
                fname: Yup.string().required("Required"),
                lname: Yup.string().required("Required"),
                gender: Yup.string().required("Required"),
                dob: Yup.date().required("Required"),
                email: Yup.string().email().required("Required"),
                address: Yup.string().required("Required"),
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
                    <label htmlFor="fname">First Name</label>
                    <br />
                    <br />
                    <Field
                      type="text"
                      name="fname"
                      value={values.fname}
                      placeholder="Enter Your First Name"
                      className={
                        "input-style" ||
                        (errors.fname && touched.fname && "error")
                      }
                    />
                    <br />
                    <br />

                    {errors.fname && touched.fname && (
                      <div className="input-feedback">{errors.fname}</div>
                    )}

                    <label htmlFor="lname">Last Name</label>
                    <br />
                    <br />
                    <Field
                      type="text"
                      name="lname"
                      value={values.lname}
                      placeholder="Enter Your Last Name"
                      className={
                        "input-style" ||
                        (errors.lname && touched.lname && "error")
                      }
                    />
                    <br />
                    <br />
                    {errors.lname && touched.lname && (
                      <div className="input-feedback">{errors.lname}</div>
                    )}

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
