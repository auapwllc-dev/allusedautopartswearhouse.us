"use client"

import { useState } from "react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="form-success" role="status">
        Thank you! Your request has been received. A parts specialist will reach out within 2 business hours.
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="first_name">First Name *</label>
          <input type="text" id="first_name" name="first_name" required placeholder="John" />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name *</label>
          <input type="text" id="last_name" name="last_name" required placeholder="Smith" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" required placeholder="you@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="(555) 555-5555" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="vehicle">Vehicle (Year / Make / Model)</label>
        <input type="text" id="vehicle" name="vehicle" placeholder="e.g., 2018 Toyota Camry" />
      </div>
      <div className="form-group">
        <label htmlFor="part_needed">Part(s) Needed *</label>
        <input
          type="text"
          id="part_needed"
          name="part_needed"
          required
          placeholder="e.g., Engine 2.5L, Front bumper, Left door panel"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Additional Notes or Questions</label>
        <textarea id="message" name="message" placeholder="Any additional details, VIN number, trim level, etc." />
      </div>
      <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
        &#128231; Send Request
      </button>
      <p className="form-fine">
        By submitting this form you agree to be contacted about your part request. We do not share your information.
      </p>
    </form>
  )
}
