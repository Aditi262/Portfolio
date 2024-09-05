
import React from 'react'
import { Container } from "react-bootstrap";
import ContactForm from '../components/Contact';
import Social from '../components/Social';
import Particle from '../components/Particle';

const Contact = () => {
  return (
    <Container style={{padding: '60px'}}>
      <Particle />
      <ContactForm />
      <Social />
    </Container>
  )
}

export default Contact
