import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';

const API_BASE = "http://localhost:3003"

function AddGig(props) {
    let [newTime, setNewTime] = useState('')
    let [newDate, setNewDate] = useState('')
    let [newState, setNewState] = useState('')
    let [newCity, setNewCity] = useState('')
    let [newPlace, setNewPlace] = useState('')
    let [newGig, setNewGig] = useState('')


    function addGig() {
    if(newGig) {
        const fetchData = async () => {
            const response = await fetch(API_BASE + "/gig", {
                method: "POST",
                headers: {
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({date: "newDate", start_time: 'newTime', name: 'newPlace'})
            });
            const content = await response.json();
            console.log(content);
            if (content.id != null) {
                setNewDate(content)
                setNewTime(content)
                setNewCity(content)
                setNewState(content)
                setNewPlace(content)
                return content
            } else {
                console.log('Not Found')
            }
        }
        fetchData()
    } }

    return (
    <Form className='login-form'>
        <div className="form-inner">
            <h2>Add a Performance</h2>
            <Form.Group className="mb-3" controlId='formBasicDate'>
                <Form.Label>Enter Date:</Form.Label>
                <Form.Control type="date" placeholder="Enter a date"
                onChange={
                    function(e){
                        console.log("Did it go here")
                        setNewDate(e.target.value)
                    }}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId='formBasicGig'>
                <Form.Label>Enter a Place:</Form.Label>
                <Form.Control type="text" placeholder="Enter a place"
                    onChange={
                        function(e){
                            console.log("Did it go here")
                            setNewPlace(e.target.value)
                        }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId='formBasicTime'>
                <Form.Label>Enter a Time:</Form.Label>
                <Form.Control type="text" placeholder="Enter a time"
                    onChange={
                        function(e){
                            console.log("Did it go here")
                            setNewTime(e.target.value)
                        }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId='formBasicCity'>
                <Form.Label>Enter a City:</Form.Label>
                <Form.Control type="text" placeholder="Enter a city"
                onChange={
                    function(e){
                        console.log("Did it go here")
                        setNewCity(e.target.value)
                    }}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId='formBasicState'>
                <Form.Label>Enter a State:</Form.Label>
                <Form.Control type="state" placeholder="Enter a state"
                onChange={
                    function(e){
                        console.log("Did it go here")
                        setNewState(e.target.value)
                    }}/>
            </Form.Group>
            <Button className="submitButton" type="submit" variant="primary" onClick={function(e){
                const res = addGig()
                console.log(res)
                if (res != null) {
                    props.handleNewGig(e, newGig)
                    console.log("onClick")
                    console.log(newGig)
                }
                    }}>Submit<Nav.Link className="link" to="/Performances"></Nav.Link>
            </Button>
        </div>
    </Form>
    )
}

export default AddGig