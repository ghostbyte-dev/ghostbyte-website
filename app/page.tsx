import Image from "next/image";

export default function Home() {
  return (
    <>
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#2c2c54] to-[#0f0f2d] text-white">
      {/* Ghost */}
      <div className="relative mb-10 w-36 h-48 bg-white rounded-t-[70%] animate-float shadow-xl  animate-float">
        {/* Eyes */}
        <div className="absolute w-5 h-5 bg-[#2c2c54] rounded-full top-16 left-12"></div>
        <div className="absolute w-5 h-5 bg-[#2c2c54] rounded-full top-16 right-12"></div>
      </div>

      {/* Title & Text */}
      <h1 className="text-4xl mb-2">Ghostbyte.dev</h1>
      <p className="text-lg opacity-85 mb-2">Boo! We're not quite here yet...</p>
      <p className="text-lg opacity-85 mb-2">Our little ghosts are working behind the scenes 👻</p>
      <p className="text-lg opacity-85 mb-8">Coming soon to haunt the web!</p>

      {/* Footer */}
      <footer className="absolute bottom-5 text-sm text-gray-400 text-center w-full">
        &copy; <span id="year"></span> Ghostbyte — Building in the shadows
      </footer>
    </div>
    </>
  );
}
