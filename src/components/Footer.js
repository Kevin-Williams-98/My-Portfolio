import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/KW-initials.jpg';

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.png";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          {  <img src={logo} alt="Logo" /> } 
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/kevin-williams-78099a108/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Kevin-Williams-98"><img src={navIcon2} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
