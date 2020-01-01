import Link from '../Link';
import Container from '../Container';
import nav from './config.json';
import Divider from '../Divider';

const Navigation = () => (
  <Container>
    <nav>
      <ul className="mb-1">
        {nav.items.map(item => (
          <li className="inline mr-4" key={item.title}>
            <Link text={item.title} href={item.link} />
          </li>
        ))}
      </ul>
      <Divider />
    </nav>
  </Container>
);

export default Navigation;
