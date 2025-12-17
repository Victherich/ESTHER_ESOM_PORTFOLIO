
import React from "react";
import styled from "styled-components";

const ExperienceSection = styled.section`
  padding: 6rem 8%;
  background: #f7f6fc;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #6c5ce7;
  margin-bottom: 3rem;
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const ExperienceCard = styled.div`
  background: #fff;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
  text-align: left;
  border-left: 6px solid #fd79a8;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 45px rgba(0, 0, 0, 0.1);
  }
`;

const Company = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #6c5ce7;
  margin-bottom: 0.5rem;
`;

const Role = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
`;

const Location = styled.p`
  font-size: 0.95rem;
  color: #555;
`;

const WorkExperience = () => {
  const experiences = [
    {
      company: "Ikecoc Designers",
      role: "Social Media Manager / Video Editor / Content Creator",
      location: "London, UK",
    },
    {
      company: "Billion Women Global",
      role: "Administrative Support / Technical Support / Project Manager",
      location: "Georgia, USA",
    },
    {
      company: "Maco",
      role: "Data Entry Operator / Administrative Support",
      location: "Dubai, UAE",
    },
    {
      company: "Strive Facilities Management",
      role: "Concierge / Help Desk",
      location: "Dubai, UAE",
    },
    {
      company: "Reumssky",
      role: "Telesales Personnel / Administrative Support / Email Marketer",
      location: "Lagos, Nigeria",
    },
    {
      company: "Echobyte Concept",
      role: "Product Manager / Social Media Manager / Lead Generation",
      location: "Lagos, Nigeria",
    },
  ];

  return (
    <ExperienceSection id="experience">
      <SectionTitle>My Work Experiences</SectionTitle>

      <ExperienceContainer>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index}>
            <Company>{exp.company}</Company>
            <Role>{exp.role}</Role>
            <Location>{exp.location}</Location>
          </ExperienceCard>
        ))}
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default WorkExperience;
