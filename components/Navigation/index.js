import { useContext } from 'react';
import Link from '../Link';
import Container from '../Container';
import nav from './config';
import colourContext from '../../context/colour';

const Navigation = () => {
  const { colour } = useContext(colourContext);
  return (
    <Container>
      <nav className="border-b-2" style={{ borderBottomColor: colour, transition: 'border-color 0.9s ease' }}>
        <ul className="mb-1">
          {nav.items.map(item => (
            <li className="inline mr-4" key={item.title}>
              <Link text={item.title} href={item.link} />
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Navigation;
