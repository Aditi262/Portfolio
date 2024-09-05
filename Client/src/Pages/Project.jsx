import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../assets/linkedin project.png";
import weather from "../assets/weather app .jpg";
import Particle from "../components/Particle";
import ProjectCard from "../components/Project";

const Project = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkedin}
              isBlog={false}
              title="Linkedin clone"
              description="Developed a user-friendly interface inspired by LinkedIn's design
using React, Firebase Authentication, and Firestore. The project
allows users to sign in, sign out, and create posts with image
uploads. The focus was on providing an easy navigation experience
and content sharing."
              ghLink="https://github.com/Aditi262"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Application"
              description="This is Weather Application which is created with HTML,CSS and
Javascript in which , you can get the weather details of a particular
city by entering the city name."
              ghLink="https://github.com/Aditi262"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  )
}

export default Project