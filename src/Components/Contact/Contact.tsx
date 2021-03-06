import loadable from '@loadable/component';

import { SectionTitle } from '../SectionTitle/SectionTitle';

import { Container } from './Contact.styles';
import { Map } from './Map/Map';

type Anchor = {
  id?: string;
};

const ContactLinks = loadable(async () => {
  const { ContactLinks } = await import('./ContactLinks/ContactLinks');
  return ContactLinks;
});

const Contact = ({ id }: Anchor) => {
  return (
    <Container id={id}>
      <SectionTitle labelText="Холбоо барих" />
      <ContactLinks />
      <Map />
    </Container>
  );
};

export { Contact };
