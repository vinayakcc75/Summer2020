import React from "react";
import "./Records.css";
//import x from "../icons8-x-50.png";
import RecordDetails from "./../../Doctor View/Views/RecordsList";

const arr = ["Cardilogy", "Gynaecology", "General"];

class Records extends React.Component {
  componentDidMount() {
    fetch("http://localhost:8080/medical_records", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: this.props.user.user_id,
      }),
    })
      .then((response) => response.json())
      .then(async (ret) => {
        if (ret.status === true) {
          // this.docArr="";
          // await(this.setState({docArr: ret.message}));
          // doctorsArray=[];
          // await(this.state.docArr.map((arr)=>{doctorsArray.push(arr.doctor)}))}
          // this.setState({now:true})
        } else {
          console.log(ret);
        }
      });
  }

  render() {
    return (
      <div>
        <div className="med-hist">
          <h1>Your Medical History</h1>
          <div>
            <div className="filter">
              <h3>Filter section</h3>
            </div>
            <div>
              <RecordDetails data={arr} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Records;
