import React from "react";
import "./PatientHistory.css";
import SimpleRecord from "../../Patient View/Views/SimpleRecord";

class PatientHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pat_id: "" };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSearch(e) {
    console.log(this.state.pat_id);
  }

  render() {
    return (
      <div className="patient-history-wraper">
        <div className="patient-history">
          <div className="patient-history-search">
            <div className="centered">
              <input
                type="text"
                name="pat_id"
                value={this.state.pat_id}
                placeholder="Enter Patient Id"
                onChange={this.handleChange.bind(this)}
              />
              <button onClick={this.handleSearch.bind(this)}>Search</button>
            </div>
          </div>
          <div>
            <SimpleRecord />
          </div>
        </div>
      </div>
    );
  }
}

export default PatientHistory;
