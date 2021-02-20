import React from "react"
import styled from "styled-components"

const AnimatedButton = styled.div`
  position: relative;
  display: inline-block;
  flex: 1;
  border: 1px solid #472b2b;
  color: #ffffff;
  padding: 0.8rem 1rem 0.8rem 1rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-family: arial;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #472b2b;
    z-index: -1;
    -webkit-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
  }
  :hover {
    color: #472b2b;
  }
  :hover:before {
    -webkit-transform: scaleX(0);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
  }

  @media (max-width: 42rem) {
    text-align: center;
    width: 80vw;
    margin: 1rem 0 1rem 0;
  }
`


const AnimatedButtom = ({text  }) => {
    return(
        <AnimatedButton>{text}</AnimatedButton>
    )
}

export default AnimatedButtom;