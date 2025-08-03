import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FaHome, FaCode, FaProjectDiagram } from "react-icons/fa";
import "../styles/NavBar.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      
      const scrollPosition = window.scrollY + 200;
      const sections = ["home", "techstack", "projects"];

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveLink(section);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" collapseOnSelect className={scrolled ? "scrolled navbar-black" : "navbar-black"}>
      <Container>
        <Navbar.Brand href="#home">
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <a
              href="#home"
              onClick={() => setActiveLink("home")}
              className={`nav-link ${activeLink === "home" ? "active" : ""}`}
            >
              <FaHome /> Home
            </a>
            <a
              href="#techstack"
              onClick={() => setActiveLink("techstack")}
              className={`nav-link ${activeLink === "techstack" ? "active" : ""}`}
            >
              <FaCode /> Tech Stack
            </a>
            <a
              href="#projects"
              onClick={() => setActiveLink("projects")}
              className={`nav-link ${activeLink === "projects" ? "active" : ""}`}
            >
              <FaProjectDiagram /> Projects
            </a>
          </Nav>
          <span className="navbar-text">
            <button className="vvd" onClick={() => window.open("https://www.linkedin.com/in/swizal")}>
               
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
