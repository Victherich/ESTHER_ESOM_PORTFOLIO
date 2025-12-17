import React from "react";
import styled from "styled-components";

const SkillsSection = styled.section`
  padding: 6rem 5%;
  background-color: #fff;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #6c5ce7;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const SkillCard = styled.div`
  background: #f7f6fc;
  border-radius: 15px;
  padding: 1.5rem 2rem;
  width: 260px;
  // box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #6c5ce7;
`;

const SkillText = styled.p`
  font-size: 0.8rem;
  // line-height: 1.6;
  color: #444;
  margin-bottom: 1rem;
`;

const SkillBarBackground = styled.div`
  background-color: #ddd;
  border-radius: 50px;
  height: 10px;
  width: 100%;
  margin-top: 0.5rem;
`;

const SkillBarFill = styled.div`
  background-color: #fd79a8;
  height: 10px;
  width: ${props => props.width}%;
  border-radius: 50px;
  transition: width 1s ease-in-out;
`;

const Skills = () => {
  const skillSet = [
    {
      name: "Calendar & Email Management",
      details: "Scheduling, inbox sorting, reminders, and professional communication.",
      level: 95,
    },
    {
      name: "Data Entry & File Organization",
      details: "Accurate data entry, digital file management, and document organization.",
      level: 92,
    },
    {
      name: "Customer Service & Support",
      details: "Responding to inquiries, resolving issues, and maintaining client satisfaction.",
      level: 90,
    },
    {
      name: "Social Media Management",
      details: "Instagram, Facebook, and LinkedIn content support and engagement tracking.",
      level: 88,
    },
    {
      name: "Microsoft Office & Google Workspace",
      details: "Docs, Sheets, Slides, Excel, Word, PowerPoint, and Drive organization.",
      level: 93,
    },
    {
      name: "CRM Tools",
      details: "HubSpot, Trello, Asana, ClickUp, GoHighLevel task & workflow management.",
      level: 91,
    },
    {
      name: "Research & Report Preparation",
      details: "Market research, data gathering, summaries, and structured reports.",
      level: 89,
    },
    {
      name: "Canva & Basic Graphic Design",
      details: "Flyers, social posts, presentations, and brand-aligned templates.",
      level: 85,
    },
    {
      name: "Time Management & Prioritization",
      details: "Task planning, deadline tracking, and productivity optimization.",
      level: 97,
    },
  ];

  return (
    <SkillsSection id="skills">
      <SkillsTitle>My Skills</SkillsTitle>

      <SkillsContainer>
        {skillSet.map((skill, index) => (
          <SkillCard key={index}>
            <SkillName>{skill.name}</SkillName>
            <SkillText>{skill.details}</SkillText>

            <SkillBarBackground>
              <SkillBarFill width={skill.level} />
            </SkillBarBackground>
          </SkillCard>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
