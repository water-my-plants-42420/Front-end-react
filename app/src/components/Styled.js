import React from 'react';
import styled from 'styled-components';
import backgroundpic from '../img/background-pic.jpg';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  color: white;
  background: #04dead;
  border: none;
  border-radius: 3px;
  width: 80%;
  margin-bottom: 0.5em;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: white;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: white;
  }
`;

export const Button = styled.button`
  padding: 0.5em;
  color: white;
  background: #04dead;
  border: none;
  border-radius: 3px;
  width: 50%;
  margin-bottom: 0.5em;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: white;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: white;
  }
`;

export const Background = styled.main`
  .background-pic {
    z-index: 1;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: url(${backgroundpic});
  }
`;
