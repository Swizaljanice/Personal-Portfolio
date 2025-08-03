import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md="auto" className="text-left mb-2 mb-md-0">
            <p className="footer-text">
              © 2025 Swizal Janice Dsouza · Built using React
            </p>
          </Col>
          <Col xs={12} md="auto" className="text-right">
            <div className="social-icons">
              <a href="mailto:swizaljanice100@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </a>
              <a href="https://github.com/Swizaljanice" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/_swizal_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/swizal" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
