import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { Button } from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';
import  BookingForm from  '../BookingForm/BookingForm';
import './Appointment.css';
const Appointment = () => {

    const [appointments, setAppointments] = useState([])

    const [date, setDate] = useState(new Date());
    const [modalShow, setModalShow] = useState(false);
    const handleChange = (date) => {
        setDate(date);
    }

    useEffect(() => {
        fetch('https://mysterious-spire-59017.herokuapp.com/cart')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAppointments(data)
            })


    }, [])
    return (
        <div className="container">
            <div className="mt-5 calenderContainer" >
                <Calendar
                    onChange={handleChange}
                    value={date}
                />
            </div>
            <div className="text-center mt-5 ">
                {/* {date.toString()} */}
            </div>
            <div className="row mt-5">
                {
                    appointments.map(appointment => 
                        <div className="col-md-4 mb-4">
            
                           <div className="card text-center">
                              <div key ={appointment.id} className="card-body appointmentBody">
                                   <h5>{appointment.name}</h5>
                                   <p>{appointment.Time}</p>
                                  <Button className="btnAppointment"  onClick={() => setModalShow(true)}>
                                    Booking button
                                  </Button>    
                               </div>
                            </div>

                        </div>
                    
                    
                    )
                }

                <BookingForm
                    show={modalShow}
                    onHide={() => setModalShow(false)}

                />
            </div>

        </div>
    );
};

export default Appointment;