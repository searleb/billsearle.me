import { Divider } from "components/Divider";
import { ProjectLink } from "components/ProjectLink";

interface ProjectListProps {
  title: string;
  projects: { title: string; link: string; tech: string }[];
}

export const ProjectList = ({ projects, title }: ProjectListProps) => (
  <section>
    <h2 className="font-semibold">{title}</h2>
    <Divider />
    <ul className="mb-16">
      {projects.map((project) => (
        <li key={project.title} className="mb-8">
          <ProjectLink
            href={project.link}
            text={project.title}
            tech={project.tech}
          />
        </li>
      ))}
    </ul>
  </section>
);
