import React from 'react';
import SEO from '../components/SEO';

const About: React.FC = () => {
    return (
        <div>
            <SEO
                title="About Us"
                description="Learn more about Right Way Mechanical, your trusted HVAC service provider."
            />
            <section className="p-8 bg-gray-100">
                <h1 className="text-2xl font-bold text-center">About Us</h1>
                <p className="mt-6 max-w-3xl mx-auto text-center">
                    At Right Way Mechanical, we are committed to providing top-quality HVAC services
                    to homes and businesses across Colorado. With years of experience and a dedicated
                    team of professionals, we ensure your comfort and satisfaction.
                </p>
            </section>
        </div>
    );
};

export default About;
