import * as Yup from "yup";
import { Formik } from "formik";
import React from "react";
import "./ProfileValidation.css";

class ProfileValidation extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="valid-profile-wraper">
        <div className="valid-profile">
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
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;
              return (
                <form autoComplete="off" onSubmit={handleSubmit}>
                  <div className="label-style">
                    <label htmlFor="fname">First Name</label>
                  </div>
                  <div className="input-style">
                    <input
                      type="text"
                      name="fname"
                      value={values.fname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your First Name"
                      className={errors.fname && touched.fname && "error"}
                    />
                  </div>

                  {errors.fname && touched.fname && (
                    <div className="input-feedback">{errors.fname}</div>
                  )}

                  <div className="label-style">
                    <label htmlFor="lname">Last Name</label>
                  </div>
                  <div className="input-style">
                    <input
                      type="text"
                      name="lname"
                      value={values.lname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Last Name"
                      className={errors.lname && touched.lname && "error"}
                    />
                  </div>
                  {errors.lname && touched.lname && (
                    <div className="input-feedback">{errors.lname}</div>
                  )}

                  <div className="input-style">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <label htmlFor="male">Male</label>
                          </td>
                          <td width="20px" />
                          <td>
                            <input
                              type="radio"
                              name="gender"
                              value="Male"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                errors.gender && touched.gender && "error"
                              }
                              defaultChecked={values.gender === "Male"}
                            />
                          </td>
                          <td width="30px" />
                          <td>
                            <label htmlFor="female">Female</label>
                          </td>
                          <td width="20px" />
                          <td>
                            <input
                              type="radio"
                              name="gender"
                              value="Female"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                errors.gender && touched.gender && "error"
                              }
                              defaultChecked={values.gender === "Female"}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="label-style">
                    <label htmlFor="dob">Date of Birth</label>
                  </div>
                  <div className="input-style">
                    <input
                      type="date"
                      name="dob"
                      value={values.dob}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Date Of Birth"
                      className={
                        errors.dob && touched.dob && "error" && "input-style"
                      }
                    />
                  </div>

                  {errors.dob && touched.dob && (
                    <div className="input-feedback">{errors.dob}</div>
                  )}

                  <div className="label-style">
                    <label htmlFor="email">Email</label>
                  </div>

                  <div className="input-style">
                    <input
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your email"
                      className={errors.email && touched.email && "error"}
                    />
                  </div>
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                  <div className="label-style">
                    <label htmlFor="address">Address</label>
                  </div>
                  <div className="input-style">
                    <textarea
                      name="address"
                      rows="7"
                      cols="40"
                      placeholder="Enter Your Address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.address && touched.address && "error"}
                    />
                  </div>
                  {errors.address && touched.address && (
                    <div className="input-feedback">{errors.address}</div>
                  )}
                  <div className="block">
                    <div>
                      <button type="submit" disabled={isSubmitting}>
                        Save
                      </button>
                    </div>
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
