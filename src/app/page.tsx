import React from "react";
import Header from "./components/header/header";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Header />

      <section className=" h-[80vh] w-auto flex flex-col items-center font-(family-name:--font-poppins)">
        <div className="text-center font-extrabold mt-[10vh]">
          <h1 className="text-5xl flex justify-center text-[#1E1E1E]">
            Eleve sua gestão com o
          </h1>
          <h1 className="text-5xl flex justify-center text-[#5271FF] mt-1">
            Obreiro Digital
          </h1>
        </div>
        <div className="mt-[3vh] flex text-center w-[40vh]">
          <p className="font-semibold text-lg">
            Gerencie toda a administração da sua igreja. Com o sistema, você tem
            confiabilidade, segurança e agilidade para sua gestão pastoral.
          </p>
        </div>
        <div className="mt-[3vh] flex flex-col">
          <button className="w-[28vh] h-[5vh] bg-[#5271FF] text-white rounded-lg text-xl font-medium">
            Acesse Gratuitamente
          </button>
          <button className="mt-5 w-[28vh] h-[5vh] border-2 border-[#5271FF] rounded-lg text-[#5271FF] text-lg font-medium">
            Veja uma demonstração
          </button>
        </div>
        <div className="mt-[3vh] w-[47vh] flex justify-evenly ">
          <Check />
          <h2>Sem custo de acesso</h2>
          <Check />
          <h2>Sem limitação de uso</h2>
        </div>
      </section>
    </main>
  );
}
