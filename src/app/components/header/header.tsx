"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="fixed top-0 left-0 w-full z-50 flex items-center justify-center py-[1vh] bg-transparent">
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
          <section className="xl:flex xl:items-center w-[100%] justify-around hidden ml-[10vh] text-white font-bold font-title text-lg">
            <button 
              onClick={() => handleMenuClick('inicio')}
              className="hover:text-gray-200 transition-colors cursor-pointer"
            >
              <h1>Início</h1>
            </button>
            <button 
              onClick={() => handleMenuClick('missao')}
              className="hover:text-gray-200 transition-colors cursor-pointer"
            >
              <h1>Missão</h1>
            </button>
            <button 
              onClick={() => handleMenuClick('recursos')}
              className="hover:text-gray-200 transition-colors cursor-pointer"
            >
              <h1>Recursos</h1>
            </button>
            <button 
              onClick={() => handleMenuClick('implementacao')}
              className="hover:text-gray-200 transition-colors cursor-pointer"
            >
              <h1>Implementação</h1>
            </button>
            <button 
              onClick={() => handleMenuClick('planos')}
              className="hover:text-gray-200 transition-colors cursor-pointer"
            >
              <h1>Planos</h1>
            </button>

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
                    <button
                      onClick={() => handleMenuClick('inicio')}
                      className="block w-full text-left px-4 py-2 text-xl font-bold hover:bg-[#3a5aee]"
                    >
                      Início
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleMenuClick('missao')}
                      className="block w-full text-left px-4 py-2 text-xl font-bold hover:bg-[#3a5aee]"
                    >
                      Missão
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleMenuClick('recursos')}
                      className="block w-full text-left px-4 py-2 text-xl font-bold hover:bg-[#3a5aee]"
                    >
                      Recursos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleMenuClick('implementacao')}
                      className="block w-full text-left px-4 py-2 text-xl font-bold hover:bg-[#3a5aee]"
                    >
                      Implementação
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleMenuClick('planos')}
                      className="block w-full text-left px-4 py-2 pb-4 text-xl font-bold hover:bg-[#3a5aee]"
                    >
                      Planos
                    </button>
                  </li>
                  {/* <li>
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
                  </li> */}
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
