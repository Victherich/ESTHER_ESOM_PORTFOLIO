import React from "react";
import styled from "styled-components";
import heroImage from "../Images/p3.jpg";

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 8%;
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  color: #fff;
  min-height: 90vh;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 4rem 2rem;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #f0f0f0;
`;

const ContactDetails = styled.div`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #fdfdfd;

  a {
    color: #ffeaa7;
    text-decoration: underline;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #fd79a8;
  color: #fff;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e84393;
    transform: translateY(-3px);
  }
`;

const HeroImage = styled.img`
  width: 450px;
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <Title>Hi, I'm Esther Esom</Title>
        <Subtitle>
          I’m a Virtual Assistant helping busy professionals and organizations manage their tasks,
          organize their schedules, and streamline their workflow.
        </Subtitle>

        {/* <ContactDetails>
          <div>Email: <a href="mailto:esomesther@gmail.com">esomesther@gmail.com</a></div>
          <div>Phone: <a href="tel:+2348168864508">+234 816 886 4508</a></div>
          <div>LinkedIn: <a href="https://www.linkedin.com/in/esther-esom-881537286" target="_blank" rel="noopener noreferrer">View Profile</a></div>
        </ContactDetails> */}

        <CTAButton href="#contact">Hire Me</CTAButton>
      </HeroContent>

      <HeroImage src={heroImage} alt="Esther Esom" />
    </HeroSection>
  );
};

export default Hero;
