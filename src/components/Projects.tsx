// Bij afbeelding hover laat 2de afbeelding zien project
// Als je weg hovered komt de afbeelding weer terug
import ProjectCard from "./ui/ProjectCard";

export default function Projects() {
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-6">
      <ProjectCard
        primaryImage="./bfly-inside.jpg"
        secondaryImage="./bfly.outside.jpg"
      />
      <ProjectCard
        primaryImage="./bonsai-inside.jpg"
        secondaryImage="./bonsai.outside.jpg"
      />
      <ProjectCard
        primaryImage="./lcamou-inside.jpg"
        secondaryImage="./lcamou.outside.jpg"
      />
      <ProjectCard
        primaryImage="./thehive-inside.jpg"
        secondaryImage="./thehive.outside.jpg"
      />
    </div>
  );
}
