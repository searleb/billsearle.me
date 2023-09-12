import { Link } from "components/Link";

export interface ProjectLinkProps {
  href: string;
  text: string;
  tech?: string;
}

export const ProjectLink = ({ href, text, tech = "" }: ProjectLinkProps) => (
  <>
    <Link
      className="text-4xl leading-none font-semibold"
      href={href}
      text={text}
    />
    <span className="opacity-50 text-sm italic block">{tech}</span>
  </>
);
