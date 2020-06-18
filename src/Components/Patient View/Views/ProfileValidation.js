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
      <div className="valid-profile">
        <Formik
          initialValues={this.props.data}
          onSubmit={(values, { setSubmitting }, cb = this.props.toggle) => {
            setTimeout(() => {
              console.log("Saved ", values);
            }, 500);
            cb(values);
          }}
          validationSchema={Yup.object().shape({
            fname: Yup.string().required("Required"),
            lname: Yup.string().required("Required"),
            gender: Yup.string().required("Required"),
            dob: Yup.date().required("Required"),
            email: Yup.string().email().required("Required"),
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
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  name="fname"
                  value={values.fname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Your First Name"
                  className={errors.fname && touched.fname && "error"}
                />
                {errors.fname && touched.fname && (
                  <div className="input-feedback">{errors.fname}</div>
                )}
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  value={values.lname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Your Last Name"
                  className={errors.lname && touched.lname && "error"}
                />
                {errors.lname && touched.lname && (
                  <div className="input-feedback">{errors.lname}</div>
                )}
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
                          className={errors.gender && touched.gender && "error"}
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
                          className={errors.gender && touched.gender && "error"}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                {errors.gender && touched.gender && (
                  <div className="input-feedback">{errors.gender}</div>
                )}
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Your Date Of Birth"
                  className={errors.dob && touched.dob && "error"}
                />
                {errors.dob && touched.dob && (
                  <div className="input-feedback">{errors.dob}</div>
                )}
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Your email"
                  className={errors.email && touched.email && "error"}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
                <button type="submit" disabled={isSubmitting}>
                  Save
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default ProfileValidation;
