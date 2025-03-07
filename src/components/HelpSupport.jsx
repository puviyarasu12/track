import React, { useState } from 'react';

function HelpSupport() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="help-support-container">
      <h1>Help & Support</h1>
      <p>If you need assistance, check our FAQs or contact support.</p>

      {/* FAQs Section */}
      <div className="faqs">
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>How do I reset my password?</summary>
          <p>Go to the "Change Password" section in your dashboard and follow the instructions.</p>
        </details>
        <details>
          <summary>How can I check my attendance?</summary>
          <p>Visit the "Attendance History" page to view your attendance records.</p>
        </details>
        <details>
          <summary>Who do I contact for salary issues?</summary>
          <p>Reach out to the HR department at hr@company.com.</p>
        </details>
      </div>

      {/* Contact Support Section */}
      <div className="contact-support">
        <h2>Contact Support</h2>
        <p>Email: support@company.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>

      {/* Support Request Form */}
      <div className="support-form">
        <h2>Submit a Support Request</h2>
        {submitted ? (
          <p className="success-message">Thank you! We will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required />

            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default HelpSupport;
