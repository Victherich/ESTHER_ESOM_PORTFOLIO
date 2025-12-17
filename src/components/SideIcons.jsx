import React from "react";
import styled from "styled-components";

import LinkedInIcon from "../Images/circle-linkedin-512.webp";
import wp from "../Images/whatsapplogo.png";

const Container = styled.div`
  position: fixed;
  right: 1%;
  padding: 5px 5px;
  background: rgba(255,255,255,0.9);
  box-shadow: 0px 4px 5px;
  border-radius: 12px;
  cursor: pointer;
  z-index: 99;
  transition: 0.2s ease-in-out;
  font-weight: bold;
  font-family: Arial;
  color:blue;
  font-size:0.8rem;
  text-align:center;

  &:hover {
    transform: scale(1.05);
  }
`;

const Icon = styled.img`
  width: ${(props) => props.size || "40px"};
  border-radius: ${(props) => props.radius || "50%"};
  margin-right: 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SideIconsWrapper = styled.div``;

export default function SideIcons() {
  const mainUrl = window.location.origin;

  return (
    <SideIconsWrapper>
      
      {/* LinkedIn */}
      <Container style={{ bottom: "15%", background:"none" }}
        onClick={() => window.open("https://www.linkedin.com/in/esther-esom-881537286/", "_blank")}
      >
        <Row>
          <Icon src={LinkedInIcon} size="35px" />
        
        </Row>
      </Container>

      {/* WhatsApp */}
      <Container style={{bottom: "3%", background:"none" }}
        onClick={() => window.open("https://wa.me/2348168864508", "_blank")}
      >
        <Row>
          <Icon src={wp} size="45px" />
        </Row>
      </Container>
    </SideIconsWrapper>
  );
}