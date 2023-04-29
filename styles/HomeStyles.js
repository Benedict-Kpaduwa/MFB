import styled from "styled-components";
//Animation
const { motion } = require("framer-motion");

export const HomePageWrapper = styled(motion.div)`
    //width: 100vw !important;
    height: 100vh !important;
    margin: 2;
    padding: 2;
    //position:relative;
    //overflow: hidden;
    display:flex;
    flex-direction:column;
    // justify-content:center;
    align-items:center;

    h1 {
      color:white;
      font-family: "Tropikal-Bold";
      text-decoration:none;
      font-size:35px;
  
    }

    button {
      color:white;
      font-family: "Tropikal-Bold";
      text-decoration:none;
      font-size:25px;
    }
`;