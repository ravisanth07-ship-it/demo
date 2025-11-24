'use client';

import React, { useState } from 'react';
import Icon from './Icon';
import { portfolioContent } from '@/content/portfolioContent';

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navigation } = portfolioContent;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-800 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <a
            href="#"
            className="text-xl sm:text-2xl xl:text-3xl font-bold text-white hover:text-amber-400 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              closeMenu();
            }}
          >
            {navigation.brand}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a
              href="#about"
              className={`transition-colors font-medium text-base xl:text-lg tracking-wide ${
                activeSection === 'about' ? 'text-sky-400 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              {navigation.links.about}
            </a>
            <a
              href="#projects"
              className={`transition-colors font-medium text-base xl:text-lg tracking-wide ${
                activeSection === 'projects' ? 'text-sky-400 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              {navigation.links.projects}
            </a>
            <a
              href="#services"
              className={`transition-colors font-medium text-base xl:text-lg tracking-wide ${
                activeSection === 'services' ? 'text-sky-400 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              {navigation.links.services}
            </a>
            <a
              href="#books"
              className={`transition-colors font-medium text-base xl:text-lg tracking-wide ${
                activeSection === 'books' ? 'text-sky-400 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              {navigation.links.books}
            </a>
            <a
              href="#contact"
              className={`transition-colors font-medium text-base xl:text-lg tracking-wide ${
                activeSection === 'contact' ? 'text-sky-400 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              {navigation.links.contact}
            </a>
            <div className="flex items-center gap-2 xl:gap-3 ml-4 xl:ml-6 pl-4 xl:pl-6 border-l border-slate-700">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 xl:w-9 xl:h-9 flex items-center justify-center text-slate-300 hover:text-amber-600 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Icon src="/assets/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} className="w-5 h-5 xl:w-6 xl:h-6" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden w-8 h-8 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 pb-3 border-t border-slate-700">
            <div className="flex flex-col pt-2">
              <a
                href="#about"
                onClick={closeMenu}
                className={`py-2 text-base font-medium transition-colors ${
                  activeSection === 'about' ? 'text-sky-400 font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {navigation.links.about}
              </a>
              <a
                href="#projects"
                onClick={closeMenu}
                className={`py-2 text-base font-medium transition-colors ${
                  activeSection === 'projects' ? 'text-sky-400 font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {navigation.links.projects}
              </a>
              <a
                href="#services"
                onClick={closeMenu}
                className={`py-2 text-base font-medium transition-colors ${
                  activeSection === 'services' ? 'text-sky-400 font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {navigation.links.services}
              </a>
              <a
                href="#books"
                onClick={closeMenu}
                className={`py-2 text-base font-medium transition-colors ${
                  activeSection === 'books' ? 'text-sky-400 font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {navigation.links.books}
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className={`py-2 text-base font-medium transition-colors ${
                  activeSection === 'contact' ? 'text-sky-400 font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {navigation.links.contact}
              </a>
              <div className="flex items-center pt-2 mt-2 border-t border-slate-700">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-amber-600 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Icon src="/assets/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
