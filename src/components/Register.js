import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';

const API_BASE = "http://localhost:3003"

function Register(props) {
    let [newUser, setNewUser] = useState('')
    let [newPassword, setNewPassword] = useState('')
    let [newEmail, setNewEmail] = useState('')

    // Register a User
    function registerUser() {
    if(newUser) {
        const fetchData = async () => {
            const response = await fetch(API_BASE + "/user", {
                method: "POST",
                headers: {
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user_name: "newUser", password: 'newPassword', email: 'newEmail'})
            });
            const content = await response.json();
            console.log(content);
            if (content.id != null) {
                setNewUser(content)
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
            <h2>Register</h2>
            <Form.Group className="mb-3" controlId='formBasicEmail'>
                <Form.Label>Enter Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUser">
                <Form.Label>Create Username:</Form.Label>
                <Form.Control type='text' placeholder="Enter username"
                onChange={
                    function(e){
                        console.log("Did it go here")
                        setNewUser(e.target.value)
                    }
                }/>
            </Form.Group>
            <Form.Group className="mb-3" controlId='formBasicPassword'>
                <Form.Label>Create Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter password"
                onChange={(e) => {
                    setNewPassword(e.target.value)
                }}/>
            </Form.Group>
            <Button className="submitButton" type="submit" variant="primary" onClick={function(e){
                const res = registerUser()
                console.log(res)
                if (res != null) {
                    props.handleNewUser(e, newUser)
                    console.log("onClick")
                    console.log(newUser)
                }
                    }}>Submit<Nav.Link className="link" to="/Profile"></Nav.Link>
            </Button>
        </div>
    </Form>
    )
}

export default Register