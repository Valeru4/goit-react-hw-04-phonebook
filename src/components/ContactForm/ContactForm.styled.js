import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 5px solid rgba(0, 0, 0, 0.1); */
`;

export const Label = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 8px;
  margin-top: 5px;
  color: grey;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  font-size: 16px;
  width: 300px;
`;

export const Button = styled.button`
  width: 150px;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
