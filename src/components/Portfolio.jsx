
// import React from "react";
// import styled from "styled-components";
// import portfolio1 from "../Images/pr1.jpeg"; // Replace with real images/screenshots
// import portfolio2 from "../Images/pr1.jpeg";
// import portfolio3 from "../Images/pr3.jpeg";

// const PortfolioSection = styled.section`
//   padding: 6rem 8%;
//   background-color: #f7f6fc;
//   background-color:rgba(0,0,255,0.1);
//   color: #333;
//   text-align: center;

//   @media (max-width: 768px) {
//     padding: 4rem 2rem;
//   }
// `;

// const PortfolioTitle = styled.h2`
//   font-size: 2.5rem;
//   font-weight: 700;
//   margin-bottom: 3rem;
//   color: #6c5ce7;
// `;

// const PortfolioGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 2rem;
// `;

// const PortfolioCard = styled.div`
//   background-color: #fff;
//   border-radius: 20px;
//   overflow: hidden;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
//   }
// `;

// const PortfolioImage = styled.img`
//   width: 100%;
//   display: block;
// `;

// const PortfolioContent = styled.div`
//   padding: 1.5rem;
// `;

// const PortfolioName = styled.h3`
//   font-size: 1.3rem;
//   font-weight: 600;
//   margin-bottom: 0.5rem;
// `;

// const PortfolioDescription = styled.p`
//   font-size: 1rem;
//   line-height: 1.6;
//   color: #555;
// `;

// const Portfolio = () => {
//   const projects = [

//       {
//       name: "Project Management",
//       description: "Organized and managed client's projects and workflows.",
//       image: portfolio1,
//     },
//     {
//       name: "Email Management",
//       description: "Organized and managed client inbox, responding to priority emails.",
//       image: portfolio1,
//     },
//     {
//       name: "Calendar & Scheduling",
//       description: "Handled scheduling and appointments, ensuring timely follow-ups.",
//       image: portfolio3,
//     },
//     {
//       name: "Research & Reports",
//       description: "Prepared detailed research reports and summaries for client projects.",
//       image: portfolio3,
//     },
//     // Add more projects here
//   ];

//   return (
//     <PortfolioSection id="portfolio">
//       <PortfolioTitle>My Projects</PortfolioTitle>
//       <PortfolioGrid>
//         {projects.map((project, index) => (
//           <PortfolioCard key={index}>
//             <PortfolioImage src={project.image} alt={project.name} />
//             <PortfolioContent>
//               <PortfolioName>{project.name}</PortfolioName>
//               <PortfolioDescription>{project.description}</PortfolioDescription>
//             </PortfolioContent>
//           </PortfolioCard>
//         ))}
//       </PortfolioGrid>
//     </PortfolioSection>
//   );
// };

// export default Portfolio;



import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import portfolio1 from "../Images/pr1.jpeg";
import portfolio3 from "../Images/pr3.jpeg";

const PortfolioSection = styled.section`
  padding: 6rem 8%;
  background-color: rgba(0, 0, 255, 0.1);
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const PortfolioTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #6c5ce7;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const PortfolioCard = styled.div`
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
  }
`;

const PortfolioImage = styled.img`
  width: 100%;
  display: block;
  cursor: pointer;
`;

const PortfolioContent = styled.div`
  padding: 1.5rem;
`;

const PortfolioName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const PortfolioDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

/* Modal Animations */
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const zoomIn = keyframes`
  from { transform: scale(0.85); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

/* Modal Styles */
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease forwards;
  z-index: 999;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 85%;
  animation: ${zoomIn} 0.3s ease forwards;
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
`;

const CloseBtn = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  background: #ff6b6b;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 4px 10px rgba(255, 0, 0, 0.3);

  &:hover {
    background: #ff4b4b;
  }
`;

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      name: "Project Management",
      description: "Organized and managed client's projects and workflows.",
      image: portfolio1,
    },
    {
      name: "Email Management",
      description: "Managed client inbox, responding to priority emails.",
      image: portfolio1,
    },
    {
      name: "Calendar & Scheduling",
      description: "Handled scheduling and appointments, ensuring timely follow-ups.",
      image: portfolio3,
    },
    {
      name: "Research & Reports",
      description: "Prepared detailed research reports and summaries for client projects.",
      image: portfolio3,
    },
  ];

  return (
    <PortfolioSection id="portfolio">
      <PortfolioTitle>My Projects</PortfolioTitle>

      <PortfolioGrid>
        {projects.map((project, index) => (
          <PortfolioCard key={index}>
            <PortfolioImage
              src={project.image}
              alt={project.name}
              onClick={() => setSelectedImage(project.image)}
            />
            <PortfolioContent>
              <PortfolioName>{project.name}</PortfolioName>
              <PortfolioDescription>{project.description}</PortfolioDescription>
            </PortfolioContent>
          </PortfolioCard>
        ))}
      </PortfolioGrid>

      {/* Modal */}
      {selectedImage && (
        <ModalOverlay onClick={() => setSelectedImage(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseBtn onClick={() => setSelectedImage(null)}>×</CloseBtn>
            <ModalImage src={selectedImage} alt="Project" />
          </ModalContent>
        </ModalOverlay>
      )}
    </PortfolioSection>
  );
};

export default Portfolio;
