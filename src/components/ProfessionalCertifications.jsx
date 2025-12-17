// import React from "react";
// import styled from "styled-components";
// import { FaCertificate } from "react-icons/fa";

// const Section = styled.section`
//   padding: 6rem 8%;
//   background: #f7f6fc;
//   color: #333;

//   @media (max-width: 768px) {
//     padding: 4rem 2rem;
//   }
// `;

// const Title = styled.h2`
//   font-size: 2.4rem;
//   font-weight: 700;
//   text-align: center;
//   color: #6c5ce7;
//   margin-bottom: 3rem;
// `;

// const Timeline = styled.div`
//   max-width: 750px;
//   margin: 0 auto;
//   position: relative;

//   &:before {
//     content: "";
//     position: absolute;
//     left: 25px;
//     top: 0;
//     height: 100%;
//     width: 3px;
//     background: #d9d4ff;
//     border-radius: 10px;
//   }
// `;

// const Item = styled.div`
//   display: flex;
//   align-items: flex-start;
//   margin-bottom: 2.5rem;
//   position: relative;
// `;

// const Marker = styled.div`
//   width: 50px;
//   height: 50px;
//   background: linear-gradient(135deg, #6c5ce7, #a29bfe);
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   font-size: 1.4rem;
//   margin-right: 1.5rem;
//   flex-shrink: 0;
//   box-shadow: 0 10px 25px rgba(108, 92, 231, 0.25);
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.1);
//   }
// `;

// const CertText = styled.div`
//   background: #fff;
//   padding: 1rem 1.5rem;
//   border-radius: 12px;
//   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
//   width: 100%;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
//   }
// `;

// const CertName = styled.h3`
//   font-size: 1.1rem;
//   font-weight: 600;
//   margin: 0;
//   color: #333;
// `;

// const Certifications = () => {
//   const certificationList = [
//     "Computer Science Certification",
//     "Virtual Assistant / Short-Term Rental Certification – STR Academy",
//     "Product Design Certification – Product Hub Africa",
//     "Virtual Assistant Certification – Echobyte Concept",
//   ];

//   return (
//     <Section id="certifications">
//       <Title>Professional Certifications</Title>

//       <Timeline>
//         {certificationList.map((cert, index) => (
//           <Item key={index}>
//             <Marker>
//               <FaCertificate />
//             </Marker>
//             <CertText>
//               <CertName>{cert}</CertName>
//             </CertText>
//           </Item>
//         ))}
//       </Timeline>
//     </Section>
//   );
// };

// export default Certifications;



import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaCertificate, FaTimes } from "react-icons/fa";

const Section = styled.section`
  padding: 6rem 8%;
  background: #f7f6fc;
  color: #333;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  color: #6c5ce7;
  margin-bottom: 3rem;
`;

const Timeline = styled.div`
  max-width: 750px;
  margin: 0 auto;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 25px;
    top: 0;
    height: 100%;
    width: 3px;
    background: #d9d4ff;
    border-radius: 10px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  position: relative;
`;

const Marker = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.4rem;
  margin-right: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 10px 25px rgba(108, 92, 231, 0.25);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const CertText = styled.div`
  background: #fff;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
  }
`;

const CertName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #333;
`;

const ViewLink = styled.button`
  margin-top: 0.5rem;
  background: none;
  border: none;
  color: #6c5ce7;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;
  padding: 0;
  text-decoration: underline;

  &:hover {
    color: #a29bfe;
  }
`;

/* Modal Styles */
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const zoomIn = keyframes`
  from { transform: scale(0.85); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

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

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificationList = [
    {
      title: "Computer Science Certification",
      img: "/certificates/cs-cert.jpg",
    },
    {
      title: "Virtual Assistant / STR Certification – STR Academy",
      img: "/certificates/str-cert.jpg",
    },
    {
      title: "Product Design Certification – Product Hub Africa",
      img: "/certificates/design-cert.jpg",
    },
    {
      title: "Virtual Assistant Certification – Echobyte Concept",
      img: "/certificates/va-cert.jpg",
    },
  ];

  return (
    <Section id="certifications">
      <Title>Professional Certifications</Title>

      <Timeline>
        {certificationList.map((cert, index) => (
          <Item key={index}>
            <Marker>
              <FaCertificate />
            </Marker>

            <CertText>
              <CertName>{cert.title}</CertName>
              <ViewLink onClick={() => setSelectedCert(cert.img)}>
                📄 View Certificate
              </ViewLink>
            </CertText>
          </Item>
        ))}
      </Timeline>

      {/* Modal */}
      {selectedCert && (
        <ModalOverlay onClick={() => setSelectedCert(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseBtn onClick={() => setSelectedCert(null)}>
              <FaTimes />
            </CloseBtn>
            <ModalImage src={selectedCert} alt="Certificate" />
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
};

export default Certifications;

