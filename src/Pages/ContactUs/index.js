// Page created by Priya Thakur (8958634)

import React, { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    toast.success("Form submitted! We will get back to you soon.");
    reset();
  };

  return (
    <main className="container my-5 contact-us-page">
      <div className="row">
        <div className="col-md-12">
          <h1 className="mb-4 text-center">Contact Us</h1>
          <p>
            If you have any questions or need assistance, feel free to reach out
            to us using the form below:
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <div className="form-group">
                <label className="mb-1">First Name</label>
                <div className="textfield-block">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your first name"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                  />
                  {errors?.firstName && (
                    <span className="error-msg">
                      {errors?.firstName?.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-group">
                <label className="mb-1">Last Name</label>
                <div className="textfield-block">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your last name"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                  />
                  {errors?.lastName && (
                    <span className="error-msg">
                      {errors?.lastName?.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-group">
                <label className="mb-1">Email Address</label>
                <div className="textfield-block">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter the login email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors?.email && (
                    <span className="error-msg">{errors?.email?.message}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-group">
                <label className="mb-1">Message</label>
                <div className="textfield-block">
                  <textarea
                    className="form-control"
                    type="text"
                    placeholder="Enter message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  ></textarea>
                  {errors?.message && (
                    <span className="error-msg">
                      {errors?.message?.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <Button type="submit" className="apply-filter">
              Submit
            </Button>{" "}
          </form>

          <h2 className="mt-5 text-center">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>How can I contact support?</Accordion.Header>
              <Accordion.Body>
                You can contact us by filling out the form above, and our
                support team will get back to you as soon as possible.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What is your response time?</Accordion.Header>
              <Accordion.Body>
                Our average response time is within 24 hours, but we try to get
                back to you as quickly as possible.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Do you offer 24/7 support?</Accordion.Header>
              <Accordion.Body>
                Currently, our support hours are from 9 AM to 6 PM, Monday
                through Friday. We are closed on weekends and holidays.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Can I track my inquiry?</Accordion.Header>
              <Accordion.Body>
                Yes, once you submit your inquiry, you will receive a tracking
                number in your confirmation email. You can use this number to
                track the status of your inquiry.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
