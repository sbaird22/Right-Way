import React from 'react';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';

const Home = () => (
    <div>
        <SEO title="Right Way Mechanical" description="HVAC Services in Colorado" />
        <section className="p-8 bg-gray-100">
            <h1 className="text-3xl font-bold text-center">Right Way Mechanical</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <ServiceCard
                    title="HVAC Installation"
                    description="Professional HVAC installation for homes and businesses."
                    image="/images/hvac-installation.jpg"
                />
                <ServiceCard
                    title="Maintenance Services"
                    description="Keep your HVAC systems running smoothly with regular maintenance."
                    image="/images/hvac-maintenance.jpg"
                />
            </div>
        </section>
    </div>
);

export default Home;
