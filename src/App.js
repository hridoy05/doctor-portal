import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Body from './Components/Body/Body';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Appointment from './Components/Appointment/Appointment';
import PatientData from './Components/PatientData/PatientData';


function App() {
  return (

    <Router>

      <div className="App">

        <Switch>

          <Route exact path="/">

            <Header></Header>

            <Body></Body>

          </Route>
          <Router path="/appointment">
            <Appointment></Appointment>
          </Router>
          <Router path="/dashboard">
          <PatientData></PatientData>
          </Router>
          

        </Switch>

      </div>

    </Router>
  );
}

export default App;
