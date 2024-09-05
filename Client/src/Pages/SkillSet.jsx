import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import Techstack from "../components/Tech";


const SkillSet = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset </strong>
        </h1>

        <Techstack />
      </Container>
    </Container>
  )
}

export default SkillSet