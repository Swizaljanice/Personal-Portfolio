import React, { useRef } from "react";
import "../styles/Projects.css";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Attendance App",
    description: "Student attendance management system",
    link: "https://github.com/Swizaljanice/Attendanceapp",
    language: "Java",
    updatedOn: "Apr 12, 2025",
  },
  {
    title: "Task Manager",
    description: "Manage and track your tasks efficiently",
    link: "https://github.com/Swizaljanice/task-manager",
    language: "Next.js",
    updatedOn: "Mar 2, 2025",
  },
  {
    title: "Food Delivery",
    description: "Complete food delivery application",
    link: "https://github.com/Swizaljanice/food-delivery",
    language: "Node.js",
    updatedOn: "Jan 19, 2025",
  },
  {
    title: "Recyclick",
    description: "Smart waste management system",
    link: "https://github.com/Swizaljanice/RecyclickProject",
    language: "React.js",
    updatedOn: "Feb 10, 2025",
  },
  {
    title: "Expense Tracker",
    description: "Track and manage your expenses easily",
    link: "https://github.com/Swizaljanice/expense-tracker",
    language: "JavaScript",
    updatedOn: "Dec 4, 2024",
  },
  {
    title: "PokeExplorer",
    description: "Display Pokémon cards using API",
    link: "https://github.com/Swizaljanice/pokeexplorer",
    language: "JavaScript",
    updatedOn: "May 3, 2025",
  },
];

export  function Projects() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 320;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>Explore some of the work I’ve done</p>
      </div>
      <div className="scroll-buttons">
        <button className="scroll-btn" onClick={() => scroll("left")}>
          <FaArrowLeft />
        </button>
        <button className="scroll-btn" onClick={() => scroll("right")}>
          <FaArrowRight />
        </button>
      </div>
      <div className="projects-container" ref={scrollRef}>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-header">
              <span className="language">{project.language}</span>
              <span className="updated">Updated {project.updatedOn}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="code-btn">
              <FaGithub /> Code
            </a>
          </div>
        ))}
      </div>
      <div className="view-all">
        <a href="https://github.com/Swizaljanice" target="_blank" rel="noreferrer">
          <FaGithub /> View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}
