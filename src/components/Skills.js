import { Container, Row, Col } from "react-bootstrap";
import "../styles/Skills.css";
import { FaReact, FaJava, FaGitAlt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiMongodb, SiMysql, SiNextdotjs } from "react-icons/si";


const skills = [
  { name: "React", icon: <FaReact />, color: "#00CFFF" },
  { name: "Java", icon: <FaJava />, color: "#FF4C4C" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "#00BF6F" },
  { name: "Git", icon: <FaGitAlt />, color: "#FF6B00" },
  { name: "JavaScript", icon: <FaJs />, color: "#FFD600" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#00B86B" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4C51BF" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#00B86B" },
  { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#666" },
];


export const Skills = () => {
  return (
    <section className="skill" id="techstack">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Tech Stack</h2>
              <p>Technologies and tools I use to bring ideas to life</p>
              <div className="skills-grid">
                {skills.map((skill, idx) => (
                  <div className="skill-card" key={idx}>
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <h5>{skill.name}</h5>
                    <div className="skill-line" style={{ backgroundColor: skill.color }}></div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
