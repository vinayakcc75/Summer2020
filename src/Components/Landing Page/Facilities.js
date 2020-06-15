import React from 'react';
import './AboutUs.css';
import './Facilities.css';
import ultraScan from './assets/ctscan.jpg';
import bloodCheck from './assets/blood-check.jfif' ;
import gyno from './assets/gyno.jfif';
import cardio from './assets/cardio.jfif';
import dental from './assets/dental.jfif';
import xray from './assets/xray.jpg';


function FacilityDetails(props){
    return(
      <div className="facility-card">
          <img src={props.image} alt="facility"/>
          <h3>{props.heading}</h3>
      </div>
    );
}
  

const Facilities =()=>{
    return(
        <div className='head'>
            <div className="facility-wraper">
                <div className="facility-main">
                    <h1>Facilities</h1>
                    <table>
                        <tr>
                            <td><FacilityDetails image={bloodCheck} heading="Blood Test"/></td>
                            <td><FacilityDetails image={cardio} heading="Cardio Lab"/></td>    
                            <td><FacilityDetails image={gyno} heading="Gyno Lab"/></td> 
                        </tr>
                        <tr>
                            <td><FacilityDetails image={ultraScan} heading="Ultra Scanning"/></td>  
                            <td><FacilityDetails image={dental} heading="Dental Lab"/></td> 
                            <td><FacilityDetails image={xray} heading="X-ray Scanning"/></td> 
                        </tr>
                    </table>
                </div>
            </div>
        <footer style={{
        "backgroundColor": "black",
        "color":"white",
        "height":"200px",
        "position":"absolute",
        "width":"100%",
        "bottom":"0",
        "left":"0"}} className="foot">
            <p style={{ 'fontWeight': "bold"}}>CONTACT US</p>
            <p style={{ 'fontWeight': "bold"}} className="contactus">
                        Telephone : +21 2289373, +21 2341245<br/>
                        Email : hospital@gmail.com<br/>
                        Address : Delhi, India<br/>
            </p>
        </footer>
        </div>
    );
}
 export default Facilities; 
 