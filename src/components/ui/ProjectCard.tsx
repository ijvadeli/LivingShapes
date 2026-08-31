// Interface definen voor props
interface ProjectProps {
  image: string;
}

// ProjectCard function met props
export default function ProjectCard(props: ProjectProps) {
  return (
    <div className="bg-gray-400 col-span-1 row-span-1">
      <p>{props.image}</p>
    </div>
  );
}
