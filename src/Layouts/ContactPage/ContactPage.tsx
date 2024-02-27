import React, { useState } from 'react';

export const ContactPage = () => {
    // State for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');

    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Name: ${name}, Email: ${email}, Question: ${question}`);
        setName('');
        setEmail('');
        setQuestion('');
    };

    // Correctly typed style object for the container
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%', // This uses the full height of the viewport
        textAlign: 'center', // This centers the text of the h1
    };

    return (
        <div>
            <div>
                <h1 className='mt-3 text-center'>Contact Us</h1>
                <h3 className='mt-2 text-center'>We are on social media too!</h3>
                <p className='text-center'>INSERT SM LINKS HERE</p>
            </div>
            <div style={containerStyle} className='justify-content-center align-items-center'>
                <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px', border: '1px solid #000', padding: '20px', margin: '20px', borderRadius: '5px',
                backgroundColor: '#F2F3F4', marginLeft: 'auto', marginRight: 'auto' }}>
                    <div className="form-group mt-5">
                        <p>Name</p>
                        <label style={{ marginBottom: '0' }} htmlFor="name"></label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='name'
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <p>Email</p>
                        <label style={{ marginBottom: '0' }} htmlFor="email"></label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='email'
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <p>Question</p>
                        <label style={{ marginBottom: '0' }} htmlFor="question"></label>
                        <textarea
                            id="question"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder='type your question here'
                            required
                        />
                    </div>
                    <button className='custom-button mt-3' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
