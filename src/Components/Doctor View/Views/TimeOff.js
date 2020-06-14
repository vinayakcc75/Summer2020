import React from 'react';
import './TimeOff.css'
const TimeOff =()=>{
    return(
        <div className='time'>
            <br/>
            <h1>Take Time off</h1><br/><br/><br/>
            <input type="date" placeholder="From date"></input><br/><br/><br/>
            <input type="date" placeholder="To date"></input><br/><br/><br/>
            <button>Submit</button>
        </div>
    );
}
export default TimeOff; 