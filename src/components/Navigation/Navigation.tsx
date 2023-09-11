import { Container } from "components/Container";
import { Divider } from "components/Divider";
import { Link } from "components/Link";
import { useRouter } from "next/router";

import nav from "./config.json";

export const Navigation = () => {
  const router = useRouter();
  if (router.pathname === "/happy-birthday") {
    return null;
  }

  return (
    <Container>
      <nav className="relative z-40">
        <ul className="mb-1">
          {nav.items.map((item) => (
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
