import { HoverEffect } from "./ui/card-hover-effect";
import { SKILLS } from "@/data/skills";
import { Button } from "./ui/moving-border";

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto border-t py-6 relative px-2 sm:px-0">
      <div className="">
      <Button
        borderRadius="1.75rem"
        className="bg-white text-lg dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Skills
      </Button>
      </div>
      <HoverEffect items={SKILLS} />
    </div>
  );
}

export default Skills;