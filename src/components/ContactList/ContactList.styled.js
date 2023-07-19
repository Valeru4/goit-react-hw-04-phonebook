import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  /* background-color: #d3d3d3; */
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: black;
  font-weight: 400;
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Button = styled.button`
  width: 25px;
  border-radius: 4px;
  border: none;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
