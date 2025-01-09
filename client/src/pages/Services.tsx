import { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import { fetchServices } from '../api';

interface Service {
    id: number;
    name: string;
    description: string;
}

const Services = () => {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        const loadServices = async () => {
            const data = await fetchServices();
            setServices(data);
        };

        loadServices();
    }, []);

    return (
        <div>
            <SEO title="Our Services" description="Explore the HVAC services offered by Right Way Mechanical." />
            <section className="p-8 bg-gray-100">
                <h1 className="text-2xl font-bold text-center">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.name}
                            description={service.description}
                            image={`/assets/${service.id}.jpg`}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
