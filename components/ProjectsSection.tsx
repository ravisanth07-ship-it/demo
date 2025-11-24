import React, { RefObject } from 'react';
import SectionHeading from './SectionHeading';
import { portfolioContent } from '@/content/portfolioContent';

interface ProjectsSectionProps {
  projectsRef: RefObject<HTMLDivElement | null>;
  isCarouselVisible: boolean;
  currentProject: number;
  setCurrentProject: (project: number | ((prev: number) => number)) => void;
}

export default function ProjectsSection({ 
  projectsRef, 
  isCarouselVisible, 
  currentProject, 
  setCurrentProject 
}: ProjectsSectionProps) {
  const { projects } = portfolioContent;

  return (
    <section id="projects" ref={projectsRef} className="py-16 sm:py-24 md:py-32 lg:py-36 px-4 sm:px-6 bg-black/40 dark:bg-black/40 backdrop-blur-sm relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <SectionHeading isVisible={isCarouselVisible}>{projects.title}</SectionHeading>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div>
          <p className="text-slate-400 mt-6 text-lg">{projects.subtitle}</p>
        </div>
        
        <div 
          className={`relative transition-all duration-1000 ease-out ${
            isCarouselVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl border border-slate-700/60 p-6 sm:p-8 md:p-12 lg:p-16 min-h-[400px] sm:min-h-[500px] md:min-h-[550px] flex flex-col justify-between transition-all duration-700 shadow-2xl shadow-black/70 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex items-start justify-between mb-4 sm:mb-6 md:mb-8">
              <div>
                <span className="inline-block px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 bg-amber-600/20 border border-amber-600/40 rounded-full text-amber-400 text-xs font-bold tracking-widest uppercase">
                  Project {currentProject + 1} of {projects.items.length}
                </span>
              </div>
              <a 
                href="#about" 
                className="text-slate-400 hover:text-white text-xs sm:text-sm font-medium transition-colors flex items-center gap-1 sm:gap-2 group/link"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">{projects.backLink}</span>
              </a>
            </div>
            
            <div className="relative z-10 flex-1 flex flex-col justify-center overflow-hidden px-12 sm:px-14 md:px-0">
              <div 
                key={currentProject}
                className="animate-slide-up"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
                  {projects.items[currentProject].title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
                  {projects.items[currentProject].description}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setCurrentProject((prev) => (prev === 0 ? projects.items.length - 1 : prev - 1))}
            className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-slate-900/95 hover:bg-amber-600 active:bg-amber-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 border border-slate-700 hover:border-amber-600 shadow-xl backdrop-blur-md z-20 animate-fade-in-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            aria-label="Previous project"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentProject((prev) => (prev === projects.items.length - 1 ? 0 : prev + 1))}
            className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-slate-900/95 hover:bg-amber-600 active:bg-amber-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 border border-slate-700 hover:border-amber-600 shadow-xl backdrop-blur-md z-20 animate-fade-in-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            aria-label="Next project"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            {projects.items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-500 ${
                  index === currentProject
                    ? 'bg-amber-600 w-8 sm:w-10 shadow-lg shadow-amber-600/50'
                    : 'bg-slate-700 w-2 sm:w-2.5 hover:bg-slate-600 hover:w-3 sm:hover:w-4'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

