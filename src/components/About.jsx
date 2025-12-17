
import React from "react";
import styled from "styled-components";
import aboutImage from "../Images/p2.png"; // Replace with a professional photo or illustration

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 8%;
  background-color: #f7f6fc;
  color: #333;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 4rem 2rem;
  }
`;

const AboutContent = styled.div`
  max-width: 600px;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #6c5ce7;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const AboutImage = styled.img`
  width: 450px;
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContent>
        <AboutTitle>About Me</AboutTitle>
        <AboutText>
          I’m Esther Esom, a dedicated Virtual Assistant passionate about helping
          busy professionals stay organized and focused. With years of experience
          in managing schedules, handling emails, and coordinating tasks, I ensure
          that every project runs smoothly and efficiently.
        </AboutText>
        <AboutText>
          I take pride in my attention to detail, proactive approach, and
          commitment to making life easier for my clients. Whether it’s
          administrative support, research, or digital organization, I provide
          solutions tailored to your needs.
        </AboutText>
      </AboutContent>
      <AboutImage src={aboutImage} alt="About Jane Doe" />
    </AboutSection>
  );
};

export default About;
