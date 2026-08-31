// Interface definen voor props
interface ProjectProps {
  primaryImage: string;
  secondaryImage: string;
}

// ProjectCard function met props
export default function ProjectCard(props: ProjectProps) {
  return (
    <div className="bg-gray-400 col-span-1 row-span-1">
      {/* Aparte div voor background image, wat georganiseerder */}
      {/* inside of outside hardcoden en aanpassen bij hover */}
      <div
        style={{ backgroundImage: "url(" + props.primaryImage + ")", width: "100%", height: "100%", backgroundSize: "cover"}}
      ></div>
    </div>
  );
}
