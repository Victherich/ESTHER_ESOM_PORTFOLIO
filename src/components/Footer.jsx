import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const FooterSection = styled.footer`
  background-color: #6c5ce7;
  color: #fff;
  padding: 3rem 8%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #fd79a8;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-bottom: 1.8rem;
  line-height: 1.7;
  font-size: 1rem;

  a {
    color: #ffeaa7;
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  a {
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #fd79a8;
    }
  }
`;

const FooterCopy = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: #f0f0f0;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterNav>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">My Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </FooterNav>

      <ContactInfo>
        <div>Email: <a href="mailto:esomesther@gmail.com">esomesther@gmail.com</a></div>
        <div>Phone: <a href="tel:+2348168864508">+234 816 886 4508</a></div>
        <div>LinkedIn: <a href="https://www.linkedin.com/in/esther-esom-881537286" target="_blank" rel="noopener noreferrer">View Profile</a></div>
      </ContactInfo>

      <SocialLinks>
        <a
          href="https://www.linkedin.com/in/esther-esom-881537286"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

       

        <a href="mailto:esomesther@gmail.com">
          <FaEnvelope />
        </a>

        <a href="tel:+2348168864508">
          <FaPhone />
        </a>
      </SocialLinks>

      <FooterCopy>
        &copy; {new Date().getFullYear()} Esther Esom | All Rights Reserved
      </FooterCopy>
    </FooterSection>
  );
};

export default Footer;
