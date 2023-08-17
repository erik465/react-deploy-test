import React from 'react';
import styled from 'styled-components';

const ToggleSwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
`;

const ToggleSwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: #2196F3;
  }

  &:checked + .slider:before {
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
  }
`;

const ToggleSwitch = (props) => {
  

  return (
    <ToggleSwitchWrapper>
      <ToggleSwitchInput type="checkbox" onChange={() => props.switchTheme()} />
      <Slider className="slider" />
    </ToggleSwitchWrapper>
  );
};

export default ToggleSwitch;