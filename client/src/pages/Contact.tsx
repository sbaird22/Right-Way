import React, { useState } from 'react';
import SEO from '../components/SEO';
import { submitContactForm } from '../api';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await submitContactForm(formData);
            setSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting contact form', error);
        }
    };

    return (
        <div>
            <SEO title="Contact Us" description="Get in touch with Right Way Mechanical." />
            <section className="p-8">
                <h1 className="text-2xl font-bold text-center">Contact Us</h1>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
                    {success && (
                        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
                            Thank you for your message! We'll get back to you soon.
                        </div>
                    )}
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full p-2 border mb-4 rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full p-2 border mb-4 rounded"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        className="w-full p-2 border mb-4 rounded"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Contact;
