import loadable from '@loadable/component';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { isMobile as isMobileDevice } from 'react-device-detect';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './StyledComponents/GlobalStyle';
import { Theme } from './StyledComponents/Theme';
import { About } from './Components/About/About';
import { Cursor } from './Components/Cursor/Cursor';
import { Header } from './Components/Header/Header';
import { Nav } from './Components/Nav/Nav';
import { Separator } from './Components/Separator/Separator';
import { CursorProvider } from './Contexts/CursorContext';
import { useMobileContext } from './Contexts/MobileContext';
import { useScrollPosition } from './Hooks/useScrollPosition';

import { HeaderS } from './Components/HeaderS/HeaderS';
import { Navs } from './Components/Navs/Navs';

const Footer = loadable(async () => {
  const { Footer } = await import('./Components/Footer/Footer');
  return Footer;
});

const Contact = loadable(async () => {
  const { Contact } = await import('./Components/Contact/Contact');
  return Contact;
});

const Gallery = loadable(async () => {
  const { Gallery } = await import('./Components/CustomerHelp/Gallery');
  return Gallery;
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2em;
  font-size: clamp(0.7rem, 2vw, 1.1rem);
`;

const anchor = ['', 'about', 'gallery', 'getsignature', 'contact', 'mysignature', 'login'];
const anchorS = ['', 'aboutMe', 'pendingDoc', 'signing', 'myArchive', 'getsignature', 'login'];

const App = () => {
  const { isMobile, setIsMobile } = useMobileContext();
  const [isMySignature, setIsMySignature] = useState(0);

  useEffect(() => {
    setIsMobile(isMobileDevice);
    return () => setIsMobile(false);
  }, [setIsMobile]);

  const offsetY = useScrollPosition();
  const usesReducedMotion = useReducedMotion();

  return (
    <ThemeProvider theme={Theme}>
      <CursorProvider>
        <GlobalStyle />
        {!isMobile && !usesReducedMotion && <Cursor />}

        <Container>
          {isMySignature == 0 && (
            <>
              <Header offsetY={offsetY} />
              <Nav ids={anchor} offsetY={offsetY} />
              <About id={anchor[1]} />
              <Separator />
              <Gallery id={anchor[2]} />
              <Separator />
              <Contact id={anchor[4]} />
              <Footer />
            </>
          )}
          {isMySignature == 1 && (
            <>
              <Navs ids={anchorS} offsetY={offsetY} />
              <HeaderS offsetY={offsetY} />
              <Contact id={anchorS[6]} />
              <Footer />
            </>
          )}
        </Container>
      </CursorProvider>
    </ThemeProvider>
  );
};

export type ThemeType = typeof Theme;
export { App };
