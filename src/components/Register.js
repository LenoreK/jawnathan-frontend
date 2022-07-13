import React from 'react';
import { useState } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';

function Register(props) {
    let [newUser, setNewUser] = useState('')
    let [newPassword, setNewPassword] = useState('')
          // Find Exisiting Users
  useEffect(() => {
    if(newUser) {
        const fetchData = async () => {
            const response = await fetch(`https://localhost:3003/`, {
                method: "POST",
                headers: {
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: "newUser", password: 'newPassword'})
            });
            const content = await rawResponse.json();
            console.log(content);
        }
        const resData = await response.json()
        if (resData.id != null) {
            setNewUser(resData)
        } else {
            setMessage('Not Found')
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
                        setEnteredUser(e.target.value)
                    }
                }/>
            </Form.Group>
            <Form.Group className="mb-3" controlId='formBasicPassword'>
                <Form.Label>Create Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>
            </Form.Group>
            <Button className="submitButton" type="submit" variant="primary" onClick={function(e){
                    props.handleNewUser(e, enteredUser)
                    console.log("onClick")
                    console.log(enteredUser)
                    }}>Submit<Nav.Link className="link" to="/Profile"></Nav.Link>
            </Button>
        </div>
    </Form>
    )
}

export default Register