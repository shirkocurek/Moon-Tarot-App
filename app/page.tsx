import {
  SunIcon,
  BriefcaseIcon,
  BanknotesIcon,
  HeartIcon,
  SparklesIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

function HomePage() {
  return (
    <div className="text-white flex flex-col items-center  h-screen px-2">
      <Image
        src="/moon.png"
        alt="moon"
        width={110}
        height={110}
        className="pb-3 mt-5"
      />
      <h1 className="text-4xl font-yo mb-5 text-center items-center">
        MOON TAROT
      </h1>
      <p className="text-lg font-Merriweather mb-10 text-center items-center max-w-xl text-white opacity-60">
        What does the future have in store for you? Get the answers you need
        with these Tarot readings.
      </p>
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
      <div className="flex space-x-2 text-center mt-3 pb-30">
        <div className="reading">
          <div className="card">
            <ArrowsRightLeftIcon className="h-8 w-8" />
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
            <SparklesIcon className="h-8 w-8" />
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
