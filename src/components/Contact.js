import React from "react";
import Button  from 'react-bootstrap/Button';

function Contact() {
    return (
        <div className="contact">
            <header>
                <h2 className="about-header">Contact</h2>
            </header>
            <form>
                <p className="h4 text-center mb-4">Write to us</p>
                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                    Your name
                </label>
                <input type="text" id="defaultFormContactNameEx" className="form-control" />
                <br />
                <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                    Your email
                </label>
                <input type="email" id="defaultFormContactEmailEx" className="form-control"/>
                <br />
                <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                    Subject
                </label>
                <input type="text" id="defaultFormContactSubjectEx" className="form-control"/>
                <br />
                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                    Your message
                </label>
                <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                <div className="text-center mt-4">
                    <Button variant="outline-warning" type="submit" size="lg">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default Contact