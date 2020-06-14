import React from 'react';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import PatientHistory from './Views/PatientHistory';
import Profile from './Views/Profile';
import NewEntry from './Views/NewEntry';
import TimeOff from './Views/TimeOff';
import './DoctorView.css';
class DoctorView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            baropen:false
        }
    }
    openBar=()=>{
        this.setState({baropen:!this.state.baropen})
    }
    welcome=()=>{
        return(
        <div className="welcome">
            <br/><br/>
        <h3>WELCOME Doctor!</h3>
        </div>
    )}
    render(){
        return(
            <div>
                <Router>
                <Sidebar openBar={this.openBar} baropen={this.state.baropen}/>
                <Switch>
                    <Route  path='/doctor/:id' component={this.welcome}></Route>
                    <Route  path='/docprofile' render={()=><Profile user={this.props.user}/>}></Route>
                    <Route  path='/timeoff' component={TimeOff}></Route>
                    <Route  path='/newentry' component={NewEntry}></Route>
                    <Route  path='/patienthistory' component={PatientHistory}></Route>
                </Switch>
                </Router>
            </div>
        )
    }
}

export default DoctorView;