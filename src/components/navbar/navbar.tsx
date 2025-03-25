"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

// Componente para o ícone de dropdown
const DropdownIcon = () => (
  <svg
    className="w-4 h-4 ml-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

// Componente para o ícone de seta à direita
const RightArrow = () => (
  <svg
    className="w-4 h-4 ml-1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14m-6-6l6 6-6 6" />
  </svg>
);

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-[15px] font-medium text-gray-900">together.ai</span>
          </Link>

          {/* Menu desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <button
                className="flex items-center text-[14px] text-gray-600 hover:text-gray-900"
                onClick={() => toggleDropdown("products")}
              >
                Products
                <DropdownIcon />
              </button>
            </div>

            <div className="relative">
              <button
                className="flex items-center text-[14px] text-gray-600 hover:text-gray-900"
                onClick={() => toggleDropdown("business")}
              >
                For Business
                <DropdownIcon />
              </button>
            </div>

            <div className="relative">
              <button
                className="flex items-center text-[14px] text-gray-600 hover:text-gray-900"
                onClick={() => toggleDropdown("developers")}
              >
                For Developers
                <DropdownIcon />
              </button>
            </div>

            <div className="relative">
              <button
                className="flex items-center text-[14px] text-gray-600 hover:text-gray-900"
                onClick={() => toggleDropdown("pricing")}
              >
                Pricing
                <DropdownIcon />
              </button>
            </div>

            <Link
              href="/research"
              className="text-[14px] text-gray-600 hover:text-gray-900"
            >
              Research
            </Link>

            <div className="relative">
              <button
                className="flex items-center text-[14px] text-gray-600 hover:text-gray-900"
                onClick={() => toggleDropdown("company")}
              >
                Company
                <DropdownIcon />
              </button>
            </div>

            <Link
              href="/docs"
              className="text-[14px] text-gray-600 hover:text-gray-900"
            >
              Docs
            </Link>

            <Link
              href="/contact"
              className="text-[14px] text-gray-600 hover:text-gray-900"
            >
              Contact
            </Link>

            <Link
              href="/get-started"
              className="flex items-center text-[14px] text-white bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-2 ml-4"
            >
              Get Started
              <RightArrow />
            </Link>
          </div>

          {/* Botão hamburguer (mobile) */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/products"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Products
              </Link>
              <Link
                href="/business"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                For Business
              </Link>
              <Link
                href="/developers"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                For Developers
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Pricing
              </Link>
              <Link
                href="/research"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Research
              </Link>
              <Link
                href="/company"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Company
              </Link>
              <Link
                href="/docs"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Docs
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Contact
              </Link>
              <Link
                href="/get-started"
                className="block px-3 py-2 text-base font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}