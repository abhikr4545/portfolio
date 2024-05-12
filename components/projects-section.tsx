import { PROJECTS } from "@/data/projects";
import { ProjectPin } from "./project-pin";
import { Button } from "./ui/moving-border";

const ProjectsSection = () => {
  return (
    <div id="project-section" className="max-w-6xl mx-auto border-t py-6 relative px-2 sm:px-0">
      <div className="">
        <Button
          borderRadius="1.75rem"
          className="bg-white text-lg dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Projects
        </Button>
      </div>
      <div className="flex flex-col sm:flex-row">
        {
          PROJECTS.map((project) => (
            <ProjectPin key={project.id} name={project.name} description={project.description} link={project.link} />
          ))
        }
      </div>
    </div>
  )
}

export default ProjectsSection;