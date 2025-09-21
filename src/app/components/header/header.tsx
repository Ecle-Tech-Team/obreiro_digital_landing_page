"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="flex items-center justify-center mt-[1vh]">
      <Card className="bg-[#5271FF] w-[95%] h-[8%] rounded-3xl py-3 font-(family-name:--font-poppins)">
        <CardContent className="flex justify-between">
          <div className="flex items-center text-xl">
            <Image
              className=""
              alt="Obreiro Digital"
              src="/logo.png"
              height={48}
              width={48}
            />

            <h1 className="ml-2 text-lg/5 font-bold text-white hidden xl:block">
              OBREIRO
              <br />
              DIGITAL
            </h1>
          </div>
          <section className="xl:flex xl:items-center w-[100%] justify-around hidden ml-[10vh] text-white font-bold font-title text-2xl">
            <h1>
              <a href="#">Início</a>
            </h1>
            <h1>
              <a href="#">Missão</a>
            </h1>
            <h1>
              <a href="#">Recursos</a>
            </h1>
            <h1>
              <a href="#">Implementação</a>
            </h1>
            <h1>
              <a href="#">Planos</a>
            </h1>

            {/* <div className="ml-[8vh]">
              <Button className="text-white font-bold bg-transparent w-[17vh]">
                Faça Login
              </Button>
              <Button className="text-[#5271FF] font-bold bg-white w-[17vh]">
                Criar Conta
              </Button>
            </div> */}
          </section>
          <div className="relative xl:invisible">
            <Button
              className="bg-transparent h-[5vh] w-[8vh] flex items-center justify-center"
              variant="ghost"
              onClick={toggleMenu}
            >
              <MenuIcon className="text-white" />
            </Button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-[#5271FF] text-white rounded-md shadow-lg z-10 ">
                <div className="">
                  <Image
                    className="pl-4 h-[4vh] w-[6vh]"
                    alt="Obreiro Digital"
                    src="/logo.png"
                    height={22}
                    width={48}
                  />
                </div>
                <ul className="py-1">
                  <li>
                    <a
                      href="#home"
                      className="block px-4 py-2 text-xl font-bold"
                      onClick={toggleMenu}
                    >
                      Início
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="block px-4 py-2 text-xl font-bold"
                      onClick={toggleMenu}
                    >
                      Missão
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="block px-4 py-2 text-xl font-bold"
                      onClick={toggleMenu}
                    >
                      Recursos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block px-4 py-2 text-xl font-bold"
                      onClick={toggleMenu}
                    >
                      Implementação
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block px-4 py-2 pb-4 text-xl font-bold"
                      onClick={toggleMenu}
                    >
                      Planos
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center pl-3 pb-4">
                      <Button
                        className="block px-4  py-2 text-sm font-bold bg-white text-[#5271FF]"
                        onClick={toggleMenu}
                      >
                        Criar Conta
                      </Button>

                      <Button
                        className="block px-4 py-2 text-sm font-bold bg-transparent text-white"
                        onClick={toggleMenu}
                      >
                        Fazer Login
                      </Button>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Header;
