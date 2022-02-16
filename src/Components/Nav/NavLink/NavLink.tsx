import { useCursorContext } from '../../../Contexts/CursorContext';

import { Children } from '../../../Types/types';

import { LinkAnchor, ListLink as StyledLink } from './NavLink.style';

interface NavLinkTypes {
  href: string;
  title: string;
  onClick?: () => void;
}

const NavLink = ({ children, href, title, onClick }: Children & NavLinkTypes) => {
  const { setIsActive } = useCursorContext();

  return (
    <StyledLink onMouseOver={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
      <LinkAnchor
        href={href}
        title={title}
        onClick={
          href == '#getsignature' ? onClick : undefined || href == '#login' ? onClick : undefined
        }
      >
        {children}
      </LinkAnchor>
    </StyledLink>
  );
};

export { NavLink };
