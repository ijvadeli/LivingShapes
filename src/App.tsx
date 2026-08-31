import avatar from "./assets/logo-livingshapes.png";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main className="flex items-center justify-center h-screen w-screen">
      <div className="grid grid-cols-5 max-w-240 h-125 w-full border-2">
      {/* Eerste section met avatar boven en links bottom */}
      <div className="col-span-1 inline-flex flex-col">
        {/* Avatar */}
        <div className="w-full h-max bg-black">
          <img src={avatar} className="p-2"/>
        </div>
        {/* Automatische spacing tussen sections */}
        <div className="m-auto"/>
        {/* Links */}
        <div className="inline-flex flex-col">
          <a href="#">contact</a>
          <a href="#">information</a>
          <a href="#">copy</a>
        </div>
      </div>

      {/* Tweede section met 4 projects in een grid met padding */}
      <div className="col-span-4 ml-10 mt-10">
        <Projects/>
      </div>
      </div>
    </main>
  );
}
