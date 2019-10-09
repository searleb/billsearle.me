import { useContext } from 'react';
import Link from '../Link';
import Container from '../Container';
import nav from './config.json';
import colourContext from '../../context/colour';

const Navigation = () => {
  const { colour } = useContext(colourContext);
  return (
    <Container>
      <nav className="border-b-2 transition-border transition-750" style={{ borderBottomColor: colour }}>
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
