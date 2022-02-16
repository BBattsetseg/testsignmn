import styled from 'styled-components';

export const InputSyle = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  color: 'palevioletred';
  border: none;
  width: 100%;
  border-radius: 3px;
  outline: none;
  box-shadow: -0.1em 0.1em 0 ${({ theme }) => theme.blue};
`;
