// import React, { useState } from "react";
// import styled from "styled-components";
// import Intromedia from '../Images/Intromedia.mp4'
// import { FaPlay } from "react-icons/fa";

// // Styled Components
// const VideoWrapper = styled.div`
//   position: fixed;
//   bottom: 20px;
//   left: 20px;
//   width: 250px;
// //   max-width: 50vw;
// //   background: black;
//   border-radius: 12px;
//   overflow: hidden;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
//   border: 2px solid rgba(107, 57, 57, 0.2);
//   z-index: 1000;

//   @media (max-width:768px) {
//     // width: 300px;
//   }

//   @media (max-width: 428px) {
//     width: 150px;
//   }
// `;

// const Video = styled.video`
//   width: 100%;
//   height: auto;
//   border-radius: 12px;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 8px;
//   right: 8px;
//   background: rgba(255, 0, 0, 0.8);
//   color: white;
//   border: none;
//   padding: 6px 10px;
//   font-size: 14px;
//   border-radius: 50%;
//   cursor: pointer;
//   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
//   transition: 0.3s;
//   z-index:9999;

//   &:hover {
//     background: red;
//   }
// `;

// const Play = styled.div`
//      position: fixed;
//   bottom: 20px;
//   left: 20px;
// //   width: 250px;

//   border-radius: 12px;
//   overflow: hidden;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
//   border: 2px solid rgba(107, 57, 57, 0.2);
//   z-index: 1000;
//   cursor:pointer;
//   display:flex;
//   justify-content:center;
//   align-items:center;
// `

// const IntroMedia = () => {
//   const [visible, setVisible] = useState(true);

//   if (!visible) return (
//     <Play >
//         <FaPlay 
//         onClick={()=>setVisible(true)}
//         style={{
//             fontSize:"2rem",
//             color:"rgba(0,0,255,0.5)"
//         }}
//         />
//     </Play>
//   );

//   return (
//     <VideoWrapper >
//       <CloseButton onClick={() => setVisible(false)}>✕</CloseButton>
//       <Video src={Intromedia} autoPlay loop muted />
//     </VideoWrapper>
//   );
// };

// export default IntroMedia;
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Intromedia from "../Images/Intromedia.mp4";
import { FaPlay } from "react-icons/fa";

// Styled Components
const VideoWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 250px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(107, 57, 57, 0.2);
  z-index: 1000;

  @media (max-width: 428px) {
    width: 150px;
  }
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  border-radius: 12px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255, 0, 0, 0.8);
  color: white;
  border: none;
  padding: 6px 10px;
  font-size: 14px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  z-index: 9999;

  &:hover {
    background: red;
  }
`;

const PlayButton = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  
  &:hover {
    background: rgba(0, 0, 255, 0.8);
  }
`;

const IntroMedia = () => {
  const [visible, setVisible] = useState(false);
  const videoRef = useRef(null);

  // Play video when visible state changes
  useEffect(() => {
    if (visible && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay failed: ", error);
      });
    }
  }, [visible]);

  // Automatically make video visible after 500ms
  useEffect(() => {
    const id = setTimeout(() => {
      setVisible(true); // Set visible first
    }, 500);

    return () => clearTimeout(id);
  }, []);

  return (
    <>
      {!visible ? (
        <PlayButton onClick={() => setVisible(true)}>
          <FaPlay style={{ fontSize: "1.5rem", color: "white" }} />
        </PlayButton>
      ) : (
        <VideoWrapper>
          <CloseButton onClick={() => setVisible(false)}>✕</CloseButton>
          <Video ref={videoRef} src={Intromedia} autoPlay loop playsInline controls />
        </VideoWrapper>
      )}
    </>
  );
};

export default IntroMedia;
