import { useState } from 'react'
import { Button, Form, Nav } from 'react-bootstrap';

function Login(props) {
    let [enteredUser, setEnteredUser] = useState('')

    return (
        <Form className='login-form' onSubmit={(e) => props.handleEnteredUser(e, entered)}>
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
                    <Form.Control type="password" placeholder="Enter password"/>
                </Form.Group>
                <Button className='submitButton' type="submit" variant="primary" onClick={function(e){
                    props.handleEnteredUser(e, enteredUser)
                    console.log("onClick")
                    console.log(enteredUser)
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