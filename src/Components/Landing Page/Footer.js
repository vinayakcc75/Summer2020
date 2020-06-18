import Navbar from './Navbar/Navbar';
import React from 'react';
import  { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

class Footer extends Component {
    constructor(){
        super();
    }
    foot=()=>{
        return(
        <footer className="foot">
            <p>CONTACT US</p>
            <p className="contactus">
                        Telephone : +21 2289373, +21 2341245<br/>
                        Email : hospital@gmail.com<br/>
                        Address : Delhi, India<br/>
            </p>
        </footer>)
    }
    render() {
        return (
        <Fragment>
            {this.props.location.pathname!=='/bookslot'&&this.foot}
        </Fragment>
        )
    }
}

export default withRouter(Footer);
