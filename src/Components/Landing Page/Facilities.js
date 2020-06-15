import React from 'react';
import './AboutUs.css';

const Facilities =()=>{
    return(
        <div className='head'>
            Facilities
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
 