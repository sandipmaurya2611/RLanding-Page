import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {
  FaReact, FaNodeJs, FaAngular, FaPhp, FaJava, FaPython, FaAws,
  FaVuejs, FaWordpress
} from 'react-icons/fa';
import {
  SiMongodb, SiMysql, SiBootstrap, SiExpress, SiSpringboot, SiPostgresql,
  SiDjango, SiFirebase, SiTailwindcss, SiNextdotjs, SiJquery, SiJavascript
} from 'react-icons/si';

const techIcons = {
  React: <FaReact />,
  NodeJs: <FaNodeJs />,
  Angular: <FaAngular />,
  PHP: <FaPhp />,
  Java: <FaJava />,
  Python: <FaPython />,
  AWS: <FaAws />,
  VueJs: <FaVuejs />,
  Wordpress: <FaWordpress />,
  MongoDB: <SiMongodb />,
  MySQL: <SiMysql />,
  Bootstrap: <SiBootstrap />,
  Express: <SiExpress />,
  SpringBoot: <SiSpringboot />,
  PostgreSQL: <SiPostgresql />,
  Django: <SiDjango />,
  Firebase: <SiFirebase />,
  TailwindCSS: <SiTailwindcss />,
  NextJs: <SiNextdotjs />,
  JQuery: <SiJquery />,
  JavaScript: <SiJavascript />,
};

// Import your projects array here
const projects = [
  {
    title: "Lokhande Sai Dental",
    category: "Healthcare",
    description: "A comprehensive dental clinic website with appointment booking and service information.",
    tech: ["React", "NodeJs", "MongoDB", "TailwindCSS"],
    url: "https://lokhandesaidental.com/",
  },
  {
    title: "Practo Bharuch Doctors",
    category: "Healthcare",
    description: "Doctor listing and appointment booking platform for healthcare professionals in Bharuch.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    url: "https://www.practo.com/Bharuch/doctors",
  },
  {
    title: "Aakash Institute",
    category: "Education",
    description: "Educational platform for students preparing for competitive exams with course management.",
    tech: ["Angular", "NodeJs", "MongoDB", "Express"],
    url: "https://www.aakash.ac.in/",
  },
  {
    title: "The Ritz-Carlton",
    category: "Hospitality",
    description: "Luxury hotel chain website with booking system and property showcases.",
    tech: ["React", "Java", "SpringBoot", "PostgreSQL"],
    url: "https://www.ritzcarlton.com/",
  },
  {
    title: "Coursera",
    category: "Education",
    description: "Online learning platform with thousands of courses from top universities and companies.",
    tech: ["React", "Python", "Django", "AWS"],
    url: "https://www.coursera.org/",
  },
  {
    title: "Demech India",
    category: "Business",
    description: "Manufacturing company website with product catalog and inquiry system.",
    tech: ["WordPress", "PHP", "MySQL", "jQuery"],
    url: "https://www.demechindia.com/",
  },
  {
    title: "Business Class",
    category: "Business",
    description: "Premium travel service platform for business travelers with booking and management.",
    tech: ["VueJs", "NodeJs", "MongoDB", "Express"],
    url: "https://www.businessclass.com/",
  },
  {
    title: "SE Associates",
    category: "Business",
    description: "Professional services firm website with portfolio and client management.",
    tech: ["React", "Firebase", "TailwindCSS", "NextJs"],
    url: "https://www.seassociates.in/",
  },
  {
    title: "Phoenix Mecano",
    category: "Business",
    description: "Industrial components manufacturer website with product catalog and distributor locator.",
    tech: ["WordPress", "PHP", "MySQL", "JavaScript"],
    url: "https://www.phoenixmecano.co.in/",
  },
  {
    title: "India Journey",
    category: "Travel",
    description: "Travel agency site offering custom holiday packages, visa services, and bookings.",
    tech: ["WordPress", "PHP", "Bootstrap"],
    url: "https://www.indiajourney.com/",
  },
  {
    title: "Girikand Travels",
    category: "Travel",
    description: "Tours and travels portal with international/domestic packages, flight bookings, and hotels.",
    tech: ["PHP", "MySQL", "JavaScript"],
    url: "https://www.girikand.com/",
  },
  {
    title: "Roetell Glass Packaging",
    category: "Manufacturing",
    description: "Glass packaging manufacturer with product catalog and B2B features.",
    tech: ["React", "Next.js", "Node.js"],
    url: "https://roetell.com/",
  },
  {
    title: "Chemco Group",
    category: "Industrial",
    description: "Plastic packaging and manufacturing company with product showcase and client portal.",
    tech: ["PHP", "Laravel", "MySQL"],
    url: "https://www.chemcogroup.com/",
  },
  {
    title: "Baafila Travels",
    category: "Travel",
    description: "Travel booking website for domestic and international holiday packages.",
    tech: ["WordPress", "PHP", "Bootstrap"],
    url: "https://baafilatravels.com/",
  },
    //  Extra Projects
 
];
const categories = ["All", "Healthcare", "Education", "Hospitality", "Business"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const paginatedProjects = filteredProjects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">Our Portfolio</h2>
          <p className="text-gray-400">
            Explore how we’ve helped businesses build digital experiences that deliver results.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-800 hover:bg-purple-700 text-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {paginatedProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-purple-600 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 text-sm bg-gray-700 px-2 py-1 rounded text-blue-200"
                  >
                    {techIcons[tech]} <span>{tech}</span>
                  </div>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white border border-blue-500 px-4 py-1.5 rounded hover:bg-blue-500 transition"
              >
                Visit Website <FaExternalLinkAlt size={12} />
              </a>
            </div>
          ))}
        </div>

        {/* Arrow Pagination */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className={`p-2 rounded-full border-2 ${
              currentPage === 1 ? "border-gray-600 text-gray-600 cursor-not-allowed" : "border-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            <FaArrowLeft />
          </button>

          <span className="text-gray-400 text-sm">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full border-2 ${
              currentPage === totalPages ? "border-gray-600 text-gray-600 cursor-not-allowed" : "border-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
