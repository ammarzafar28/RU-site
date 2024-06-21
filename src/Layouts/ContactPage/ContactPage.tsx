import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
//import 'bootstrap/dist/css/bootstrap.min.css';

export const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error('Form reference is missing.');
      return;
    }

    emailjs
      .sendForm(
        'contact_service',
        'contact_form',
        form.current,
        'uTu7q_DNAHHr3421H',
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessMessage('Your message has been sent successfully!');
          form.current!.reset();  // Clear the form fields
          setTimeout(() => setSuccessMessage(''), 3000);  // Clear the success message after 5 seconds
        },
        (error) => {
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="container mt-5 mb-5">
      <h1 className='mt-5 mb-5 text-center'>Contact Us</h1>
      <h3 className='mt-5 mb-5 text-center'>We are on social media too!</h3>
      {successMessage && (
        <div className="alert alert-success text-center" role="alert">
          {successMessage}
        </div>
      )}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <form ref={form} onSubmit={sendEmail} className='mt-5 mb-5' style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', background: '#f9f9f9' }}>
            <div className="mb-3">
              <label className="form-label" style={{ fontWeight: 'bold' }}>Name</label>
              <input type="text" name="user_name" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ fontWeight: 'bold' }}>Email</label>
              <input type="email" name="user_email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ fontWeight: 'bold' }}>Message</label>
              <textarea name="message" className="form-control" required style={{ height: '150px' }} />
            </div>
            <div className="text-center">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
