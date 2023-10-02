import { SunIcon, BriefcaseIcon, ExclamationTriangleIcon, HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function HomePage() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2">
      <Image src="/moon.png" alt="moon" width={150} height={150} className="pb-5"/>
      <h1 className="text-5xl font-bold mb-2 text-center items-center">Moon Tarot</h1>
      <h3 className="text-2xl font-bold mb-20 text-center items-center">Choose a reading</h3>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="card">
            <SunIcon className="h-8 w-8" />
            <h2 className="font-bold text-2xl">Daily Card</h2>
          </div>
          <div className="space-y-2">
            <Image alt="cards" src="/card.png" width={150} height={150} className="cards"/>
          </div>
        </div>
        <div>
          <div className="card">
            <HeartIcon className="h-8 w-8" />
            <h2 className="font-bold text-2xl">Love Reading</h2>
          </div>
          <div className="space-y-2">
          <Image alt="cards" src="/card.png" width={150} height={150} className="cards"/>
          </div>
        </div>
        <div>
          <div className="card">
            <BriefcaseIcon className="h-8 w-8" />
            <h2 className="font-bold text-2xl">Career Reading</h2>
          </div>
          <div className="space-y-2">
          <Image alt="cards" src="/card.png" width={150} height={150} className="cards"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage