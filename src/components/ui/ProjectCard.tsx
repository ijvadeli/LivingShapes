import { useState } from "react";

// Interface definen voor props
interface ProjectProps {
  primaryImage: string;
  secondaryImage: string;
}

// ProjectCard function met props
export default function ProjectCard(props: ProjectProps) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="bg-gray-400 col-span-1 row-span-1">
      {/* Aparte div voor background image, wat georganiseerder */}
      {/* inside of outside hardcoden en aanpassen bij hover */}
      <div
        style={{ backgroundImage: isHover ? "url(" + props.primaryImage + ")": "url(" + props.secondaryImage + ")", width: "100%", height: "100%", backgroundSize: "cover"}}
        onMouseEnter={() => setIsHover(!isHover)}
        onMouseLeave={() => setIsHover(!isHover)}
      ></div>
    </div>
  );
}
