import Image from "next/image";
import Mapa from "@/public/mapa.png";
import Line from "@/public/divh.png";

export const Info = () => {
  return (
    <section className="flex flex-col items-center gap-6 lg:gap-24">
      <div className="flex gap-6 lg:gap-24 flex-col lg:flex-row">
        <div className="flex flex-col items-center flex-wrap">
          <span className="text-white font-luxurious lg:text-8xl md:text-7xl sm:text-5xl xs:text-4xl">
            Data:
          </span>
          <span className="text-secondary font-bacasime lg:text-7xl md:text-5xl sm:text-3xl xs:text-2xl">
            19.10.2024
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-white font-luxurious lg:text-8xl md:text-7xl sm:text-5xl xs:text-4xl">
            Horário:
          </span>
          <span className="text-secondary font-bacasime lg:text-7xl md:text-5xl sm:text-3xl xs:text-2xl">
            17:00 Hrs
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center mb-4">
        <span className="text-white font-luxurious lg:text-8xl md:text-7xl sm:text-5xl xs:text-4xl">
          Local
        </span>
        <span className="text-secondary font-bacasime lg:text-7xl md:text-5xl sm:text-3xl xs:text-2xl">
          Rua dos Ipês, 161
        </span>
        <span className="text-secondary font-bacasime lg:text-7xl md:text-5xl sm:text-3xl xs:text-2xl">
          Jardim Enseada - Iacanga
        </span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div>
          <span className="text-white font-bacasime lg:text-6xl uppercase md:text-5xl">
            Como chegar:
          </span>
        </div>
        <Image
          src={Mapa}
          alt="Mapa do local do casamento"
          className="max-w-[80%]"
        />
        <Image
          src={Line}
          alt="Linha amarela lisa com um diamante amarelo centralizado"
          className="max-w-[95%] mt-6"
        />
      </div>
    </section>
  );
};
