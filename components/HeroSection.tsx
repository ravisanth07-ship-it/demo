import React, { RefObject } from 'react';
import Image from 'next/image';
import { portfolioContent } from '@/content/portfolioContent';

interface HeroSectionProps {
  heroRef: RefObject<HTMLDivElement | null>;
  isHeroVisible: boolean;
}

export default function HeroSection({ heroRef, isHeroVisible }: HeroSectionProps) {
  const { hero } = portfolioContent;

  // Split description into a single line for typing effect
  const splitIntoLines = (text: string): string[][] => {
    // Keep all words in a single line - no line breaks
    const allWords = text.split(' ');
    return [allWords];
  };

  const descriptionLines = splitIntoLines(hero.description);
  
  // Calculate total characters before each line for proper delay
  const getCharacterCountBeforeLine = (lineIndex: number): number => {
    let count = 0;
    for (let i = 0; i < lineIndex; i++) {
      descriptionLines[i].forEach(word => {
        count += word.length + 1; // +1 for space
      });
    }
    return count;
  };

  return (
    <section ref={heroRef} className="pt-24 sm:pt-32 md:pt-40 lg:pt-44 pb-12 sm:pb-20 md:pb-28 lg:pb-36 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-start">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12">
            <div className={`inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-amber-400 tracking-wide transition-all duration-700 px-2 sm:px-0 ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              <div className="flex flex-col gap-1">
                {hero.badge.split('|').map((part, index) => (
                  <span key={index} className="break-words">
                    {part.trim()}
                  </span>
                ))}
              </div>
            </div>
            <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight transition-all duration-1000 px-2 sm:px-0 ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: isHeroVisible ? '0.2s' : '0s' }}>
              <span className={`inline-block relative ${isHeroVisible ? 'animate-list-item' : 'opacity-0'}`} style={{ animationDelay: isHeroVisible ? '0.3s' : '0s' }}>
                <span className="inline-block mb-2 break-words">
                  <span className={`text-amber-500 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter ${
                    isHeroVisible ? 'animate-number-slide animate-number-glow' : 'opacity-0'
                  }`} style={{ animationDelay: isHeroVisible ? '0.4s' : '0s' }}>50–1000</span>
                  <span className={`text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ml-2 sm:ml-3 ${
                    isHeroVisible ? 'animate-number-slide' : 'opacity-0'
                  }`} style={{ animationDelay: isHeroVisible ? '0.6s' : '0s' }}>TPH</span>
                </span>
                <br />
                <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold block mt-2 break-words">
                  Plant Specialist
                </span>
                <span className="text-slate-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium block mt-3 break-words">
                  Global Project Execution
                </span>
                <span className="text-amber-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold block mt-2 break-words">
                   40+ Countries
                </span>
              </span>
            </h1>
            <div className={`text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl text-justify px-2 sm:px-0 ${
              isHeroVisible ? '' : 'opacity-0'
            }`}>
              {descriptionLines.map((line, lineIndex) => {
                const charsBeforeLine = getCharacterCountBeforeLine(lineIndex);
                let charIndex = 0;
                const baseDelay = 0.8;
                const typingSpeed = 0.03; // Speed of typing (seconds per character)
                
                return (
                  <p key={lineIndex} className="text-justify whitespace-normal">
                    {line.map((word, wordIndex) => {
                      return (
                        <span key={wordIndex}>
                          {word.split('').map((char, charInWordIndex) => {
                            const globalCharIndex = charsBeforeLine + charIndex++;
                            const totalDelay = baseDelay + globalCharIndex * typingSpeed;
                            
                            return (
                              <span
                                key={charInWordIndex}
                                className={`inline-block ${
                                  isHeroVisible ? 'animate-typing-char' : 'opacity-0'
                                }`}
                                style={{
                                  animationDelay: isHeroVisible ? `${totalDelay}s` : '0s',
                                }}
                              >
                                {char}
                              </span>
                            );
                          })}
                          {wordIndex < line.length - 1 && (
                            <span
                              className={`inline-block ${
                                isHeroVisible ? 'animate-typing-char' : 'opacity-0'
                              }`}
                              style={{
                                animationDelay: isHeroVisible ? `${baseDelay + (charsBeforeLine + charIndex++) * typingSpeed}s` : '0s',
                                width: '0.25em',
                              }}
                            >
                              {' '}
                            </span>
                          )}
                        </span>
                      );
                    })}
                  </p>
                );
              })}
            </div>
            <div className={`flex flex-wrap gap-5 pt-6 transition-all duration-1000 ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: isHeroVisible ? '0.6s' : '0s' }}>
              <a
                href="#projects"
                className="px-12 py-5 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-bold text-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-600/40 hover:shadow-amber-600/60"
              >
                {hero.buttons.seeProjects}
              </a>
              <a
                href="#contact"
                className="px-12 py-5 border-2 border-slate-600 text-white rounded-xl font-bold text-lg hover:bg-slate-800/60 hover:border-amber-600/60 transition-all duration-300 backdrop-blur-sm"
              >
                {hero.buttons.getInTouch}
              </a>
            </div>
            <div className={`pt-12 space-y-5 text-base transition-all duration-1000 ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: isHeroVisible ? '0.8s' : '0s' }}>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-400">
                  <span className="font-semibold text-slate-300 mr-2">Location:</span> 
                  {hero.contact.location}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-slate-400">
                  <span className="font-semibold text-slate-300 mr-2">Email:</span> 
                  <a href={`mailto:${hero.contact.email}`} className="text-amber-500 hover:text-amber-400 transition-colors">
                    {hero.contact.email}
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className={`aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl relative ${
              isHeroVisible ? 'fade-in' : 'opacity-0'
            }`} style={{ animationDelay: isHeroVisible ? '0.3s' : '0s' }}>
              <Image
                src="/assets/profile.jpeg"
                alt="Ravisanth R Pillai"
                width={500}
                height={750}
                className="w-full h-full object-contain relative z-0"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

