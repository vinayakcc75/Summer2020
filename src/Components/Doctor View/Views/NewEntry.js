import React from "react";
import "./NewEntry.css";

class NewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientId: "",
      patientName: "",
      prescription: "",
      diagnosis: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    console.log("Requested");
    fetch("http://localhost:8080/save_medicalrecords", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    console.log("Saved");
    this.setState({
      patientId: "",
      patientName: "",
      prescription: "",
      diagnosis: "",
    });
  }
  render() {
    return (
      <div className="entry">
        <br />
        <h1>New Entry</h1>
        <form onSubmit={this.handleSubmit}>
          <br />
          <br />
          <label htmlFor="patient id">Patient Id</label>:{" "}
          <input
            type="number"
            name="patientId"
            value={this.state.patientId}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <br />
          <label htmlFor="patient name">Patient Name</label>:{" "}
          <input
            type="text"
            name="patientName"
            value={this.state.patientName}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <br />
          <label htmlFor="patient id">Diagnosis</label>:{" "}
          <input
            className="span"
            contentEditable="true"
            name="prescription"
            value={this.state.prescription}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <br />
          <label htmlFor="prescription">Prescription</label>:{" "}
          <input
            className="span"
            contentEditable="true"
            name="diagnosis"
            value={this.state.diagnosis}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default NewEntry;
