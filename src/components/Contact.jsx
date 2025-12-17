
// import React, { useState } from "react";
// import styled from "styled-components";
// import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

// const ContactSection = styled.section`
//   padding: 6rem 8%;
//   background-color: #f7f6fc;
//   color: #333;
//   text-align: center;

//   @media (max-width: 768px) {
//     padding: 4rem 2rem;
//   }
// `;

// const ContactTitle = styled.h2`
//   font-size: 2.5rem;
//   font-weight: 700;
//   margin-bottom: 2rem;
//   color: #6c5ce7;
// `;

// const ContactSubtitle = styled.p`
//   font-size: 1.1rem;
//   margin-bottom: 3rem;
// `;

// const ContactForm = styled.form`
//   max-width: 600px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `;

// const Input = styled.input`
//   padding: 1rem 1.2rem;
//   border-radius: 10px;
//   border: 1px solid #ccc;
//   font-size: 1rem;

//   &:focus {
//     outline: none;
//     border-color: #6c5ce7;
//   }
// `;

// const TextArea = styled.textarea`
//   padding: 1rem 1.2rem;
//   border-radius: 10px;
//   border: 1px solid #ccc;
//   font-size: 1rem;
//   resize: vertical;

//   &:focus {
//     outline: none;
//     border-color: #6c5ce7;
//   }
// `;

// const SubmitButton = styled.button`
//   padding: 1rem 2rem;
//   background-color: #fd79a8;
//   color: #fff;
//   font-weight: 600;
//   border-radius: 50px;
//   border: none;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #e84393;
//     transform: translateY(-3px);
//   }
// `;

// const SocialLinks = styled.div`
//   margin-top: 2rem;
//   display: flex;
//   justify-content: center;
//   gap: 2rem;

//   a {
//     color: #6c5ce7;
//     font-size: 1.5rem;
//     transition: color 0.3s;

//     &:hover {
//       color: #fd79a8;
//     }
//   }
// `;

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Thank you! Your message has been sent.");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <ContactSection id="contact">
//       <ContactTitle>Contact Me</ContactTitle>
//       <ContactSubtitle>
//         I’m here to help! Send me a message and I’ll get back to you as soon as possible.
//       </ContactSubtitle>
//       <ContactForm onSubmit={handleSubmit}>
//         <Input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <Input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//           <Input
//           type="tel"
//           name="phone"
//           placeholder="Your Phone Number"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <TextArea
//           name="message"
//           rows="5"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//         <SubmitButton type="submit">Send Message</SubmitButton>
//       </ContactForm>

//       {/* <SocialLinks>
//         <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
//           <FaLinkedin />
//         </a>
//         <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
//           <FaInstagram />
//         </a>
//         <a href="mailto:your-email@example.com">
//           <FaEnvelope />
//         </a>
//       </SocialLinks> */}
//     </ContactSection>
//   );
// };

// export default Contact;




import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const ContactSection = styled.section`
  padding: 6rem 8%;
  background-color: #f7f6fc;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #6c5ce7;
`;

const ContactSubtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 3rem;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem 1.2rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #6c5ce7;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem 1.2rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #6c5ce7;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: #fd79a8;
  color: #fff;
  font-weight: 600;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e84393;
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- NEW SUBMIT FUNCTION ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({ text: "Please wait..." });
    Swal.showLoading();

    const payload = {
      ...formData,
      recipientEmail: "esomesther@gmail.com",
      websiteName: "ESTHER ESOM",
    };

    console.log(payload);

    try {
      const response = await fetch("https://backend-mailer-1.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          text: "✅ Your message has been sent successfully and I shall get back to you soon!",
          icon: "success",
        });

        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        Swal.fire({ text: `❌ Error: ${data.error}` });
      }
    } catch (error) {
      Swal.fire({ text: "❌ Network error, please try again." });
      console.error("Error submitting form:", error);
    }
  };

  return (
    <ContactSection id="contact">
      <ContactTitle>Contact Me</ContactTitle>
      <ContactSubtitle>
        I’m here to help! Send me a message and I’ll get back to you as soon as possible.
      </ContactSubtitle>

      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <TextArea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
