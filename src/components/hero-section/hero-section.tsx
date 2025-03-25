"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import CircleBackground from "@/assets/Circulo_da_nuvem.svg";
import BlueCloud from "@/assets/Nuvem_Azul.svg";

// Componente para o ícone de dropdown
const DropdownIcon = () => (
  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Componente para o ícone de seta à direita
const RightArrow = () => (
  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-6-6l6 6-6 6" />
  </svg>
);

// Componente NavBar
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-[15px] font-medium text-gray-900 dark:text-white">together.ai</span>
          </Link>

          {/* Menu desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <button className="flex items-center text-[14px] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={() => toggleDropdown("products")}>
                Products
                <DropdownIcon />
              </button>
            </div>

            <div className="relative">
              <button className="flex items-center text-[14px] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={() => toggleDropdown("business")}>
                For Business
                <DropdownIcon />
              </button>
            </div>

            <div className="relative">
              <button className="flex items-center text-[14px] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={() => toggleDropdown("developers")}>
                For Developers
                <DropdownIcon />
              </button>
            </div>

            <div className="relative">
              <button className="flex items-center text-[14px] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={() => toggleDropdown("pricing")}>
                Pricing
                <DropdownIcon />
              </button>
            </div>

            <Link href="/research" className="text-[14px] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Research
            </Link>

            <div className="relative">
              <button className="flex items-center text-[14px] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={() => toggleDropdown("company")}>
                Company
                <DropdownIcon />
              </button>
            </div>

            <Link href="/docs" className="text-[14px] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Docs
            </Link>

            <Link href="/contact" className="text-[14px] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Contact
            </Link>

            <Link href="/get-started" className="flex items-center text-[14px] text-white bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-2 ml-4">
              Get Started
              <RightArrow />
            </Link>
          </div>

          {/* Botão hamburguer (mobile) */}
          <button className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/products" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
                Products
              </Link>
              <Link href="/business" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
                For Business
              </Link>
              <Link href="/developers" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
                For Developers
              </Link>
              <Link href="/pricing" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
                Pricing
              </Link>
              <Link href="/research" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
                Research
              </Link>
              <Link href="/company" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
                Company
              </Link>
              <Link href="/docs" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
                Docs
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
                Contact
              </Link>
              <Link href="/get-started" className="block px-3 py-2 text-base font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Componente HeroSection
export default function HeroSection() {
  const models = [
    "Llama 3.3 70B",
    "DeepSeek V3",
    "Qwen 2.5-Coder 32B",
    "Qwen QwQ-32B-Preview",
    "Llama 3.2 11B Free",
    "Llama 3.2 90B",
    "Llama 3.1 70B",
    "Llama 3.1 Nemotron 70B Instruct",
    "Llama 3.1 405B",
    "Qwen 2.5 72B",
    "FLUX.1 [dev]",
    "FLUX.1 [pro]",
    "FLUX.1 [schnell] Free",
    "Llama 3.2 11B",
    "Gemma-2 Instruct (27B)",
    "DeepSeek R1",
    "Mixtral-8x22B",
  ];

  return (
    <section className="relative flex min-h-[90vh] px-4 max-w-[1400px] mx-auto bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Left Content */}
      <div className="w-full lg:w-[50%] pt-[140px]">
        <div className="flex flex-col items-start space-y-6">
          <div className="relative">
            <h1 className="text-7xl lg:text-[86px] font-medium leading-[0.95] tracking-tight text-gray-900 dark:text-white">
              together
              <span className="block relative mt-1">
                <span className="absolute inset-0 bg-[#E6F0FF] dark:bg-blue-900/30 rounded-lg transform -skew-y-2"></span>
                <span className="relative text-[#0066FF] z-10">.models</span>
              </span>
            </h1>
          </div>
          <p className="text-2xl lg:text-[32px] text-[#4B5563] dark:text-gray-300 max-w-[580px] leading-[1.2] mt-2">
            Build with 200+ open-source and specialized multimodal models for chat, images, code, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 pt-6">
            <button className="bg-[#0066FF] hover:bg-blue-600 text-white rounded-full px-8 py-3.5 text-[16px] font-medium transition-all duration-200">
              Start building now
            </button>
            <button className="border border-[#E5E7EB] dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-[#4B5563] dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full px-8 py-3.5 text-[16px] font-medium transition-all duration-200">
              Request dedicated endpoint
            </button>
          </div>
        </div>
      </div>

      {/* Right Content - Models Visualization */}
      <div className="hidden lg:block w-[50%] relative">
        <div className="absolute top-[90px] right-[-80px] w-[600px] h-[600px]">
          <div className="relative w-full h-full">
            <CircleBackground
              className="absolute inset-0 transform -translate-x-[220px] dark:opacity-50"
              width={600}
              height={600}
            />
            <BlueCloud
              className="absolute top-1/2 left-1/2 transform -translate-x-[180%] -translate-y-1/2 z-20 dark:opacity-70"
              width={160}
              height={160}
            />
            
            {/* Model Names */}
            {models.map((model, index) => {
              // Cria múltiplos círculos com raios diferentes
              const totalModels = models.length;
              const circleIndex = Math.floor(index / (totalModels / 3)); // Divide em 3 círculos
              const baseRadius = [180, 240, 300][circleIndex]; // Raios diferentes para cada círculo
              
              // Ajusta o ângulo para distribuir os modelos em cada círculo
              const modelsInCircle = Math.ceil(totalModels / 3);
              const angleOffset = (circleIndex * 30) * (Math.PI / 180); // Offset para cada círculo
              const angle = ((index % modelsInCircle) * (360 / modelsInCircle) + (circleIndex * 20)) * (Math.PI / 180) + angleOffset;
              
              // Calcula a posição com um pouco de aleatoriedade
              const randomOffset = Math.sin(index) * 15; // Adiciona variação baseada no índice
              const radius = baseRadius + randomOffset;
              const x = Math.cos(angle) * radius - 220; // Deslocamento maior para a esquerda
              const y = Math.sin(angle) * radius;

              // Evita posicionar cards no centro (onde está a nuvem)
              const distanceFromCenter = Math.sqrt(x * x + y * y);
              if (distanceFromCenter < 80) {
                return null; // Não renderiza cards muito próximos ao centro
              }

              return (
                <div
                  key={model}
                  className="absolute whitespace-nowrap bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[11px] shadow-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:scale-105 dark:text-gray-200"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    left: '50%',
                    top: '50%',
                    zIndex: circleIndex + 10,
                  }}
                >
                  <span className="inline-block w-1 h-1 bg-[#22C55E] rounded-full mr-1.5 align-middle"></span>
                  {model}
                </div>
              )
            }).filter(Boolean)} {/* Filtra os elementos nulos */}
          </div>
        </div>
      </div>
    </section>
  );
}