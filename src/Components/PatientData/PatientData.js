import React,{useState} from 'react';
import Sidebar from '../Dashboard/Sidebar';
import {Button } from 'react-bootstrap';

const PatientData = () => {

    const [data, setData] = useState([]);


    fetch ('https://mysterious-spire-59017.herokuapp.com/data')
    .then (res => res.json())
    .then(data => {
        console.log(data)
        setData(data)
    })
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
            {<Sidebar></Sidebar>}

            </div>
            <div className="col-md-9">
            <table className="table table-borderless  ">
            <thead>
                <tr>
            
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Gender</th>
                <th className="text-secondary" scope="col">Time</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Prescription</th>
                <th className="text-secondary" scope="col">Action</th>

                </tr>
            </thead>
            <tbody>
                {
                  data.map(patient => 
                        
                    <tr>
                        
                        <td>{patient.name}</td>
                        <td>{patient.gender}</td>
                        <td>{patient.time}</td>
                        <td>{patient.phoneNumber}</td>
                        <td>{patient.email}</td>
                        <td><Button className="btn btn-primary">View</Button></td>
                        <td><Button className="btn btn-danger">Delete</Button></td>
                    </tr>
                    )
                }
            
                
            </tbody>
        </table>

            </div>
        </div>
        
            
        </div>
    );
};

export default PatientData;