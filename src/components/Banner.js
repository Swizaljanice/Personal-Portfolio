import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import profile from "../assets/img/Swizal.jpg";
import "../styles/Banner.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Java Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner-section" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} style={{ marginTop: "80px" }}>
            <span className="tagline">Welcome to My Portfolio</span>
            <h1>
              {`Hi, I'm Swizal Janice Dsouza `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Passionate about technology and building practical solutions
              through code. Always eager to learn, explore new tools, and take
              on real-world challenges. This portfolio highlights key projects
              and skills developed along the way.
            </p>
            <div className="d-md-none text-center mb-4">
              <div className="animated-circle">
                <div className="glow-ring"></div>
                <img src={profile} alt="My Profile" className="profile-photo" />
              </div>
            </div>

            <a
              href="https://swizaljanice.github.io/Personal-Portfolio/Swizal_SoftwareEngineer.pdf"
              download="Swizal_SoftwareEngineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              Download My Resume &nbsp;&nbsp;&nbsp;
              <Download size={25} />
            </a>
          </Col>

         
          <Col xs={12} md={6} xl={5} className="d-none d-md-block">
            <div className="animated-circle">
              <div className="glow-ring"></div>
              <img src={profile} alt="My Profile" className="profile-photo" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
