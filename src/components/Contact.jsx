import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim() !== '') {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    let newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[name] = `${name[0].toUpperCase() + name.slice(1)} is required.`;
    } else {
      newErrors[name] = '';
    }

    if (name === 'email' && value && !validateEmail(value)) {
      newErrors.email = 'Invalid email formt.';
    }

    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;
    let newErrors = { ...errors };

    if (!formData.name.trim()) {
      isValid = false;
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      isValid = false;
      newErrors.email = 'Email is required.';
    } else if (!validateEmail(formData.email)) {
      isValid = false;
      newErrors.email = 'Invalid email format.';
    }
    if (!formData.message.trim()) {
      isValid = false;
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);

    if (isValid) {
      alert('Form submitted successfully');
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-container">
      <h2 id="contact-form">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;