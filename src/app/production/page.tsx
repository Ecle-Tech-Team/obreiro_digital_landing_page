import React from "react";
import Header from "../components/header/header";
import Image from "next/image";
import Link from "next/link";

export default function Production() {
  return (
    <main
      className="w-full min-h-screen flex flex-col"
      style={{ backgroundColor: "#5271FF" }}
    >
      <Header />

      <section className=" flex items-center justify-center">
        <div className="w-full text-center lg:mt-20">
          <div className="relative mb-8 flex flex-col lg:flex-row lg:justify-evenly items-center">
            <div className="mt-20 mb-10 lg:m-0">
              <Image
                className="opacity-60 w-[15vh] xl:w-full"
                src="/logo.png"
                alt="Construção"
                width={1020}
                height={120}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-6xl font-black text-white mb-6">
                PAGINA
                <br />
                <span className="text-[#5271FF] text-5xl lg:text-5xl bg-white rounded-lg pr-1 pl-1">
                  EM PRODUÇÃO
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 font-light mb-8 leading-relaxed pt-6">
                Estamos trabalhando para trazer algo incrível em breve!
              </p>

              <div className="flex flex-col justify-center items-center">
                <Link href="/">
                  <button className=" w-[28vh] h-[5vh] bg-white text-[#5271FF] rounded-2xl text-lg font-sans font-bold cursor-pointer">
                    Voltar ao Início
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
