
import React from "react";
import styled from "styled-components";
import client1 from "../Images/p2.png"; // Replace with client photos or avatars
import client2 from "../Images/p2.png";
import client3 from "../Images/p2.png";

const TestimonialsSection = styled.section`
  padding: 6rem 8%;
  background-color: #6c5ce7;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
  }
`;

const ClientPhoto = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const ClientName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ClientFeedback = styled.p`
  font-size: 0.9rem;
  // line-height: 1.6;
  color: #555;
`;

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      feedback: "Esther has been an absolute lifesaver. Her organization and attention to detail allowed me to focus on my business without stress.",
      photo: client1,
    },
    {
      name: "Michael Lee",
      feedback: "Professional, reliable, and proactive! Esther handled all my administrative tasks efficiently. Highly recommend.",
      photo: client2,
    },
    {
      name: "Emily Davis",
      feedback: "Her research and reporting skills are top-notch. Esther is a fantastic Virtual Assistant who really understands client needs.",
      photo: client3,
    },
  ];

  return (
    <TestimonialsSection id="testimonials">
      <TestimonialsTitle>What My Clients Say</TestimonialsTitle>
      <TestimonialsGrid>
        {reviews.map((review, index) => (
          <TestimonialCard key={index}>
            {/* <ClientPhoto src={review.photo} alt={review.name} /> */}
            <ClientName>{review.name}</ClientName>
            <ClientFeedback>{review.feedback}</ClientFeedback>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsSection>
  );
};

export default Testimonials;
