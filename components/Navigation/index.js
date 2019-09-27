import { useContext } from 'react';
import Link from '../Link';
import Container from '../Container';
import nav from './config.json';
import colourContext from '../../context/colour';

const Navigation = () => {
  const { colour } = useContext(colourContext);
  return (
    <Container>
      <nav className="border-b-2" style={{ borderBottomColor: colour, transition: 'border-color 0.9s ease' }}>
        <ul className="mb-1">
          {nav.items.map(i => (
            <li className="inline mr-4">
              <Link text={i.title} href={i.link} />
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Navigation;
