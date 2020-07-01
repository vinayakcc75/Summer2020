import React from "react";
import "./PatientHistory.css";
import RecordsList from "./RecordsList";

const arr = ["Cardilogy", "Gynaecology", "General"];

class PatientHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pat_id: "" };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }
  handleSearch(e) {
    //fetch data from api with the user id corresponding to pat_id
    console.log(this.state.pat_id);
  }

  render() {
    return (
      <div className="patient-history">
        <div className="centered">
          <h1>Patient History</h1>
        </div>
        {
          <div className="patient-history-search">
            <div className="centered">
              <div>
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
          </div>
        }
        <div>
          <RecordsList data={arr} />
        </div>
      </div>
    );
  }
}

export default PatientHistory;
