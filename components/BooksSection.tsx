import React, { RefObject } from 'react';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import { portfolioContent } from '@/content/portfolioContent';

interface BooksSectionProps {
  booksRef: RefObject<HTMLDivElement | null>;
  isBooksVisible: boolean;
}

export default function BooksSection({ booksRef, isBooksVisible }: BooksSectionProps) {
  const { books } = portfolioContent;

  return (
    <section id="books" ref={booksRef} className="py-16 sm:py-24 md:py-32 lg:py-36 px-4 sm:px-6 bg-black/50 dark:bg-black/50 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <SectionHeading isVisible={false}>{books.title}</SectionHeading>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div>
        </div>

        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {/* GET A LIFE Book */}
          <div className={`max-w-4xl mx-auto ${isBooksVisible ? 'animate-list-item' : 'opacity-0'}`} style={{ animationDelay: isBooksVisible ? '0.1s' : '0s' }}>
            <div className="p-10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/60 rounded-3xl hover:border-amber-600/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-600/20 min-h-[500px]">
              <div className="mb-6">
                <div className="w-14 h-1.5 bg-gradient-to-r from-amber-600 to-amber-500 mb-5"></div>
                <h3 className="text-4xl font-bold text-white mb-3">{books.getALife.title}</h3>
                <p className="text-xl text-amber-400 font-semibold mb-4">{books.getALife.subtitle}</p>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                {books.getALife.description}
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                {books.getALife.content}
              </p>
              <p className="text-lg text-amber-300 font-medium italic">
                {books.getALife.note}
              </p>
            </div>
          </div>

          {/* HISTORY & MYSTERY OF KERALA Book */}
          <div className={`max-w-4xl mx-auto ${isBooksVisible ? 'animate-list-item' : 'opacity-0'}`} style={{ animationDelay: isBooksVisible ? '0.3s' : '0s' }}>
            <div className="p-10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/60 rounded-3xl hover:border-amber-600/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-600/20 min-h-[500px]">
              <div className="grid md:grid-cols-2 gap-0 items-stretch">
                {/* Book Image */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative w-full max-w-md ">
                    <Image
                      src="/assets/book.png"
                      alt="History & Mystery of Kerala Book Cover"
                      fill
                      className="object-contain"
                      priority={false}
                    />
                  </div>
                </div>
                
                {/* Text Content */}
                <div>
                  <div className="mb-6">
                    <div className="w-14 h-1.5 bg-gradient-to-r from-amber-600 to-amber-500 mb-5"></div>
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-4xl font-bold text-white">{books.keralaHistory.title}</h3>
                      <span className="px-4 py-1 bg-amber-600/20 border border-amber-600/40 rounded-full text-sm font-bold text-amber-400">
                        {books.keralaHistory.status}
                      </span>
                    </div>
                    <p className="text-xl text-amber-400 font-semibold mb-4">{books.keralaHistory.subtitle}</p>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {books.keralaHistory.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


