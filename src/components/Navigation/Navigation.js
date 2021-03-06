import { useRouter } from 'next/router';

import Container from '../Container';
import Divider from '../Divider';
import Link from '../Link';
import nav from './config.json';

const Navigation = () => {
  const router = useRouter();
  if (router.pathname === '/trivia/[id]') {
    return null;
  }

  return (
    <Container>
      <nav className="relative z-40">
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
};

export default Navigation;
