import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './BookingForm.css';

const BookingForm = (props) => {

  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {

        const patientData = {
          name: data.name,
          gender: data.gender,
          time: data.time,
          phoneNumber: data.phone,
          email: data.email


        }
    
        fetch('http://localhost:4000/patientData', {
          method: 'POST',
          body: JSON.stringify(patientData),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then(response => response.json())
          .then(data => console.log("post successful", data))
  }

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Patient Information
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="infoForm" onSubmit={handleSubmit(onSubmit)}>
            <input name="name" ref={register} placeholder="Enter your name" />
            {errors.name && <span>This name is required</span>}
            <select name="gender" ref={register}>
              <option>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <select name="time" ref={register}>
              <option>Time</option>
              <option value="9.30am">9.30am</option>
              <option value="4.30am">4:30pm</option>
            </select>
            <input name="phone" ref={register} placeholder="enter phone number" />
            {errors.phone && <span>This phone number is required</span>}
            <input name="email" ref={register} placeholder="enter email address" />
            {errors.email && <span>This email is required</span>}
            <input type="submit" />
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default BookingForm;