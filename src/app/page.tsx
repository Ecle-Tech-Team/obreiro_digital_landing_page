import React from "react";
import Header from "./components/header/header";
import Image from "next/image";
import { Check } from "lucide-react";
import { ChartColumn } from "lucide-react";
import { Rocket } from "lucide-react";
import { ContactRound } from "lucide-react";
import { Album } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className=" ">
      <Header />

      <section className=" h-[60vh] w-auto flex flex-col items-center font-(family-name:--font-poppins)">
        <div className="text-center font-extrabold mt-[5vh]">
          <h1 className="text-5xl flex justify-center text-[#1E1E1E]">
            Eleve sua gestão com o
          </h1>
          <h1 className="text-5xl flex justify-center text-[#5271FF] mt-1">
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

      <section className="flex flex-col items-center mb-11">
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

      <section className="flex flex-col items-center mb-11 font-(family-name:--font-poppins)">
        <div>
          <Card className="w-[45vh]">
            <CardContent className="">
              <div className="w-full flex flex-col">
                <h1 className="text-5xl pt-8 pb-10 font-bold text-[#1E1E1E]">
                  Por que o
                  <br />
                  <span className="text-[#5271FF]">Obreiro Digital?</span>
                </h1>
                <h3 className="font-(family-name:--font-nunito) font-bold text-[#1E1E1E]">
                  Temos como missão não só entregar recursos e eficiência na
                  gestão de igrejas, queremos elevar o{" "}
                  <span className="text-[#5271FF]">
                    nível da obra do Senhor.
                  </span>
                  <br />
                  <br />
                  Usar o Obreiro Digital não é apenas adquirir um sistema
                  bonito, será <span className="text-[#5271FF]">
                    capacitar
                  </span>{" "}
                  Pastores e Obreiros para trabalharem na obra do Senhor da
                  melhor maneira possível.
                </h3>
              </div>

              <div>
                <Button className="bg-[#5271FF] mt-11 w-[21vh] text-md">
                  Conheça o Projeto
                </Button>
              </div>

              <Card className="mt-25 w-[35vh] bg-[#F5F5F5] text-[#1E1E1E] font-bold shadow-md">
                <CardContent>
                  <div className="rounded-full bg-[#5271FF] w-13 h-13 text-white flex justify-center items-center">
                    <ChartColumn />
                  </div>
                  <h1 className="text-2xl font-bold mt-4 mb-6">
                    Gestão Via Dados
                  </h1>
                  <p>
                    Controle e histórico completo de tudo o que acontece na sua
                    igreja, garantindo uma gestão mais inteligente e preparada
                    para avanços da sociedade
                  </p>
                </CardContent>
              </Card>

              <Card className="mt-11 w-[35vh] bg-[#F5F5F5] text-[#1E1E1E] font-bold shadow-md">
                <CardContent>
                  <div className="rounded-full bg-[#5271FF] w-13 h-13 text-white flex justify-center items-center">
                    <Rocket />
                  </div>
                  <h1 className="text-2xl font-bold mt-4 mb-6">
                    Eficiência e Agilidade
                  </h1>
                  <p>
                    O Obreiro Digital trará a segurança de que a obra do Senhor
                    está eficiente e ágil para Pastores e Líderes de Igreja.
                  </p>
                </CardContent>
              </Card>

              <Card className="mt-11 w-[35vh] bg-[#F5F5F5] text-[#1E1E1E] font-bold shadow-md">
                <CardContent>
                  <div className="rounded-full bg-[#5271FF] w-13 h-13 text-white flex justify-center items-center">
                    <ContactRound />
                  </div>
                  <h1 className="text-2xl font-bold mt-4 mb-6">
                    Experiência do Usuário
                  </h1>
                  <p>
                    Garantiremos a melhor experiência de usuário para que seja
                    fácil usar o sistema independente do nível técnico
                  </p>
                </CardContent>
              </Card>

              <Card className="mt-11 w-[35vh] bg-[#F5F5F5] text-[#1E1E1E] font-bold shadow-md">
                <CardContent>
                  <div className="rounded-full bg-[#5271FF] w-13 h-13 text-white flex justify-center items-center">
                    <Album />
                  </div>
                  <h1 className="text-2xl font-bold mt-4 mb-6">
                    Alfabetização Digital
                  </h1>
                  <p>
                    Conhecemos a falta de acesso e conhecimento em tecnologia de
                    alguns irmãos, sabendo disso, daremos todo o suporte
                    necessário em todas áreas.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
