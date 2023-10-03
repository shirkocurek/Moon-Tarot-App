import {
  SunIcon,
  BriefcaseIcon,
  BanknotesIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

function HomePage() {
  return (
    <div className="text-white flex flex-col items-center  h-screen px-2">
      <Image
        src="/moon.png"
        alt="moon"
        width={120}
        height={120}
        className="pb-5 mt-8"
      />
      <h1 className="text-3xl font-bold mb-2 text-center items-center">
        Welcome to Moon Tarot
      </h1>
      <h6 className="text-base font-bold mb-10 text-center items-center">
        Choose a reading
      </h6>
      <div className="flex space-x-2 text-center mt-5">
        <div className="reading">
          <div className="card">
            <SunIcon className="h-8 w-8" />
            <h2 className="reading-header">Daily Card</h2>
            <Image
              alt="cards"
              src="/Cards-daily.png"
              width={150}
              height={150}
              className="cards"
            />
          </div>
        </div>
        <div className="reading">
          <div className="card">
            <HeartIcon className="h-8 w-8" />
            <h2 className="reading-header">Love Reading</h2>
            <Image
              alt="cards"
              src="/Cards-love.png"
              width={150}
              height={150}
              className="cards"
            />
          </div>
        </div>
        <div className="reading">
          <div className="card">
            <BriefcaseIcon className="h-8 w-8" />
            <h2 className="reading-header">Career Reading</h2>
            <Image
              alt="cards"
              src="/Cards-career.png"
              width={150}
              height={150}
              className="cards"
            />
          </div>
        </div>
      </div>
      <div className="flex space-x-2 text-center mt-3 pb-10">
        <div className="reading">
          <div className="card">
            <SunIcon className="h-8 w-8" />
            <h2 className="reading-header">Yes/No tarot</h2>
            <Image
              alt="cards"
              src="/Cards-yesno.png"
              width={150}
              height={150}
              className="cards"
            />
          </div>
        </div>
        <div className="reading">
          <div className="card">
            <BanknotesIcon className="h-8 w-8" />
            <h2 className="reading-header">Money</h2>
            <Image
              alt="cards"
              src="/Cards-money.png"
              width={150}
              height={150}
              className="cards"
            />
          </div>
        </div>
        <div className="reading">
          <div className="card">
            <BriefcaseIcon className="h-8 w-8" />
            <h2 className="reading-header">Ying/Yang tarot</h2>
            <Image
              alt="cards"
              src="/Cards-yingyang.png"
              width={150}
              height={150}
              className="cards"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
