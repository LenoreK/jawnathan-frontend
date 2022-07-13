import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';

function Register(props) {
    let [newUser, setNewUser] = useState('')
    let [newPassword, setNewPassword] = useState('')
    let [newEmail, setNewEmail] = useState('')

          // Login a User
  useEffect(() => {
    if(newUser) {
        const fetchData = async () => {
            const response = await fetch(`https://localhost:3003/`, {
                method: "POST",
                headers: {
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: "newUser", password: 'newPassword', email: 'newEmail'})
            });
            const content = await Response.json();
            console.log(content);
        }
        const resData = Response.json()
        if (resData.id != null) {
            setNewUser(resData)
        } else {
            console.log('Not Found')
        }
        fetchData()
    }}, [newUser])

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
                    props.handleNewUser(e, newUser)
                    console.log("onClick")
                    console.log(newUser)
                    }}>Submit<Nav.Link className="link" to="/Profile"></Nav.Link>
            </Button>
        </div>
    </Form>
    )
}

export default Register