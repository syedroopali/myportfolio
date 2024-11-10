import Link from "next/link";
import Image from "next/image";
import cardImg1 from "../../../public/cardImg1.jpg";
import cardImg2 from "../../../public/cardImg2.jpg";
import cardImg3 from "../../../public/cardImg3.jpg";
import cardImg4 from "../../../public/cardImg4.jpg";
import cardImg5 from "../../../public/cardImg5.jpg";
import cardImg6 from "../../../public/cardImg6.jpg";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce website with a shopping cart and checkout feature.",
      image: cardImg1,
      link: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase design and development skills.",
      image: cardImg2,
      link: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A task management app with user authentication and real-time data updates.",
      image: cardImg3,
      link: "#",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "A social media dashboard for monitoring analytics across multiple platforms.",
      image: cardImg4,
      link: "#",
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description:
        "A weather app that provides real-time forecasts and weather alerts.",
      image: cardImg5,
      link: "#",
    },
    {
      id: 6,
      title: "Blog Platform",
      description:
        "A blog platform with markdown support, user profiles, and content management.",
      image: cardImg6,
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                className="h-48 bg-cover bg-center"
                width={400}
                height={50}
                src={project.image}
                alt={project.id.toString()}
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
