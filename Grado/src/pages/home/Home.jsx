import JSConfetti from "js-confetti";

import { Reservation } from "../../components";
import "../App.css";
function Home() {
  const jsConfetti = new JSConfetti();

  const confetti = () => {
    jsConfetti.addConfetti();
  };
  return (
    <>
      {confetti()}
      <div className="bg-[#FDFFEE] p-10 w-full h-full  ">
        <section className="items-center flex flex-col">
          <header className="w-full">
            <img src="/logo-usta.png" alt="logo" />
            <p className=" font-imperial-script text-5xl text-[#918200]">
              Facultad de ingenieria de sistemas
            </p>
          </header>
          <div className="animate-wiggle animate-infinite animate-delay-[2000ms]">
            <img src="/graduation.jpg" alt="image" onClick={confetti} />
          </div>

          <h1 className="text-6xl sm:text-7xl text-center text-black font-italiano">
            Henry Esteban Cárdenas Alemán
          </h1>
          <h2 className="text-5xl  text-center text-[#918200] mt-5 mb-5 font-imperial-script font-semibold">
            Ingeniero de sistemas
          </h2>
          <p className="text-4xl sm:text-7xl text-center text-black font-italiano">
            Culminé otra etapa de mi vida y quiero compartir la felicidad y
            satisfacción de mi nuevo logro con ustedes.
          </p>
          <h3 className="text-5xl  text-center text-black mt-5 font-italiano">
            Acompáñame a celebrar mi
          </h3>
          <div className="mt-5 w-full ">
            <span className=" text-5xl medium-small-screen:text-6xl sm:text-8xl text-[#918200] font-italiano">
              G r a d u a c i ó n
            </span>
            <h2 className="text-6xl sm:text-8xl text-black font-imperial-script">
              2 0 2 3
            </h2>
          </div>

          <section className="w-full mt-5 flex ">
            <div className="w-full border-r-2 border-t-2 border-b-2 border-[#887A00] flex items-center justify-center p-3 ">
              <p className="text-black font-poppins">
                Lugar : Club del comercio - salon rojo, Av.Norte #48-29, hora
                7:00pm
              </p>
            </div>

            <div className=" w-full border-l-2 border-t-2 border-b-2 border-[#887A00]   flex items-center justify-center p-3">
              <p className="text-black font-poppins text-center">
                Viernes 29 de septiembre
              </p>
            </div>
          </section>
          <div className="flex flex-col  ">
            <h1 className="text-5xl  text-center text-black mt-5 font-italiano">
              Te estaremos esperando
            </h1>
          </div>
          <hr className="mt-5 mb-6 w-full" />
          <Reservation />
        </section>
      </div>
    </>
  );
}

export default Home;
