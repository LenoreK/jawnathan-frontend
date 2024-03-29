import { useState, useEffect } from 'react'
import { Button, Form, Nav } from 'react-bootstrap';

const API_BASE = "http://localhost:3003"

function Login(props) {
    let [enteredUser, setEnteredUser] = useState('')
    let [enteredPassword, setEnteredPassword] = useState('')

      // Find Exisiting Users - It's a put request because it is JSON
  useEffect(() => {
    if(enteredUser) {
        const fetchData = async () => {
            const response = await fetch(API_BASE + "/user/:id", {
                method: "POST",
                headers: {
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: "enteredUser", password: 'enteredPassword'})
            });
            const content = await Response.json();
            console.log(content);
        }
        const resData = Response.json()
        if (resData.id != null) {
            setEnteredUser(resData)
        } else {
            console.log('Not Found')
        }
        fetchData()
    }}, [enteredUser])

    return (
        <Form className='login-form' onSubmit={(e) => props.handleEnteredUser(e, enteredUser)}>
            <div className="form-inner">
                <h2>Login</h2>
                {/* Error */}
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type='text' placeholder="Enter username"
                    onChange={
                    (e) => {
                        console.log("Did it go here")
                        setEnteredUser(e.target.value)
                    }
                }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formBasicPassword'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter password"
                    onChange={
                        (e) => {
                            setEnteredPassword(e.target.value)
                        }}
                        />
                </Form.Group>
                <Button className='submitButton' type="submit" variant="primary" onClick={function(e){
                    props.handleEnteredUser(e, enteredUser)
                    props.handleEnteredPassword(e, enteredPassword)
                    console.log("onClick")
                    console.log(enteredUser)
                    console.log(enteredPassword)
                    }}>Submit
                    <Nav.Link className='link' to="/"></Nav.Link>
                </Button>
            <br />
            <Nav.Link className="Register" to="/Register">Register</Nav.Link>                   
        </div>
    </Form>
    )
}

export default Login