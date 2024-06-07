import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #61dafb;
  border: none;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #21a1f1;
  }
`;