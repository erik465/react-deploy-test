import React, { useEffect } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';

const TypingElement = styled.span`
    max-width: ${props => props.maxWidth}px;
    min-height: ${props => props.minHeight}px;
    text-align: center;
    margin: 0;
    font-size: 56px;
`;
const TypedText = (props) => {
  useEffect(() => {
    const options = {
      strings: [props.string],
      showCursor: false,
      typeSpeed: 50,
      backSpeed: 30,
      loop: false,
    };

    const typed = new Typed('.typing-element', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <TypingElement minHeight={props.minHeight} maxWidth={props.maxWidth} className="typing-element"></TypingElement>;
};

export default TypedText;