import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ isChecked, onChange }) => (
  <Burger htmlFor="burger">
    <input 
      type="checkbox" 
      id="burger" 
      checked={isChecked} 
      onChange={onChange} 
    />
    <span />
    <span />
    <span />
  </Burger>
);

const Burger = styled.label`
  position: relative;
  width: 40px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  display: block;

  input {
    display: none;
  }

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: white;
    border-radius: 9px;
    transition: 0.25s ease-in-out;
  }

  span:nth-of-type(1) {
    top: 0;
    transform-origin: left center;
  }

  span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  span:nth-of-type(3) {
    top: 100%;
    transform: translateY(-100%);
    transform-origin: left center;
  }

  input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0;
    left: 5px;
  }

  input:checked ~ span:nth-of-type(2) {
    width: 0;
    opacity: 0;
  }

  input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
  }
`;

export default Checkbox;
