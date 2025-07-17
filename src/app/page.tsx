import React from "react";
import Header from "./components/header/header";
import Image from "next/image";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className=" ">
      <Header />

      <section className=" h-[60vh] w-auto flex flex-col items-center font-(family-name:--font-poppins)">
        <div className="text-center font-extrabold mt-[5vh]">
          <h1 className="text-4xl flex justify-center text-[#1E1E1E]">
            Eleve sua gestão com o
          </h1>
          <h1 className="text-4xl flex justify-center text-[#5271FF] mt-1">
            Obreiro Digital
          </h1>
        </div>
        <div className="mt-[3vh] flex text-center w-[40vh]">
          <p className="font-semibold text-md">
            Gerencie toda a administração da sua igreja. Com o sistema, você tem
            confiabilidade, segurança e agilidade para sua gestão pastoral.
          </p>
        </div>
        <div className="mt-[3vh] flex flex-col">
          <button className="w-[28vh] h-[5vh] bg-[#5271FF] text-white rounded-lg text-lg font-medium">
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

      <section className="flex flex-col justify-center">
        <Card className="w-[45vh] flex justify-center">
          <CardContent className="flex justify-center">
            <Image
              alt="Obreiro Digital"
              src="/inicio_page.png"
              height={750}
              width={1200}
            />
          </CardContent>
        </Card>

        <Card className="w-[45vh] mt-[3vh] flex flex-col justify-center">
          <CardContent className="flex flex-col text-center">
            <h1 className="text-7xl font-bold text-[#1E1E1E] font-(family-name:--font-poppins)">
              3º
            </h1>
            <div className="flex justify-center">
              <h2 className="text-xl font-bold text-[#1E1E1E] font-(family-name:--font-poppins)">
                Maior Causa de{" "}
                <span className="text-[#5271FF]">Desfiliação</span>
              </h2>
            </div>
            <p className="font-semibold font-(family-name:--font-nunito) mt-[2vh] mb-[8vh]">
              São escândalos financeiros e abusos espirituais por má governança
              dentro das igrejas, segundo teólogos
            </p>
          </CardContent>
          <CardContent className="flex flex-col text-center ">
            <h1 className="text-7xl font-bold text-[#1E1E1E] font-(family-name:--font-poppins)">
              76%
            </h1>
            <div className="flex justify-center">
              <h2 className="text-xl font-bold text-[#1E1E1E] font-(family-name:--font-poppins)">
                dos Novos <span className="text-[#5271FF]">Cristãos</span>
              </h2>
            </div>
            <p className="font-semibold font-(family-name:--font-nunito) mt-[2vh] mb-[8vh]">
              Em igrejas buscam informações online (horários, programas sociais,
              transparência financeira) antes de visitar uma igreja
            </p>
          </CardContent>
          <CardContent className="flex flex-col text-center ">
            <h1 className="text-7xl font-bold text-[#1E1E1E] font-(family-name:--font-poppins)">
              3x
            </h1>
            <div className="flex justify-center">
              <h2 className="text-xl font-bold text-[#1E1E1E] font-(family-name:--font-poppins)">
                Mais Risco de <span className="text-[#5271FF]">Fechar</span>
              </h2>
            </div>
            <p className="font-semibold font-(family-name:--font-nunito) mt-[2vh] mb-[8vh]">
              Igrejas sem controle de fluxo de caixa têm mais chance de fechar
              as portas em até 5 anos em média no Brasil
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="w-[45vh]">
          <CardContent className="w-full flex flex-col">
            <h1 className="text-3xl flex  justify-center font-bold text-[#1E1E1E]">
              Por que o <span className="text-[#5271FF]">Obreiro Digital</span>
            </h1>
            <h3 className="font-(family-name:--font-nunito) font-bold text-[#1E1E1E]">
              Temos como missão não só entregar recursos e eficiência na gestão
              de igrejas, queremos elevar o{" "}
              <span className="text-[#5271FF]">nível da obra do Senhor.</span>
              <br />
              <br />
              Usar o Obreiro Digital não é apenas adquirir um sistema bonito,
              será <span className="text-[#5271FF]">capacitar</span> Pastores e
              Obreiros para trabalharem na obra do Senhor da melhor maneira
              possível.
            </h3>
            <Button>Conheça o Projeto</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
