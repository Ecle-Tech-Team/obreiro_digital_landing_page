import React from "react";
import Header from "../components/header/header";
import Image from "next/image";

export default function Production() {
  return (
    <main
      className="w-full min-h-screen flex flex-col"
      style={{ backgroundColor: "#5271FF" }}
    >
      <Header />

      <section className=" flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className="relative mb-8">
            <div className="flex flex-col items-center">
              <div className="mt-20 mb-10">
                <Image
                  src="/logo.png" // Substitua pelo caminho da sua imagem
                  alt="Construção"
                  width={120}
                  height={120}
                  className="opacity-60"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-6xl font-black text-white mb-6">
                  PAGINA
                  <br />
                  <span className=" text-[#5271FF] text-5xl md:text-8xl bg-white w-auto rounded-lg pr-1 pl-1">
                    EM PRODUÇÃO
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-white/70 font-light mb-8 leading-relaxed pt-6">
                  Estamos trabalhando para trazer algo incrível em breve!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className=" w-[28vh] h-[5vh] bg-white text-[#5271FF] rounded-2xl text-lg font-sans font-bold">
              Voltar ao Início
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
