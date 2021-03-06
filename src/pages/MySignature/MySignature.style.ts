import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContainerMS = styled(motion.section)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10em 0;
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
    height: 100vh;
    padding: 0;
    padding-top: 3em;
  }
`;

export { ContainerMS };
