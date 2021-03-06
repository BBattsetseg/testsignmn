import styled from 'styled-components';

const PrimaryCursor = styled.div`
  width: 2em;
  height: 2em;
  background-color: ${({ theme }) => theme.blue};
  border-radius: 50%;
  pointer-events: none;
  z-index: 31;
  position: fixed;
  transform: translate(50%, 50%);
  transition: all 300ms ease-in-out;
  transition-property: background-color, transform, mix-blend-mode;
  &.active,
  &.clicked {
    transform: translate(50%, 50%) scale(2);
    mix-blend-mode: difference;
    background-color: ${({ theme }) => theme.black};
  }
  z-index: 1003;
`;

const SecondaryCursor = styled.div`
  width: 4em;
  height: 4em;
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 50%;
  pointer-events: none;
  z-index: 30;
  position: fixed;
  transition: all 300ms ease-in-out;
  transition-property: background-color, opacity;
  z-index: 1002;
  &.active,
  &.clicked {
    opacity: 0;
    background-color: ${({ theme }) => theme.green};
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.blue};
  }
  &::before {
    left: 0;
  }
  &::after {
    left: 100%;
  }
`;

export { PrimaryCursor, SecondaryCursor };
