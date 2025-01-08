interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => (
    <div className="shadow-md rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-32 object-cover" />
        <div className="p-4">
            <h3 className="font-bold text-lg">{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

export default ServiceCard;
