
"use client"
import React, { useState } from 'react';
import Button from './ui/Button';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // Here you would normally submit to a backend service
            setIsSubmitted(true);
            setEmail('');

            // Reset the submission state after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);
        }
    };

    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                    <p className="text-gray-300 mb-8">
                        Subscribe to our newsletter for exclusive offers, early access to new drops, and style inspiration.
                    </p>

                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                className="flex-grow py-3 px-4 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                                required
                            />
                            <Button
                                className="bg-white text-black hover:bg-gray-200"
                            >
                                Subscribe
                            </Button>
                        </div>

                        {isSubmitted && (
                            <p className="mt-3 text-green-400 text-sm animate-fade-in">
                                Thanks for subscribing! Check your email for confirmation.
                            </p>
                        )}

                        <p className="mt-4 text-gray-400 text-xs">
                            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;