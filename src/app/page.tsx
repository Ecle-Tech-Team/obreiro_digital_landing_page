import React from "react";
import Header from "./components/header/header";
import Image from "next/image";
import { Check } from "lucide-react";
import { ChartColumn } from "lucide-react";
import { Rocket } from "lucide-react";
import { ContactRound } from "lucide-react";
import { Album } from "lucide-react";
import { Star } from "lucide-react";
import { MoveDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

      <section className="flex flex-col items-center mt-[12vh]  mb-11 font-(family-name:--font-poppins)">
        <div>
          <Card className="w-[40vh] rounded-4xl">
            <CardContent className="flex items-center flex-col">
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

              <Card className="mt-25 w-[30vh] bg-[#F5F5F5] text-[#1E1E1E] font-bold shadow-md">
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

              <Card className="mt-11 w-[30vh] bg-[#F5F5F5] text-[#1E1E1E] font-bold shadow-md">
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

              <Card className="mt-11 w-[30vh] bg-[#F5F5F5] text-[#1E1E1E] font-bold shadow-md">
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

              <Card className="mt-11 w-[30vh] bg-[#F5F5F5] text-[#1E1E1E] font-bold shadow-md">
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

      <section className="flex flex-col jutify-center items-center font-(family-name:--font-poppins)">
        <Card className="w-[40vh] rounded-4xl h-auto bg-[#5271FF] mb-20">
          <CardContent>
            <div className="text-white text-center flex flex-col items-center font-bold">
              <h3 className="text-lg font-medium">Pastores e Líderes</h3>
              <h1 className="text-4xl ">Recursos de</h1>
              <h1 className="text-[#5271FF] bg-white w-auto text-4xl rounded-lg pr-1 pl-1 ">
                Gestão
              </h1>
            </div>

            <Carousel className="mt-9 ">
              <CarouselContent className="w-auto">
                <CarouselItem className="bg-white h-auto rounded-3xl flex flex-col items-center">
                  <h1 className="font-bold text-lg">Membros e Departamentos</h1>
                  <Image
                    alt="Obreiro Digital"
                    src="/carousel.png"
                    height={120}
                    width={800}
                  />
                  <p>
                    Gerencie todos os dados e informações de todos os membros e
                    departamentos da sua igreja.
                  </p>
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Obreiro Digital"
                    src="/inicio_page.png"
                    height={750}
                    width={1200}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Obreiro Digital"
                    src="/inicio_page.png"
                    height={750}
                    width={1200}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <div className="mt-8 flex justify-center">
              <Button className="bg-[#5271FF] border-2">
                Veja uma Demonstração
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className=" h-auto w-[40vh] bg-[#5271FF] rounded-4xl mb-20">
          <CardContent>
            <div className="text-white text-center flex flex-col items-center font-bold">
              <h3 className="text-lg font-medium">Pastores e Líderes</h3>
              <h1 className="text-4xl ">Recursos de</h1>
              <h1 className="text-[#5271FF] bg-white w-auto text-4xl rounded-lg pr-1 pl-1 ">
                Apoio
              </h1>
            </div>

            <Carousel className="mt-9 ">
              <CarouselContent className="w-auto">
                <CarouselItem className="bg-white h-auto rounded-3xl flex flex-col items-center">
                  <h1 className="font-bold text-lg">Gestão de Visitantes</h1>
                  <Image
                    className="w-[10vh]"
                    alt="Obreiro Digital"
                    src="/Visitantes - Obreiro.png"
                    height={100}
                    width={800}
                  />
                  <p>
                    Registre as informações de todas as pessoas que visitaram a
                    sua igreja.
                  </p>
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Obreiro Digital"
                    src="/inicio_page.png"
                    height={120}
                    width={800}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Obreiro Digital"
                    src="/inicio_page.png"
                    height={750}
                    width={1200}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <div className="mt-8 flex justify-center">
              <Button className="bg-[#5271FF] border-2">
                Veja uma Demonstração
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className=" flex flex-col items-center font-(family-name:--font-poppins) text-[#1E1E1E]">
        <Card className="w-[40vh] rounded-4xl">
          <CardContent className="mt-9 mb-9">
            <div className="text-center flex flex-col items-center">
              <h3 className="text-[#676767] font-semibold text-xl">
                O que os usuários acharam?
              </h3>
              <h1 className="text-4xl font-bold mb-3">
                {" "}
                Confiado em <span className="text-[#5271FF]">Igrejas</span>
              </h1>
              <p className="text-sm w-48 mb-11">
                Feedback de alguns usuários que utilizaram o Obreiro Digital em
                suas igrejas:
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Card className="bg-[#F5F5F5] w-[32vh] mb-11 shadow-md">
                <CardContent className="">
                  <h1 className="text-2xl font-bold mb-5">Gestão Via Dados</h1>
                  <h3 className=" mb-15">
                    “Controle e histórico completo de tudo o que acontece na sua
                    igreja, garantindo”
                  </h3>

                  <div className="flex">
                    <Star className="text-[#FFCB69]" />
                    <Star className="text-[#FFCB69]" />
                    <Star className="text-[#FFCB69]" />
                    <Star className="text-[#FFCB69]" />
                    <Star className="text-[#FFCB69]" />
                    <p className="ml-3">5 de 5</p>
                  </div>

                  <div className="font-semibold mt-5">
                    <h2 className="mb-1">Pastor Adilson Lira</h2>
                    <h2>Assembléia de Deus Belém 47</h2>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#F5F5F5] w-[32vh] mb-11 shadow-md">
                <CardContent className="">
                  <h1 className="text-2xl font-bold mb-5">Gestão Via Dados</h1>
                  <h3 className=" mb-15">
                    “Controle e histórico completo de tudo o que acontece na sua
                    igreja, garantindo”
                  </h3>

                  <div className="flex">
                    <Star className="text-[#FFCB69]" />
                    <Star className="text-[#FFCB69]" />
                    <Star className="text-[#FFCB69]" />
                    <Star className="text-[#FFCB69]" />
                    <Star className="text-[#FFCB69]" />
                    <p className="ml-3">5 de 5</p>
                  </div>

                  <div className="font-semibold mt-5">
                    <h2 className="mb-1">Pastor Adilson Lira</h2>
                    <h2>Assembléia de Deus Belém 47</h2>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#F5F5F5] w-[32vh] shadow-md">
                <CardContent className="">
                  <h1 className="text-2xl font-bold mb-5">Gestão Via Dados</h1>
                  <h3 className=" mb-15">
                    “Controle e histórico completo de tudo o que acontece na sua
                    igreja, garantindo”
                  </h3>

                  <div className="flex">
                    <Star className="text-[#FFCB69]" />
                    <Star className="text-[#FFCB69]" />
                    <Star className="text-[#FFCB69]" />
                    <Star className="text-[#FFCB69]" />
                    <Star className="text-[#FFCB69]" />
                    <p className="ml-3">5 de 5</p>
                  </div>

                  <div className="font-semibold mt-5">
                    <h2 className="mb-1">Pastor Adilson Lira</h2>
                    <h2>Assembléia de Deus Belém 47</h2>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-20 text-[#1E1E1E] font-(family-name:--font-poppins) flex flex-col items-center">
        <Card className="w-[40vh] rounded-4xl">
          <CardContent className="">
            <div className="text-center">
              <h3 className="text-[#676767] font-semibold text-xl">
                Passo a Passo
              </h3>
              <h1 className="text-4xl font-bold">
                Implementação do{" "}
                <span className="text-[#5271FF]"> Sistema</span>
              </h1>
              <p className="text-sm mt-6">
                Esses são os passos que a igreja precisa fazer para conseguir
                utilizar o Obreiro Digital dentro da gestão pastoral:
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
              <h1 className="mt-11 text-7xl font-bold">1.</h1>
              <h2 className="mt-1 mb-3 text-2xl font-bold">Cadastro</h2>
              <p className="text-base mb-8">
                No primeiro contato, você responsável pela igreja, cadastra ela
                no sistema e cria uma conta para você e as outras pessoas na
                gestão e apoio{" "}
              </p>

              <Image
                className="w-[10vh]"
                alt="Obreiro Digital"
                src="/seta-baixo.png"
                height={100}
                width={800}
              />

              <h1 className="mt-11 text-7xl font-bold">2.</h1>
              <h2 className="mt-1 mb-3 text-2xl font-bold">Treinamento</h2>
              <p className="text-base mb-8">
                Nesta fase, todas as pessoas que vão usar o sistema fazem um
                treinamento básico sobre como usar o sistema no dia-a-dia da
                igreja
              </p>

              <Image
                className="w-[10vh]"
                alt="Obreiro Digital"
                src="/seta-baixo.png"
                height={100}
                width={800}
              />
              <h1 className="mt-11 text-7xl font-bold">3.</h1>
              <h2 className="mt-1 mb-3 text-2xl font-bold">Registro</h2>
              <p className="text-base mb-8">
                Fase onde o pessoal da gestão cadastra o apoio, membros,
                departamentos, visitantes e todas as informações da igreja
                dentro do sistema
              </p>

              <Image
                className="w-[10vh]"
                alt="Obreiro Digital"
                src="/seta-baixo.png"
                height={100}
                width={800}
              />

              <h1 className="mt-11 text-7xl font-bold">4.</h1>
              <h2 className="mt-1 mb-3 text-2xl font-bold">Concluído</h2>
              <p className="text-base mb-8">
                Agora você e sua igreja estão com o Obreiro Digital em pleno
                funcionamento!
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
