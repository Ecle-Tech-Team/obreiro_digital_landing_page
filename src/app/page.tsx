import React from "react";
import Header from "./components/header/header";
import Image from "next/image";
import { Check } from "lucide-react";
import { ChartColumn } from "lucide-react";
import { Rocket } from "lucide-react";
import { ContactRound } from "lucide-react";
import { Album } from "lucide-react";
import { Star } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Clock } from "lucide-react";
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
  const plans = [
    {
      title: "Starter",
      price: "R$10,00",
      bgColor: "bg-[#F5F5F5]",
      buttonColor: "bg-[#5271FF] text-white",
      logo: "/logo-dark.png",
      features: [
        "Nome no hall de lendas",
        "Cursos extras (informática, design, social media, gestão)",
      ],
    },
    {
      title: "Bronze",
      price: "R$49,99",
      bgColor: "bg-[#5271FF] text-white",
      buttonColor: "bg-white text-[#5271FF]",
      logo: "/logo.png",
      features: [
        "Tudo do starter",
        "Certificado de conclusão de cursos extras",
      ],
    },
    {
      title: "Prata",
      price: "R$299,00",
      bgColor: "bg-[#F5F5F5]",
      buttonColor: "bg-[#5271FF] text-white",
      logo: "/logo-dark.png",
      features: [
        "Tudo dos planos anteriores",
        "Suporte VIP",
        "Reunião com os devs",
      ],
    },
    {
      title: "Ouro",
      price: "R$499,00",
      bgColor: "bg-[#F5F5F5]",
      buttonColor: "bg-[#5271FF] text-white",
      logo: "/logo-dark.png",
      features: [
        "Tudo dos planos anteriores",
        "Acesso a versões beta",
        "Logo da Igreja no sistema",
      ],
    },
    {
      title: "Patriarca",
      price: "R$1.000,00",
      bgColor: "bg-[#F5F5F5]",
      buttonColor: "bg-[#5271FF] text-white",
      logo: "/logo-dark.png",
      features: [
        "Tudo dos planos anteriores",
        "Mentoria de gestão da sua igreja",
        "Mimos (chaveiros, canecas e camisetas)",
      ],
    },
  ];

  return (
    <main className="font-poppins">
      <Header />

      <section className="h-[60vh] w-auto flex flex-col items-center ">
        <div className="text-center font-extrabold mt-[5vh] xl:mt-[16vh]">
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
        <div className="mt-[3vh] xl:mt-[6vh] flex flex-col xl:flex-row xl:items-center xl:gap-8">
          <Button className="w-[28vh] h-[5vh] bg-[#5271FF] text-white rounded-lg text-lg font-medium">
            Acesse Gratuitamente
          </Button>
          <Button className="mt-5 xl:mt-0 w-[28vh] h-[5vh] border-2 bg-transparent border-[#5271FF] rounded-lg text-[#5271FF] text-lg font-medium">
            Veja uma demonstração
          </Button>
        </div>
        <div className="mt-[3vh] w-[50vh] flex justify-evenly xl:mt-[5vh]">
          <Check />
          <h2>Sem custo de acesso</h2>
          <Check />
          <h2>Sem limitação de uso</h2>
        </div>
      </section>

      <section className="flex flex-col items-center mb-11 xl:mt-[20vh]">
        <div className="w-full flex justify-center">
          <Image
            className="w-[100%] h-[25%] xl:w-[80%] xl:h-[50%]"
            alt="Obreiro Digital"
            src="/inicio_page.png"
            height={750}
            width={1200}
          />
        </div>

        <Card className="w-[100%] flex flex-col justify-center border-0 xl:mb-15">
          <div className="xl:flex xl:items-center xl:mb-0">
            <CardContent className="flex flex-col text-center">
              <h1 className="text-7xl xl:mt-[8vh] font-bold text-[#1E1E1E] font-poppins">
                3º
              </h1>
              <div className="flex justify-center">
                <h2 className="text-xl font-bold xl:mb-5 text-[#1E1E1E] font-poppins">
                  Maior Causa de{" "}
                  <span className="text-[#5271FF]">Desfiliação</span>
                </h2>
              </div>
              <p className="font-semibold font-nunito mt-[2vh] mb-[8vh]">
                São escândalos financeiros e abusos espirituais por má
                governança dentro das igrejas, segundo teólogos
              </p>
            </CardContent>
            <CardContent className="flex flex-col text-center">
              <h1 className="text-7xl font-bold text-[#1E1E1E] font-poppins">
                76%
              </h1>
              <div className="flex justify-center">
                <h2 className="text-xl font-bold text-[#1E1E1E] font-poppins">
                  dos Novos <span className="text-[#5271FF]">Cristãos</span>
                </h2>
              </div>
              <p className="font-semibold font-nunito mt-[2vh] xl:mb-0 mb-[8vh]">
                Em igrejas buscam informações online (horários, programas
                sociais, transparência financeira) antes de visitar uma igreja
              </p>
            </CardContent>
            <CardContent className="flex flex-col text-center">
              <h1 className="text-7xl font-bold text-[#1E1E1E] font-poppins">
                3x
              </h1>
              <div className="flex justify-center">
                <h2 className="text-xl font-bold text-[#1E1E1E] font-poppins">
                  Mais Risco de <span className="text-[#5271FF]">Fechar</span>
                </h2>
              </div>
              <p className="font-semibold font-nunito mt-[2vh] xl:mb-0 mb-[8vh]">
                Igrejas sem controle de fluxo de caixa têm mais chance de fechar
                as portas em até 5 anos em média no Brasil
              </p>
            </CardContent>
          </div>
        </Card>
      </section>

      <section className="flex flex-col items-center mt-[12vh] mb-11  font-poppins">
        <div className="flex justify-center">
          <Card className="w-[40vh] xl:w-[185vh] xl:h-[100vh] rounded-3xl xl:mb-25">
            <CardContent className="flex items-center flex-col">
              <div className="xl:flex">
                <div className="xl:w-[30%]">
                  <div className="w-full flex flex-col">
                    <h1 className="text-5xl pt-8 pb-10 font-bold text-[#1E1E1E]">
                      Por que o
                      <br />
                      <span className="text-[#5271FF]">Obreiro Digital?</span>
                    </h1>
                    <h3 className="font-nunito font-bold text-[#1E1E1E]">
                      Temos como missão não só entregar recursos e eficiência na
                      gestão de igrejas, queremos elevar o{" "}
                      <span className="text-[#5271FF]">
                        nível da obra do Senhor.
                      </span>
                      <br />
                      <br />
                      Usar o Obreiro Digital não é apenas adquirir um sistema
                      bonito, será{" "}
                      <span className="text-[#5271FF]">capacitar</span> Pastores
                      e Obreiros para trabalharem na obra do Senhor da melhor
                      maneira possível.
                    </h3>
                  </div>

                  <div>
                    <Button className="bg-[#5271FF] mt-11 w-[21vh] text-md">
                      Conheça o Projeto
                    </Button>
                  </div>
                </div>

                <div className="xl:w-[80%]">
                  <div className="xl:flex xl:justify-evenly">
                    <Card className="mt-11 w-[30vh] xl:w-[40vh] bg-[#F5F5F5] text-[#1E1E1E] font-bold shadow-md">
                      <CardContent>
                        <div className="rounded-full bg-[#5271FF] w-13 h-13 text-white flex justify-center items-center">
                          <ChartColumn />
                        </div>
                        <h1 className="text-2xl xl:text-xl font-bold mt-4 mb-6">
                          Gestão Via Dados
                        </h1>
                        <p className="xl:text-sm">
                          Controle e histórico completo de tudo o que acontece
                          na sua igreja, garantindo uma gestão mais inteligente
                          e preparada para avanços da sociedade
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="mt-11 w-[30vh] xl:w-[40vh] bg-[#F5F5F5] text-[#1E1E1E] font-bold shadow-md">
                      <CardContent>
                        <div className="rounded-full bg-[#5271FF] w-13 h-13 text-white flex justify-center items-center">
                          <Rocket />
                        </div>
                        <h1 className="text-2xl xl:text-xl font-bold mt-4 mb-6">
                          Eficiência e Agilidade
                        </h1>
                        <p className="xl:text-sm">
                          O Obreiro Digital trará a segurança de que a obra do
                          Senhor está eficiente e ágil para Pastores e Líderes
                          de Igreja.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="xl:flex xl:justify-evenly">
                    <Card className="mt-11 w-[30vh] xl:w-[40vh] bg-[#F5F5F5] text-[#1E1E1E] font-bold shadow-md">
                      <CardContent>
                        <div className="rounded-full bg-[#5271FF] w-13 h-13 text-white flex justify-center items-center">
                          <ContactRound />
                        </div>
                        <h1 className="text-2xl xl:text-xl font-bold mt-4 mb-6">
                          Experiência do Usuário
                        </h1>
                        <p className="xl:text-sm">
                          Garantiremos a melhor experiência de usuário para que
                          seja fácil usar o sistema independente do nível
                          técnico
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="mt-11 w-[30vh] xl:w-[40vh] xl:h-[40vh] bg-[#F5F5F5] text-[#1E1E1E] font-bold shadow-md">
                      <CardContent>
                        <div className="rounded-full bg-[#5271FF] w-13 h-13 text-white flex justify-center items-center">
                          <Album />
                        </div>
                        <h1 className="text-2xl xl:text-xl font-bold mt-4 mb-6">
                          Alfabetização Digital
                        </h1>
                        <p className="xl:text-sm">
                          Conhecemos a falta de acesso e conhecimento em
                          tecnologia de alguns irmãos, sabendo disso, daremos
                          todo o suporte necessário em todas áreas.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center font-poppins">
        {/* Gestão Card */}
        <Card className="w-[40vh] xl:w-[185vh] rounded-3xl h-auto bg-[#5271FF] mb-20 xl:mb-35">
          <CardContent>
            <div className="text-white text-center flex flex-col items-center font-bold">
              <h3 className="text-lg font-medium">Pastores e Líderes</h3>
              <h1 className="text-4xl">Recursos de</h1>
              <h1 className="text-[#5271FF] bg-white w-auto text-4xl rounded-lg pr-1 pl-1">
                Gestão
              </h1>
            </div>

            {/* Mobile: Carousel */}
            <div className="xl:hidden mt-9">
              <Carousel>
                <CarouselContent className="w-auto">
                  <CarouselItem className="bg-white h-auto rounded-3xl flex flex-col items-center">
                    <h1 className="font-bold text-lg">
                      Membros e Departamentos
                    </h1>
                    <Image
                      alt="Obreiro Digital"
                      src="/carousel.png"
                      height={120}
                      width={800}
                    />
                    <p>
                      Gerencie todos os dados e informações de todos os membros
                      e departamentos da sua igreja.
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
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden xl:grid xl:grid-cols-2 xl:gap-4 xl:mt-9">
              <div className="bg-white h-auto rounded-3xl flex flex-col p-10">
                <h1 className="font-bold text-2xl">Membros e Departamentos</h1>
                <Image
                  alt="Obreiro Digital"
                  src="/carousel.png"
                  height={120}
                  width={800}
                  className="w-full h-auto"
                />
                <p className="text-[#676767] font-bold">
                  Gerencie todos os dados e informações de todos os membros e
                  departamentos da sua igreja.
                </p>
              </div>
              <div className="bg-white h-auto rounded-3xl flex flex-col p-10">
                <h1 className="font-bold text-2xl">Gestão de Pastores</h1>
                <Image
                  alt="Obreiro Digital"
                  src="/gestao de pastores.png"
                  height={750}
                  width={1200}
                  className="w-full h-auto"
                />
                <p className="text-[#676767] font-bold">
                  Gerencie todos os dados e acessos de todos os obreiros e
                  voluntários da sua igreja.
                </p>
              </div>
              <div className="bg-white h-auto rounded-3xl flex flex-col p-10">
                <h1 className="font-bold text-2xl">Estoque e Pedidos</h1>
                <Image
                  alt="Obreiro Digital"
                  src="/estoque.png"
                  height={750}
                  width={1200}
                  className="w-full h-auto"
                />
                <p className="text-[#676767] font-bold">
                  Cadastre os eventos que vão acontecer dentro e fora da sua
                  igreja.
                </p>
              </div>
              <div className="bg-white h-auto rounded-3xl flex flex-col p-10">
                <h1 className="font-bold text-2xl">Faça Eventos</h1>
                <Image
                  alt="Obreiro Digital"
                  src="/eventos.png"
                  height={750}
                  width={1200}
                  className="w-full h-auto"
                />
                <p className="text-[#676767] font-bold">
                  Gestão de estoque e demandas para o dia-a-dia da obra do
                  Senhor.
                </p>
              </div>
              <div className="bg-white h-auto rounded-3xl flex flex-col p-10">
                <h1 className="font-bold text-2xl">Controle Financeiro</h1>
                <Image
                  alt="Obreiro Digital"
                  src="/financeiro.png"
                  height={750}
                  width={1200}
                  className="w-full h-auto"
                />
                <p className="text-[#676767] font-bold">
                  Controle os gastos, saldo, doações, dízimos e todas as
                  transações da igreja.
                </p>
              </div>
              <div className="bg-white h-auto rounded-3xl flex flex-col p-10">
                <h1 className="font-bold text-2xl">Gere Relatórios</h1>
                <Image
                  alt="Obreiro Digital"
                  src="/relatorios.png"
                  height={750}
                  width={1200}
                  className="w-full h-auto"
                />
                <p className="text-[#676767] font-bold">
                  Gerencie todos os dados e informações de todos os membros da
                  sua igreja.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button className="bg-[#5271FF] border-2">
                Veja uma Demonstração
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Apoio Card */}
        <Card className="h-auto w-[40vh] xl:w-[185vh] bg-[#5271FF] rounded-3xl mb-20 xl:mb-35">
          <CardContent>
            <div className="text-white text-center flex flex-col items-center font-bold">
              <h3 className="text-lg font-medium">Pastores e Líderes</h3>
              <h1 className="text-4xl">Recursos de</h1>
              <h1 className="text-[#5271FF] bg-white w-auto text-4xl rounded-lg pr-1 pl-1">
                Apoio
              </h1>
            </div>

            {/* Mobile: Carousel */}
            <div className="xl:hidden mt-9">
              <Carousel>
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
                      Registre as informações de todas as pessoas que visitaram
                      a sua igreja.
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
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden xl:grid xl:grid-cols-2 xl:gap-4 xl:mt-9">
              <div className="bg-white h-auto rounded-3xl flex flex-col items-center p-10">
                <h1 className="font-bold text-2xl">Gestão de Visitantes</h1>
                <Image
                  className="w-[20vh]"
                  alt="Obreiro Digital"
                  src="/Visitantes - Obreiro.png"
                  height={100}
                  width={800}
                />
                <p className="text-[#676767] font-bold">
                  Registre as informações de todas as pessoas que visitaram a
                  sua igreja.
                </p>
              </div>
              <div className="bg-white h-auto rounded-3xl flex flex-col items-center p-10">
                <h1 className="font-bold text-2xl">Faça Pedidos</h1>
                <Image
                  alt="Obreiro Digital"
                  src="/pedidos mobile.png"
                  height={120}
                  width={800}
                  className="w-[20vh]"
                />
                <p className="text-[#676767] font-bold">
                  Gestão de demandas para o dia-a-dia da obra do Senhor.
                </p>
              </div>
              <div className="bg-white h-auto rounded-3xl flex flex-col items-center p-10">
                <h1 className="font-bold text-2xl">Acompanhe Eventos</h1>
                <Image
                  alt="Obreiro Digital"
                  src="/eventos mobile.png"
                  height={750}
                  width={1200}
                  className="w-[20vh]"
                />
                <p className="text-[#676767] font-bold">
                  Veja os eventos que vão acontecer dentro e fora da sua igreja.
                </p>
              </div>
              <div className="bg-white h-auto rounded-3xl flex flex-col items-center p-10">
                <h1 className="font-bold text-2xl">Registre Avisos</h1>
                <Image
                  alt="Obreiro Digital"
                  src="/avisos mobile.png"
                  height={750}
                  width={1200}
                  className="w-[20vh]"
                />
                <p className="text-[#676767] font-bold">
                  Salve avisos importantes para o funcionamento diário para a
                  sua igreja.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button className="bg-[#5271FF] border-2">
                Veja uma Demonstração
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col items-center font-poppins text-[#1E1E1E]">
        <Card className="w-[40vh] xl:w-[185vh] xl:h-[110vh] rounded-3xl xl:mb-20">
          <CardContent className="mt-9 mb-9">
            <div className="text-center xl:text-start flex flex-col items-center xl:items-start xl:ml-15 xl:mb-15">
              <h3 className="text-[#676767] font-semibold text-xl">
                O que os usuários acharam?
              </h3>
              <h1 className="text-4xl xl:text-5xl font-bold mb-3">
                Confiado em <span className="text-[#5271FF]">Igrejas</span>
              </h1>
              <p className="text-sm xl:text-base xl:font-semibold w-48 xl:w-[40%] mb-11">
                Feedback de alguns usuários que utilizaram o Obreiro Digital em
                suas igrejas:
              </p>
            </div>

            <div className="flex flex-col xl:flex-row xl:justify-evenly items-center">
              <Card className="bg-[#F5F5F5] w-[32vh] xl:w-[50vh] xl:h-[50vh] mb-11 xl:mb-0 shadow-md">
                <CardContent className="">
                  <h1 className="text-2xl font-bold mb-5">Gestão Via Dados</h1>
                  <h3 className="mb-15">
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
              <Card className="bg-[#F5F5F5] w-[32vh] xl:w-[50vh] xl:h-[50vh] mb-11 xl:mb-0 shadow-md">
                <CardContent className="">
                  <h1 className="text-2xl font-bold mb-5">Gestão Via Dados</h1>
                  <h3 className="mb-15">
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
              <Card className="bg-[#F5F5F5] w-[32vh] xl:w-[50vh] xl:h-[50vh] shadow-md">
                <CardContent className="">
                  <h1 className="text-2xl font-bold mb-5">Gestão Via Dados</h1>
                  <h3 className="mb-15">
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

      <section className="mt-20 text-[#1E1E1E] font-poppins flex flex-col items-center">
        <Card className="w-[40vh] xl:w-[185vh] rounded-3xl xl:mb-20">
          <CardContent className="xl:px-[10vh]">
            <div className="text-center xl:text-start xl:mb-10 xl:mt-10 xl:w-[80vh]">
              <h3 className="text-[#676767] font-semibold text-xl">
                Passo a Passo
              </h3>
              <h1 className="text-4xl xl:text-5xl font-bold">
                Implementação do <span className="text-[#5271FF]">Sistema</span>
              </h1>
              <p className="text-sm xl:text-base xl:font-semibold mt-6">
                Esses são os passos que a igreja precisa fazer para conseguir
                utilizar o Obreiro Digital dentro da gestão pastoral:
              </p>
            </div>
            <div className="text-center xl:text-start flex flex-col items-center xl:flex-row">
              <div className="xl:flex xl:flex-col xl:w-[90vh]">
                <h1 className="mt-11 xl:mb-3 text-7xl font-bold">1.</h1>
                <h2 className="mt-1 mb-3 text-2xl font-bold">Cadastro</h2>
                <p className="text-base mb-8">
                  No primeiro contato, você responsável pela igreja, cadastra
                  ela no sistema e cria uma conta para você e as outras pessoas
                  na gestão e apoio
                </p>
              </div>

              <Image
                className="w-[10vh] xl:rotate-270 mx-5"
                alt="Obreiro Digital"
                src="/seta-baixo.png"
                height={100}
                width={800}
              />
              <div className="xl:flex xl:flex-col xl:w-[90vh]">
                <h1 className="mt-11 xl:mb-3 text-7xl font-bold">2.</h1>
                <h2 className="mt-1 mb-3 text-2xl font-bold">Treinamento</h2>
                <p className="text-base mb-8">
                  Nesta fase, todas as pessoas que vão usar o sistema fazem um
                  treinamento básico sobre como usar o sistema no dia-a-dia da
                  igreja
                </p>
              </div>

              <Image
                className="w-[10vh] xl:rotate-270 mx-5"
                alt="Obreiro Digital"
                src="/seta-baixo.png"
                height={100}
                width={800}
              />

              <div className="xl:flex xl:flex-col xl:w-[90vh]">
                <h1 className="mt-11 xl:mb-3 text-7xl font-bold">3.</h1>
                <h2 className="mt-1 mb-3 text-2xl font-bold">Registro</h2>
                <p className="text-base mb-8">
                  Fase onde o pessoal da gestão cadastra o apoio, membros,
                  departamentos, visitantes e todas as informações da igreja
                  dentro do sistema
                </p>
              </div>

              <Image
                className="w-[10vh] xl:rotate-270 mx-5"
                alt="Obreiro Digital"
                src="/seta-baixo.png"
                height={100}
                width={800}
              />
              <div className="xl:flex xl:flex-col xl:mb-5">
                <h1 className="mt-11 xl:mb-3 text-7xl font-bold">4.</h1>
                <h2 className="mt-1 mb-3 text-2xl font-bold">Concluído</h2>
                <p className="text-base mb-8">
                  Agora você e sua igreja estão com o Obreiro Digital em pleno
                  funcionamento!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-20 text-[#1E1E1E] font-poppins flex flex-col items-center">
        <Card className="w-[40vh] xl:w-[185vh] xl:h-[100vh] rounded-3xl xl:mb-20">
          <CardContent className="xl:flex">
            <div className="xl:w-[50vh] xl:flex xl:flex-col xl:m-10">
              <div className="text-center xl:text-start">
                <h3 className="text-[#676767] text-xl font-semibold">
                  Quanto custa?
                </h3>
                <h1 className="text-4xl font-bold mb-8">Preço</h1>
              </div>

              <div>
                <h1 className="text-4xl font-bold mb-10">
                  O Obreiro Digital é{" "}
                  <span className="text-[#5271FF]">100% gratuito!</span>
                </h1>
                <p className="xl:text-lg xl:font-semibold">
                  Todos as funcionalidades de gestão e apoio estão disponíveis
                  gratuitamente e{" "}
                  <span className="text-[#5271FF]">sem limites</span> para o
                  uso.
                  <br />
                  <br />
                  Nosso objetivo é alcançar o máximo de pessoas possível
                  deixando o sistema financeiramente{" "}
                  <span className="text-[#5271FF]">viável</span> a todos!
                </p>

                <Button className="bg-[#5271FF] pl-6 pr-6 mt-8 mb-8">
                  Criar Conta
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-center mb-5 xl:mx-60 xl:my-25">
              <Card className="bg-[#5271FF] w-[32vh] xl:w-[60vh] xl:h-[65vh] rounded-3xl ">
                <CardContent className="xl:my-6">
                  <div className="flex flex-row justify-center items-center">
                    <Image
                      className="w-[5vh] h-[5vh] mr-3"
                      alt="Obreiro Digital"
                      src="/logo.png"
                      height={750}
                      width={1200}
                    />
                    <h1 className="text-xl font-bold text-white">
                      OBREIRO
                      <br />
                      DIGITAL
                    </h1>
                  </div>

                  <div className="flex flex-col items-center font-bold">
                    <h1 className="text-[#FFFFFFB2] text-3xl mt-3 mb-3 line-through">
                      R$49,90
                    </h1>
                    <h1 className="text-white text-5xl mb-8">R$00,00</h1>
                  </div>

                  <div className="text-white flex flex-col items-center text-lg mb-5">
                    <ul className="list-disc xl:text-xl xl:font-semibold xl:gap-16">
                      <li className="xl:mb-4">Uso ilimitado no sistema</li>
                      <li className="xl:mb-4">Usuários ilimitados</li>
                      <li className="xl:mb-4">Treinamento gratuito</li>
                      <li>Suporte 24h</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-20 text-[#1E1E1E] font-poppins flex flex-col items-center">
        <Card className="w-[40vh] xl:w-[185vh] xl:h-[100vh] rounded-3xl xl:mb-20">
          <CardContent>
            <div className="text-center mb-25">
              <h3 className="text-[#676767] text-xl font-semibold">
                Você pode contribuir com o projeto!
              </h3>
              <h1 className="text-4xl font-bold">
                Financiamento <span className="text-[#5271FF]">Mensal</span>
              </h1>
            </div>

            <div className="hidden xl:block">
              <Carousel className="w-full max-w-[150vh] mx-auto">
                <CarouselContent>
                  {plans.map((plan, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 xl:basis-1/3 px-2"
                    >
                      <Card
                        className={`w-[32vh] xl:w-[45vh] rounded-3xl flex flex-col items-center ${plan.bgColor}`}
                      >
                        <CardContent>
                          <div className="flex flex-row justify-center items-center mb-5">
                            <Image
                              className="w-[5.5vh] h-[5.5vh] mr-3"
                              alt="Obreiro Digital"
                              src={plan.logo}
                              height={750}
                              width={1200}
                            />
                            <h1 className="text-xl font-bold">
                              OBREIRO
                              <br />
                              DIGITAL
                            </h1>
                          </div>

                          <div className="text-center mb-10">
                            <h1 className="text-2xl font-bold">{plan.title}</h1>
                            <h1 className="text-4xl font-bold">{plan.price}</h1>
                          </div>

                          <div className="flex flex-col ml-6 font-medium">
                            <ul className="list-disc">
                              {plan.features.map((feature, idx) => (
                                <li key={idx} className="mb-4">
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex justify-center mt-10">
                            <Button className={`w-[25vh] ${plan.buttonColor}`}>
                              Quero Apoiar
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className="xl:hidden flex flex-col items-center gap-10">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`w-[32vh] rounded-3xl flex flex-col items-center ${plan.bgColor}`}
                >
                  <CardContent>
                    <div className="flex flex-row justify-center items-center mb-5">
                      <Image
                        className="w-[5.5vh] h-[5.5vh] mr-3"
                        alt="Obreiro Digital"
                        src={plan.logo}
                        height={750}
                        width={1200}
                      />
                      <h1 className="text-xl font-bold">
                        OBREIRO
                        <br />
                        DIGITAL
                      </h1>
                    </div>

                    <div className="text-center mb-10">
                      <h1 className="text-2xl font-bold">{plan.title}</h1>
                      <h1 className="text-4xl font-bold">{plan.price}</h1>
                    </div>

                    <div className="flex flex-col ml-6 font-medium">
                      <ul className="list-disc">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="mb-4">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-center mt-10">
                      <Button className={`w-[25vh] ${plan.buttonColor}`}>
                        Quero Apoiar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-20 text-[#1E1E1E] font-poppins flex flex-col items-center">
        <Card className="w-[40vh] xl:w-[185vh] rounded-3xl bg-[#5271FF] text-white xl:mb-20">
          <CardContent className="flex flex-col xl:flex-row xl:items-center">
            <div className="xl:flex xl:flex-col xl:w-1/2 xl:ml-20">
              <h1 className="text-center xl:text-start text-3xl xl:text-4xl font-bold mb-8">
                Precisa de uma versão própria do Obreiro Digital?
              </h1>
              <h3 className="font-nunito text-center xl:text-start text-lg xl:text-2xl font-semibold xl:font-medium">
                Entre em contato conosco para construirmos uma solução
                específica para a sua igreja
              </h3>
              {/*Button desktop*/}
              <div className="hidden xl:flex items-center justify-start mt-10 mb-2">
                <Button className="bg-white text-[#5271FF] font-semibold w-[20vh]">
                  Entre em Contato
                </Button>
              </div>
            </div>
            <div className="xl:w-[90vh] flex justify-center">
              <Image
                className="mr-3"
                alt="Obreiro Digital"
                src="/image-obreiro.png"
                height={750}
                width={1200}
              />
            </div>
            {/*Button mobile*/}
            <div className="flex items-center justify-center mt-8 mb-2 xl:hidden">
              <Button className="bg-white text-[#5271FF] w-[20vh]">
                Entre em Contato
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-30 mb-30 xl:mb-45">
        <div className="text-center mb-8">
          <h3 className="text-[#676767] text-xl font-semibold mb-4">
            Prepare a sua igreja para o futuro
          </h3>
          <h1 className="text-[#1E1E1E] font-bold text-4xl">
            Transforme sua administração{" "}
            <span className="text-[#5271FF]">hoje!</span>
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row xl:justify-center items-center">
          <Button className="text-white bg-[#5271FF] text-md mb-5 xl:mb-0 xl:mx-5">
            Acesse Gratuitamente
          </Button>
          <Button className="bg-transparent border-2 border-[#5271FF] rounded-lg text-[#5271FF] text-md font-medium">
            Veja uma Demonstração
          </Button>
        </div>
      </section>

      <section className="bg-[#5271FF] w-[100%]  font-poppins">
        <div className="xl:flex xl:justify-evenly">
          <div className="grid grid-cols-2 xl:flex xl:flex-col text-white pt-12">
            <div className="pl-5">
              <div className="flex items-center">
                <Image
                  className="w-[5vh] h-[5vh] mr-3"
                  alt="Obreiro Digital"
                  src="/logo.png"
                  height={750}
                  width={1200}
                />
                <h1 className="text-white text-2xl font-bold">
                  Obreiro <br />
                  Digital
                </h1>
              </div>

              <div className="flex text-[#5271FF] gap-2 mt-4">
                <div className="rounded-full bg-white w-8 h-8 text-[#5271FF] flex justify-center items-center">
                  <Facebook className="w-6 h-6" />
                </div>
                <div className="rounded-full bg-white w-8 h-8 text-[#5271FF] flex justify-center items-center">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="rounded-full bg-white w-8 h-8 text-[#5271FF] flex justify-center items-center">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="rounded-full bg-white w-8 h-8 text-[#5271FF] flex justify-center items-center">
                  <Github className="w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="xl:pt-7">
              <div className="flex items-center w-[30vh] gap-2 text-sm mb-5">
                <Mail className="w-7 h-7" />
                <p>ecletecnologia@gmail.com</p>
              </div>
              <div className="flex items-center w-[30vh] gap-2 text-sm mb-5">
                <Phone className="w-7 h-7" />
                <p>(11) 9952-0702</p>
              </div>
              <div className="flex items-center w-[30vh] gap-2 text-sm mb-13">
                <Clock className="w-7 h-7" />
                <p>Seg-Sex das 8h às 18h</p>
              </div>
            </div>
          </div>

          <div className="xl:flex xl:justify- pt-12">
            <div className="flex">
              <div className="pl-5 text-white">
                <h1 className="text-3xl font-bold mb-3">Início</h1>
                <ul className="text-xl font-semibold">
                  <li className="mb-3">Início</li>
                  <li className="mb-3">Missão</li>
                  <li className="mb-3">Recursos</li>
                  <li className="mb-3">Implementação</li>
                  <li className="mb-12">Financiamento</li>
                </ul>
              </div>

              <div className="pl-10 xl:pl-20 text-white">
                <h1 className="text-3xl font-bold mb-3">Recursos</h1>
                <ul className="text-xl font-semibold">
                  <li className="mb-3">Gestão</li>
                  <li className="mb-3">Apoio</li>
                  <li className="mb-3">Termos de Uso</li>
                  <li className="mb-3">Termos de Privacidade</li>
                </ul>
              </div>
            </div>

            <div className="pl-5 xl:pl-20 text-white">
              <h1 className="text-3xl font-bold mb-3">Implementação</h1>
              <ul className="text-xl font-semibold">
                <li className="mb-3">Cadastro</li>
                <li className="mb-3">Treinamento</li>
                <li className="mb-3">Registro</li>
                <li className="mb-12">Segurança de Dados</li>
              </ul>
            </div>

            <div className="pl-5 xl:pl-20 text-white">
              <h1 className="text-3xl font-bold mb-3">Planos</h1>
              <ul className="text-xl font-semibold">
                <li className="mb-3">Ofertante</li>
                <li className="mb-3">Bronze</li>
                <li className="mb-3">Prata</li>
                <li className="mb-3">Ouro</li>
                <li className="mb-15">Patriarca</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pl-5  text-white bg-[#5271FF] w-[100%] h-[100%] xl:flex font-poppins">
          <h3 className="text-center text-base w-[100%]">
            © Copyright 2025. Ecle Tech Team. Todos os direitos reservados.
          </h3>
        </div>
      </section>
    </main>
  );
}
