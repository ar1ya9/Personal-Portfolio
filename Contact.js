import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare data for sending
        const formData = {
            name,
            email,
            message
        };

        try {
            const response = await fetch('https://formspree.io/f/mrbggzdg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Reset the form fields
                setName('');
                setEmail('');
                setMessage('');
                alert('Message sent successfully!');
            } else {
                alert('Error sending message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error sending message. Please try again.');
        }
    };

    return (
        <section id="contact" className="p-8 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl text-blue-600 font-bold mb-4">Contact Me</h2>
                <p className="mb-4">Feel free to reach out through the following platforms:</p>

                <div className="flex justify-center space-x-8 mb-6">
                    <a href="https://linkedin.com" className="text-blue-500 hover:underline">LinkedIn</a>
                    <a href="https://web.facebook.com/mdapon.smr" className="text-blue-500 hover:underline">Facebook</a>
                    <a href="https://www.youtube.com/@ar1ya9" className="text-blue-500 hover:underline">YouTube</a>
                    <a href="https://instagram.com" className="text-blue-500 hover:underline">Instagram</a>
                    <a href="https://your-personal-site.com" className="text-blue-500 hover:underline">Personal Site</a>
                </div>

                <div className="mb-6">
                    <p className="text-lg text-gray-600">Address: Goyeshpur, Pabna Sadar, Pabna, Bangladesh</p>
                </div>

                {/* Smaller Message Box */}
                <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg shadow-md w-80 mx-auto">
                    <input
                        type="text"
                        className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        className="w-full h-20 p-2 border border-gray-300 rounded-lg"
                        placeholder="Type your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="mt-2 bg-blue-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-8">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Almahmud. All Rights Reserved.</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
