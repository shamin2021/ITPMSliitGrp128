import logo from '../logo.svg';
import Menus from '../Components/Menus';
import Menu2 from '../Components/Menu2';
import Footer from '../Components/Footer';
import StarIcon from '@mui/icons-material/Star';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import FileBase64 from 'react-file-base64';

function EventsChallengePg() {

    const [EmailAddress, setEmailAddress] = useState("");
    const [DateEvent, setDateEvent] = useState("");
    const [EventType, setEventType] = useState("");
    const [Description, setDescription] = useState("");
    const [ExpectedParticipants, setExpectedParticipants] = useState("");
    const [RequiredItems, setRequiredItems] = useState("");
    const [Notes, setNotes] = useState("");
    const [EventPhoto, setEventPhoto] = useState("");
    const UserID = "100";


    function sendData(e){

        e.preventDefault();
        
        const newEvent ={
            UserID,
            EmailAddress,
            DateEvent,
            EventType,
            Description,
            ExpectedParticipants,
            RequiredItems,
            Notes,
            EventPhoto,
        }

       axios.post("http://localhost:8070/Events/add",newEvent).then(()=>{
           alert("Event Added")
           
       }).catch((err)=>{
           alert(err)
       })

    }

  return (
    <div className="App">
      <Menus/>
      <Menu2/>
      
      <div className="moreInfo-reviews" id="add-Events">
        

        <div className = "moreInfo-custReview" id="add-Events" >

          <div className = "add-Event">
            <div className="review-content" id="add-title">Add an Event</div>

            <div className="add-review">
              <form onSubmit={sendData} className="exam">
                <Form.Label id="addEvent" >Email address</Form.Label>
                <Form.Control type="email" id="addEvent" placeholder="name@example.com" 
                onChange={(e) => {
                    setEmailAddress(e.target.value);
                  }}/>

                <Form.Label id="addEvent" >Date</Form.Label>
                <Form.Control type="date" id="addEvent" placeholder="date" onChange={(e) => {
                    setDateEvent(e.target.value);
                  }} />

                <Form.Label id="addEvent" >Event Type</Form.Label>
                <Form.Control type="text" id="addEvent" placeholder="type" onChange={(e) => {
                    setEventType(e.target.value);
                  }} />

                

                <Form.Label id="addEvent" >Description </Form.Label>
                <Form.Control type="text" id="addEvent-descript" placeholder="date" onChange={(e) => {
                    setDescription(e.target.value);
                  }} />

                <div className = "extraDetails">
                  
                  <div className='details'>
                    <Form.Label id="addEvent" >Expected Participants</Form.Label>
                    <Form.Control type="number" id="addEvent-extra" placeholder="date" onChange={(e) => {
                    setExpectedParticipants(e.target.value);
                  }}/>
                  </div>
                  <div className='details'>
                    <Form.Label id="addEvent" >Required Items</Form.Label>
                    <Form.Control type="text" id="addEvent-extra" placeholder="date" onChange={(e) => {
                    setRequiredItems(e.target.value);
                  }} />
                  </div>
                  <div className='details'>
                    <Form.Label id="addEvent" >Notess</Form.Label>
                    <Form.Control type="text" id="addEvent-extra" placeholder="date" onChange={(e) => {
                    setNotes(e.target.value);
                  }} />
                  </div>
                </div>

                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Label id="addEvent" >Choose Images</Form.Label>
                  <FileBase64 
                  multiple={false}
                  onDone={({ base64 }) => setEventPhoto(base64)}
                />
                </Form.Group>
                
                <Button variant="primary" id ="add-event-submit" type="submit">
                  <div className = "btn-title" id="footer">
                    Contact Us
                  </div>
                </Button>{' '}
              </form>
            </div>
            
          </div>

        </div>
      </div>

      <Footer/>
      </div>
  );
}

export default EventsChallengePg;
