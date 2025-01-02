import { classNames } from "../utils";

export default function HomeImage({ item, index, activeIndex }) {
  const isActive = index === activeIndex;

  return (
    <div className="h-screen w-full relative flex justify-center items-center text-white flex-col gap-4 py-4 px-8">
      {/* Camada do fundo com a animação */}
      <div
        className={classNames(
          "absolute inset-0 bg-cover bg-center transition-all duration-500",
          isActive ? "animate-zoom-in-out" : ""
        )}
        style={{ backgroundImage: `url(${item.img})` }}
      ></div>

      {/* Gradientes sobre o fundo */}
      <>
        <div className="absolute inset-0 bg-gradient-to-b to-orange-500 from-transparent opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-t to-orange-500 from-transparent opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-b to-gray-900 from-transparent opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t to-gray-900 from-transparent opacity-40"></div>
      </>

      {/* Conteúdo textual com animação */}
      <div
        className={classNames(
          "relative z-[1] flex flex-col items-center",
          isActive ? "fade-in-up" : ""
        )}
      >
        <p className="text-center font-medium">-- Kumo tecnologia --</p>
        <p className="text-center font-medium md:text-5xl text-3xl">{item.title}</p>
        <p className="text-center">{item.description}</p>
      </div>
    </div>
  );
}
