"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

// Interface para os itens do menu
interface MenuItem {
  label: string;
  href: string;
  highlight?: boolean;
}

interface DropdownMenus {
  [key: string]: MenuItem[];
}

// Componente para o ícone de dropdown
const DropdownIcon = () => (
  <svg className="w-3 h-3 ml-1 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Definição dos itens do menu dropdown
const dropdownMenus: DropdownMenus = {
  products: [
    { label: "Together Inference", href: "/inference" },
    { label: "Together Dedicated Endpoints", href: "/dedicated-endpoints" },
    { label: "Together Fine-tuning", href: "/fine-tuning" },
    { label: "Together Custom Models", href: "/custom-models" },
    { label: "Together GPU Clusters", href: "/gpu-clusters" },
    { label: "Model Library", href: "/model-library", highlight: true }
  ],
  business: [
    { label: "Enterprise", href: "/enterprise" },
    { label: "Customer stories", href: "/customer-stories" },
    { label: "Why open-source", href: "/why-open-source" },
    { label: "Industries & use cases", href: "/industries" }
  ],
  developers: [
    { label: "Docs", href: "/docs" },
    { label: "Model Library", href: "/model-library", highlight: true },
    { label: "Example Apps", href: "/example-apps" },
    { label: "Cookbooks", href: "/cookbooks" },
    { label: "Playground", href: "/playground" }
  ],
  pricing: [
    { label: "Overview", href: "/pricing" },
    { label: "Inference", href: "/pricing/inference" },
    { label: "Dedicated Endpoints", href: "/pricing/dedicated-endpoints" },
    { label: "Fine-Tuning", href: "/pricing/fine-tuning" },
    { label: "GPU Clusters", href: "/pricing/gpu-clusters" }
  ],
  company: [
    { label: "Blog", href: "/blog" },
    { label: "Values", href: "/values" },
    { label: "Careers", href: "/careers" },
    { label: "Team", href: "/team" }
  ]
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center px-4 py-2 bg-white/80 rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-200"
        >
          <span className="text-[15px] font-medium text-gray-900">together.ai</span>
        </Link>

        {/* Menu desktop */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center space-x-1 bg-white/80 rounded-full border border-gray-200 px-5 py-2 mx-4">
            <div className="relative group">
              <button
                className="flex items-center text-[14px] text-gray-800 hover:bg-gray-100 px-3 py-1.5 rounded-md transition-all duration-200"
              >
                Products
                <DropdownIcon />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {dropdownMenus.products.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block px-4 py-2 text-[14px] ${
                      item.highlight
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button
                className="flex items-center text-[14px] text-gray-800 hover:bg-gray-100 px-3 py-1.5 rounded-md transition-all duration-200"
              >
                For Business
                <DropdownIcon />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {dropdownMenus.business.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button
                className="flex items-center text-[14px] text-gray-800 hover:bg-gray-100 px-3 py-1.5 rounded-md transition-all duration-200"
              >
                For Developers
                <DropdownIcon />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {dropdownMenus.developers.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block px-4 py-2 text-[14px] ${
                      item.highlight
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button
                className="flex items-center text-[14px] text-gray-800 hover:bg-gray-100 px-3 py-1.5 rounded-md transition-all duration-200"
              >
                Pricing
                <DropdownIcon />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {dropdownMenus.pricing.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/research"
              className="text-[14px] text-gray-800 hover:bg-gray-100 px-3 py-1.5 rounded-md transition-all duration-200"
            >
              Research
            </Link>

            <div className="relative group">
              <button
                className="flex items-center text-[14px] text-gray-800 hover:bg-gray-100 px-3 py-1.5 rounded-md transition-all duration-200"
              >
                Company
                <DropdownIcon />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {dropdownMenus.company.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/docs"
              className="text-[14px] text-gray-800 hover:bg-gray-100 px-3 py-1.5 rounded-md transition-all duration-200"
            >
              Docs
            </Link>

            <Link
              href="/contact"
              className="text-[14px] text-gray-800 hover:bg-gray-100 px-3 py-1.5 rounded-md transition-all duration-200"
            >
              Contact
            </Link>

            {/* Botão de modo escuro */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

         
          </div>

          <div className="bg-white/80 rounded-full border border-gray-200 p-0.5">
            <Link
              href="/get-started"
              className="flex items-center text-[14px] text-white bg-[#0066FF] hover:bg-blue-600 rounded-full px-4 py-2 transition-all duration-200"
            >
              <div className="bg-white/20 rounded-full p-1 ml-2">
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Botão hamburguer (mobile) */}
        <button 
          className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200">
            <div className="px-4 py-3 space-y-2">
              <div>
                <button
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() => toggleDropdown("products")}
                >
                  Products
                </button>
                {activeDropdown === "products" && (
                  <div className="pl-4">
                    {dropdownMenus.products.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`block px-3 py-2 text-sm ${
                          item.highlight
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        } rounded-md`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() => toggleDropdown("business")}
                >
                  For Business
                </button>
                {activeDropdown === "business" && (
                  <div className="pl-4">
                    {dropdownMenus.business.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() => toggleDropdown("developers")}
                >
                  For Developers
                </button>
                {activeDropdown === "developers" && (
                  <div className="pl-4">
                    {dropdownMenus.developers.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`block px-3 py-2 text-sm ${
                          item.highlight
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        } rounded-md`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() => toggleDropdown("pricing")}
                >
                  Pricing
                </button>
                {activeDropdown === "pricing" && (
                  <div className="pl-4">
                    {dropdownMenus.pricing.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/research"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Research
              </Link>

              <div>
                <button
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() => toggleDropdown("company")}
                >
                  Company
                </button>
                {activeDropdown === "company" && (
                  <div className="pl-4">
                    {dropdownMenus.company.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

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

              {/* Botão de modo escuro */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <Link
                href="/get-started"
                className="block px-3 py-2 text-base font-medium text-white bg-[#0066FF] hover:bg-blue-600 rounded-full text-center"
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