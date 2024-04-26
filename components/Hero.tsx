import Image from "next/image";
import Logo from "@/public/logo.png";
import Line from "@/public/divh.png";
import Flowers1 from "@/public/1.png";
import Flowers2 from "@/public/3.png";

export const Hero = () => {
  return (
    <section className="flex items-center justify-center flex-col relative h-svh xs:px-2 sm:px-4 md:px-6 lg:px-9 xl:px-12 2xl:px-16">
      <Image
        src={Flowers1}
        alt="Borda decorativa composta por flores brancas e folhas"
        className="absolute left-0 top-0 max-w-[70%] xs:max-w-[55%] sm:max-w-[45%] md:max-w-[40%] lg:max-w-[35%] xl:max-w-[35%] 2xl:max-w-[30%]"
      />
      <div className="absolute flex flex-col justify-center items-center">
        <Image
          src={Flowers2}
          alt="Decoração de flor branca e folhas"
          className="max-w-[75%] xs:max-w-[65%] sm:max-w-[60%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[30%] 2xl:max-w-[25%] mb-4"
        />
        <span className="xs:text-[0.8rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[2.5rem] max-w-[100%] xs:max-w-[80%] sm:max-w-[100%] lg:max-w-[80%] leading-[3rem] xs:leading-6 lg:leading-8 xl:leading-[3rem] text-balance text-white text-center font-bacasime uppercase">
          Você está cordialmente convidado (a) para celebrar o casamento de
        </span>
        <Image
          src={Logo}
          quality={100}
          loading="eager"
          alt="Vinícius & Vitória"
          className=" max-w-[75%] xs:max-w-[75%] sm:max-w-[65%] md:max-w-[55%] lg:max-w-[55%] xl:max-w-[35%] 2xl:max-w-[40%] my-8"
        />
        <Image
          src={Flowers2}
          alt="Decoração de flor branca e folhas"
          className="max-w-[75%] xs:max-w-[65%] sm:max-w-[60%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[30%] 2xl:max-w-[25%] -scale-100"
        />
      </div>
      <Image
        src={Line}
        alt="Linha amarela lisa com um diamante amarelo centralizado"
        className="relative top-[45%] max-w-[95%]"
      />
    </section>
  );
};
