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
  return (
    <main className="font-(family-name:--font-poppins)">
      <Header />

      <section className=" h-[60vh] w-auto flex flex-col items-center font-(family-name:--font-poppins)">
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
          <button className="w-[28vh] h-[5vh] bg-[#5271FF] text-white rounded-lg text-lg font-medium">
            Acesse Gratuitamente
          </button>
          <button className="mt-5 xl:mt-0 w-[28vh] h-[5vh] border-2 border-[#5271FF] rounded-lg text-[#5271FF] text-lg font-medium">
            Veja uma demonstração
          </button>
        </div>
        <div className="mt-[3vh] w-[50vh] flex justify-evenly xl:mt-[5vh] ">
          <Check />
          <h2>Sem custo de acesso</h2>
          <Check />
          <h2>Sem limitação de uso</h2>
        </div>
      </section>

      <section className="flex flex-col items-center mb-11 xl:mt-[20vh]">
        <div className=" w-full flex justify-center">
          <Image
            className="w-[100%] h-[25%] xl:w-[80%] xl:h-[50%]"
            alt="Obreiro Digital"
            src="/inicio_page.png"
            height={750}
            width={1200}
          />
        </div>

        <Card className="w-[100%] flex flex-col justify-center border-0">
          <div className="xl:flex xl:items-center xl:mb-0">
            <CardContent className="flex flex-col text-center ">
              <h1 className="text-7xl xl:mt-[8vh] font-bold text-[#1E1E1E] font-(family-name:--font-poppins)">
                3º
              </h1>
              <div className="flex justify-center">
                <h2 className="text-xl font-bold xl:mb-5 text-[#1E1E1E] font-(family-name:--font-poppins)">
                  Maior Causa de{" "}
                  <span className="text-[#5271FF]">Desfiliação</span>
                </h2>
              </div>
              <p className="font-semibold font-(family-name:--font-nunito) mt-[2vh mb-[8vh]">
                São escândalos financeiros e abusos espirituais por má
                governança dentro das igrejas, segundo teólogos
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
              <p className="font-semibold font-(family-name:--font-nunito) mt-[2vh] xl:mb-0 mb-[8vh]">
                Em igrejas buscam informações online (horários, programas
                sociais, transparência financeira) antes de visitar uma igreja
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
              <p className="font-semibold font-(family-name:--font-nunito) mt-[2vh] xl:mb-0 mb-[8vh]">
                Igrejas sem controle de fluxo de caixa têm mais chance de fechar
                as portas em até 5 anos em média no Brasil
              </p>
            </CardContent>
          </div>
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

      <section className="mt-20 text-[#1E1E1E] font-(family-name:--font-poppins) flex flex-col items-center">
        <Card className="w-[40vh] rounded-4xl">
          <CardContent>
            <div className="text-center">
              <h3 className="text-[#676767] text-xl font-semibold">
                Quanto custa?
              </h3>
              <h1 className="text-4xl font-bold mb-8 ">Preço</h1>
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-10">
                O Obreiro Digital é{" "}
                <span className="text-[#5271FF]">100% gratuito!</span>
              </h1>
              <p>
                Todos as funcionalidades de gestão e apoio estão disponíveis
                gratuitamente e{" "}
                <span className="text-[#5271FF]">sem limites</span> para o uso.
                <br />
                <br />
                Nosso objetivo é alcançar o máximo de pessoas possível deixando
                o sistema financeiramente{" "}
                <span className="text-[#5271FF]">viável </span>a todos!
              </p>

              <Button className="bg-[#5271FF] pl-6 pr-6 mt-8 mb-8">
                Criar Conta
              </Button>
            </div>

            <div className="flex flex-col items-center mb-5">
              <Card className="bg-[#5271FF] w-[32vh] rounded-4xl">
                <CardContent>
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
                    <ul className="list-disc">
                      <li>Uso ilimitado no sistema</li>
                      <li>Usuários ilimitados</li>
                      <li>Treinamento gratuito</li>
                      <li>Suporte 24h</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-20 text-[#1E1E1E] font-(family-name:--font-poppins) flex flex-col items-center">
        <Card className="w-[40vh] rounded-4xl">
          <CardContent>
            <div className="text-center mb-11">
              <h3 className="text-[#676767] text-xl font-semibold">
                Você pode contribuir com o projeto!
              </h3>
              <h1 className="text-4xl font-bold">
                Financiamento <span className="text-[#5271FF]">Mensal</span>
              </h1>
            </div>

            <div className=" flex flex-col items-center mb-10">
              <Card className="w-[32vh] rounded-4xl flex flex-col items-center bg-[#F5F5F5]">
                <CardContent>
                  <div className="flex flex-row justify-center items-center mb-5">
                    <Image
                      className="w-[5.5vh] h-[5.5vh] mr-3"
                      alt="Obreiro Digital"
                      src="/logo-dark.png"
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
                    <h1 className="text-2xl font-bold">Starter</h1>
                    <h1 className="text-4xl font-bold">R$10,00</h1>
                  </div>

                  <div className="flex flex-col ml-6 font-medium">
                    <ul className="list-disc">
                      <li>Nome no hall de lendas</li>
                      <br />
                      <li>
                        Cursos extras (informática, design, social media,
                        gestão)
                      </li>
                    </ul>
                  </div>

                  <div className="flex justify-center mt-20">
                    <Button className="bg-[#5271FF] w-[25vh]">
                      Quero Apoiar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className=" flex flex-col items-center mb-10">
              <Card className="w-[32vh] rounded-4xl flex flex-col items-center bg-[#5271FF] text-white">
                <CardContent>
                  <div className="flex flex-row justify-center items-center mb-5">
                    <Image
                      className="w-[5.5vh] h-[5.5vh] mr-3"
                      alt="Obreiro Digital"
                      src="/logo.png"
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
                    <h1 className="text-2xl font-bold">Bronze</h1>
                    <h1 className="text-4xl font-bold">R$49,99</h1>
                  </div>

                  <div className="flex flex-col ml-6 font-medium">
                    <ul className="list-disc">
                      <li>Tudo do starter</li>
                      <br />
                      <li>Certificado de conclusão de cursos extras</li>
                    </ul>
                  </div>

                  <div className="flex justify-center mt-20">
                    <Button className="bg-white w-[25vh] text-[#5271FF]">
                      Quero Apoiar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className=" flex flex-col items-center mb-10">
              <Card className="w-[32vh] rounded-4xl flex flex-col items-center bg-[#F5F5F5]">
                <CardContent>
                  <div className="flex flex-row justify-center items-center mb-5">
                    <Image
                      className="w-[5.5vh] h-[5.5vh] mr-3"
                      alt="Obreiro Digital"
                      src="/logo-dark.png"
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
                    <h1 className="text-2xl font-bold">Prata</h1>
                    <h1 className="text-4xl font-bold">R$299,00</h1>
                  </div>

                  <div className="flex flex-col ml-6 font-medium">
                    <ul className="list-disc">
                      <li>Tudo dos planos ateriores</li>
                      <br />
                      <li>Suporte VIP</li>
                      <br />
                      <li>Reunião com os devs</li>
                    </ul>
                  </div>

                  <div className="flex justify-center mt-20">
                    <Button className="bg-[#5271FF] w-[25vh]">
                      Quero Apoiar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className=" flex flex-col items-center mb-10">
              <Card className="w-[32vh] rounded-4xl flex flex-col items-center bg-[#F5F5F5]">
                <CardContent>
                  <div className="flex flex-row justify-center items-center mb-5">
                    <Image
                      className="w-[5.5vh] h-[5.5vh] mr-3"
                      alt="Obreiro Digital"
                      src="/logo-dark.png"
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
                    <h1 className="text-2xl font-bold">Ouro</h1>
                    <h1 className="text-4xl font-bold">R$499,00</h1>
                  </div>

                  <div className="flex flex-col ml-6 font-medium">
                    <ul className="list-disc">
                      <li>Tudo dos planos ateriores</li>
                      <br />
                      <li>Acesso a versões beta</li>
                      <br />
                      <li>Logo da Igreja no sistema</li>
                    </ul>
                  </div>

                  <div className="flex justify-center mt-20">
                    <Button className="bg-[#5271FF] w-[25vh]">
                      Quero Apoiar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className=" flex flex-col items-center mb-2">
              <Card className="w-[32vh] rounded-4xl flex flex-col items-center bg-[#F5F5F5]">
                <CardContent>
                  <div className="flex flex-row justify-center items-center mb-5">
                    <Image
                      className="w-[5.5vh] h-[5.5vh] mr-3"
                      alt="Obreiro Digital"
                      src="/logo-dark.png"
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
                    <h1 className="text-2xl font-bold">Patriarca</h1>
                    <h1 className="text-4xl font-bold">R$1.000,00</h1>
                  </div>

                  <div className="flex flex-col ml-6 font-medium">
                    <ul className="list-disc">
                      <li>Tudo dos planos ateriores</li>
                      <br />
                      <li>Mentoria de gestão da sua igreja</li>
                      <br />
                      <li>Mimos (chaveiros, canecas e camisetas)</li>
                    </ul>
                  </div>

                  <div className="flex justify-center mt-20">
                    <Button className="bg-[#5271FF] w-[25vh]">
                      Quero Apoiar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-20 text-[#1E1E1E] font-(family-name:--font-poppins) flex flex-col items-center">
        <Card className="w-[40vh] rounded-4xl bg-[#5271FF] text-white">
          <CardContent>
            <h1 className="text-center text-3xl font-bold mb-8">
              Precisa de uma versão própria do Obreiro Digital?
            </h1>

            <h3 className="font-(family-name:--font-nunito) text-center text-lg font-semibold">
              Entre em contato conosco para construirmos uma solução específica
              para a sua igreja
            </h3>

            <div>
              <Image
                className="mr-3"
                alt="Obreiro Digital"
                src="/image-obreiro.png"
                height={750}
                width={1200}
              />
            </div>

            <div className="flex items-center justify-center mt-8 mb-2">
              <Button className="bg-white text-[#5271FF] w-[20vh]">
                Entre em Contato
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-30 mb-30">
        <div className="text-center mb-8">
          <h3 className="text-[#676767] text-xl font-semibold mb-4">
            Prepare a sua igreja para o futuro
          </h3>
          <h1 className="text-[#1E1E1E] font-bold text-4xl">
            Transforme sua administração{" "}
            <span className="text-[#5271FF]">hoje!</span>
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <Button className="text-white bg-[#5271FF] text-md mb-5">
            Acesse Gratuitamente
          </Button>
          <Button className=" bg-transparent border-2 border-[#5271FF] rounded-lg text-[#5271FF] text-md font-medium">
            Veja uma Demonstração
          </Button>
        </div>
      </section>

      <section className="bg-[#5271FF] w-[100%] font-(family-name:--font-poppins)">
        <div className="grid grid-cols-2 text-white pt-12">
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

          <div>
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

          <div className="pl-10 text-white">
            <h1 className="text-3xl font-bold mb-3">Recursos</h1>
            <ul className="text-xl font-semibold">
              <li className="mb-3">Gestão</li>
              <li className="mb-3">Apoio</li>
              <li className="mb-3">Termos de Uso</li>
              <li className="mb-3">Termos de Privacidade</li>
            </ul>
          </div>
        </div>

        <div className="pl-5 text-white">
          <h1 className="text-3xl font-bold mb-3">Implementação</h1>
          <ul className="text-xl font-semibold">
            <li className="mb-3">Cadastro</li>
            <li className="mb-3">Treinamento</li>
            <li className="mb-3">Registro</li>
            <li className="mb-12">Segurança de Dados</li>
          </ul>
        </div>

        <div className="pl-5 text-white">
          <h1 className="text-3xl font-bold mb-3">Planos</h1>
          <ul className="text-xl font-semibold">
            <li className="mb-3">Ofertante</li>
            <li className="mb-3">Bronze</li>
            <li className="mb-3">Prata</li>
            <li className="mb-3">Prata</li>
            <li className="mb-15">Patriarca</li>
          </ul>
        </div>

        <h3 className="text-center text-base text-white">
          © Copyright 2025. Ecle Tech Team. Todos os direitos reservados.
        </h3>
      </section>
    </main>
  );
}
