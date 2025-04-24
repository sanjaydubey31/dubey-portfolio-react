import React, { useState } from 'react';
import './UseFormStyle.css'; // Optional for modal styling

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit_bak = (e) => {
    e.preventDefault();
    alert('Form Submitted: ' + JSON.stringify(formData, null, 2));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(res);
      if (!res.ok) {
        //throw new Error('Failed to submit the form');
      }
      
      const result = await res.json();
      console.log(result);
      //setResponse(result);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Thank you. We will send you an email when we reply.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <tbody>
        <tr>
          <td style={{ padding: '8px', textAlign: 'right'}}>
            <label htmlFor="firstName" style={{ color: 'blue' }}>First Name:</label>
          </td>
          <td style={{ padding: '8px' }}>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{ width: '100%' }}
            />
          </td>
        </tr>
        <tr>
          <td style={{ padding: '8px', textAlign: 'right' }}>
            <label htmlFor="lastName" style={{ color: 'blue' }}>Last Name:</label>
          </td>
          <td style={{ padding: '8px' }}>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{ width: '100%' }}
            />
          </td>
        </tr>
        <tr>
          <td style={{ padding: '8px', textAlign: 'right' }}>
            <label htmlFor="email" style={{ color: 'blue' }}>Email:</label>
          </td>
          <td style={{ padding: '8px' }}>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%' }}
            />
          </td>
        </tr>
        <tr>
          <td style={{ padding: '8px', textAlign: 'right' }}>
            <label htmlFor="dateOfBirth" style={{ color: 'blue' }}>Reply By Date:</label>
          </td>
          <td style={{ padding: '8px' }}>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              style={{ width: '100%' }}
            />
          </td>
        </tr>
        <tr>
          <td style={{ padding: '8px', textAlign: 'right' }}>
            <label htmlFor="comment" style={{ color: 'blue' }}>Comment:</label>
          </td>
          <td style={{ padding: '8px' }}>
            <input
              type="text"
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              style={{ width: '100%' }}
            />
          </td>
        </tr>
        <tr>
          <td style={{ padding: '8px' }}></td>
          <td style={{ padding: '8px' }}>
            <button type="submit" style={{ padding: '10px 20px' }}>
              Submit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
  );
};

export const UserApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/*<h1>Open User Form in Popup</h1> */}
      <button className="contactBtn" onClick={openModal}>Contact Me</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <UserForm />
          </div>
        </div>
      )}
    </div>
  );
};


