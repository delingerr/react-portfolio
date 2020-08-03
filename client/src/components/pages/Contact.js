import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Contact = () => (
  <div>
    <Jumbotron>
      <h3 className="contact">Contact/Leave Feedback</h3>
      <Container>
        <form>
          <div class="form-group">
            <label>Name</label>
            <input
              class="form-control"
              id="name"
              type="text"
              placeholder="Name"
              required="required"
              data-validation-required-message="Please enter your name."
            />
          </div>
          <div class="form-group">
            <label>Email Address</label>
            <input
              class="form-control"
              id="email"
              type="email"
              placeholder="Email Address"
              required="required"
              data-validation-required-message="Please enter your email address."
            />
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea
              class="form-control"
              id="message"
              rows="5"
              placeholder="Message"
              required="required"
              data-validation-required-message="Please enter a message."
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-xl">
            Send
          </button>
        </form>
      </Container>
    </Jumbotron>
  </div>
);

export default Contact;
