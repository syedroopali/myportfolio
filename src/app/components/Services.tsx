import Image from "next/image";
import Link from "next/link";
import catImg1 from "../../../public/catImg1.jpg";
import catImg2 from "../../../public/catImg2.jpg";
import catImg3 from "../../../public/catImg3.jpg";
import catImg4 from "../../../public/catImg4.jpg";
import catImg5 from "../../../public/catImg5.jpg";
import cardImg2 from "../../../public/cardImg2.jpg";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Creating responsive and dynamic websites to meet your business needs.",
      link: "#",
      image: catImg1,
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Developing user-friendly mobile applications for iOS and Android platforms.",
      link: "#",
      image: catImg2,
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing interfaces for web and mobile apps.",
      link: "#",
      image: catImg3,
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description:
        "Providing scalable cloud solutions for data storage, computing, and management.",
      link: "#",
      image: catImg4,
    },
    {
      id: 5,
      title: "Cybersecurity",
      description:
        "Implementing security protocols to protect your data and prevent cyber threats.",
      link: "#",
      image: catImg5,
    },
    {
      id: 6,
      title: "IT Consulting",
      description:
        "Offering professional IT consulting to help optimize your business operations.",
      link: "#",
      image: cardImg2,
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-lg rounded-lg p-6">
              <Image
                className="h-48 bg-cover bg-center mb-4"
                width={400}
                height={50}
                src={service.image}
                alt={service.id.toString()}
              />

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href={service.link}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
