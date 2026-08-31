import avatar from "./assets/logo-livingshapes.png";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main className="flex items-center justify-center h-screen w-screen">
      <div className="grid grid-cols-5 max-w-240 h-125 w-full">
      {/* Eerste section met avatar boven en links bottom */}
      <div className="col-span-1 inline-flex flex-col">

        {/* Avatar */}
        <div className="w-full h-max bg-linear-to-br from-gray-950 to-gray-500">
          <img src={avatar} className="p-2" alt="LivingShapes Logo"/>
        </div>

        {/* Automatische spacing tussen sections */}
        <div className="m-auto"/>
        
        {/* Links */}
        <div className="inline-flex flex-col text-xl">
          <a href="#" className="hover:text-blue-700">contact</a>
          <a href="#" className="hover:text-blue-700">information</a>
          <a href="#" className="hover:text-blue-700">copy</a>
        </div>
      </div>

      {/* Tweede section met 4 projecten in een grid met margin */}
      <div className="col-span-4 ml-12 mt-12">
        <Projects/>
      </div>
      </div>
    </main>
  );
}
