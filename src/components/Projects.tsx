// Bij afbeelding hover laat 2de afbeelding zien project
// Als je weg hovered komt de afbeelding weer terug
import ProjectCard from './ui/ProjectCard';

export default function Projects() {
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-4">
      <ProjectCard image="Hello"/>
      <ProjectCard image="Hello"/>
      <ProjectCard image="Hello"/>
      <ProjectCard image="Hello"/>
    </div>
  );
}
