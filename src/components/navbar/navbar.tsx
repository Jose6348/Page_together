'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

// Componente para o ícone de dropdown
const DropdownArrow = () => (
  <svg className={styles.dropdownArrow} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4L5 7L8 4" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Componente para o ícone de seta à direita
const RightArrow = () => (
  <svg className={styles.rightArrow} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5H7M7 5L5 3M7 5L5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Componente para o ícone de menu hamburguer
const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21M3 6H21M3 18H21" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Products', 'For Business', 'For Developers', 'Pricing', 'Research', 'Company', 'Docs', 'Contact'];

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">together.ai</Link>
      </div>

      {/* Links de navegação (desktop) */}
      <ul className={styles.navLinks}>
        {navItems.map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className={styles.navLink}>
              <span>{item}</span>
              {item !== 'Contact' && <DropdownArrow />}
            </Link>
          </li>
        ))}
      </ul>

      {/* Botão CTA (desktop) */}
      <div className={styles.cta}>
        <Link href="/get-started" className={styles.ctaButton}>
          Get Started <RightArrow />
        </Link>
      </div>

      {/* Botão hamburguer (mobile) */}
      <button 
        className={styles.hamburger} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <HamburgerIcon />
      </button>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavLinks}>
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/get-started"
                className={styles.mobileCtaButton}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started <RightArrow />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;