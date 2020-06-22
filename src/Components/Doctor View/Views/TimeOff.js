import React from 'react';
import './TimeOff.css'
class TimeOff extends React.Component{
    constructor(){
        super();
        this.state={
            fromdate:new Date(),
            todate:new Date()
        }
    }
    fromdateChange=(event)=>{
        this.setState({fromdate:event.target.value});
    }
    todateChange=(event)=>{
        this.setState({todate:event.target.value});
    }
    display=()=>{
        console.log(this.state.fromdate," ",this.state.todate);
    }
    render()
{    return(
        <div className='time'>
            <br/>
            <h1>Request Time off</h1><br/><br/><br/>
            <label htmlFor="fromdate">From Date</label>
            : <input onChange={this.fromdateChange}
            type="date" placeholder="From date"></input><br/><br/><br/>
            <label htmlFor="todate">To Date</label>
            : <input onChange={this.todateChange}
            type="date" placeholder="To date"></input><br/><br/><br/>
            <button onClick={this.display}>Submit</button>
        </div>
    );}
}
export default TimeOff; 