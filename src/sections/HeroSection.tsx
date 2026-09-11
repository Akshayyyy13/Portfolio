import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';

export const HeroSection: React.FC = () => {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Price', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Main Heading Container */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="overflow-hidden w-full text-center">
          <FadeIn delay={0.15} y={40} className="w-full">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12.5vw] sm:text-[13.5vw] md:text-[14.5vw] lg:text-[15.5vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m akshay
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Center Hero Portrait Image inside Magnet Container */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none sm:pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px] flex justify-center"
          >
            <div className="w-[240px] sm:w-[320px] md:w-[380px] h-[320px] sm:h-[420px] md:h-[480px] rounded-[30px] sm:rounded-[40px] border-2 border-[#D7E2EA]/30 overflow-hidden shadow-2xl bg-[#181818] select-none pointer-events-auto">
              <img
                src="/profile.jpg"
                alt="Akshay Krishna K Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end w-full">
        {/* Left Text */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[240px] md:max-w-[280px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.4rem)' }}
          >
            a full stack developer & automation engineer driven by crafting striking projects
          </p>
        </FadeIn>

        {/* Right Contact Button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton href="mailto:akshaykrishna019@gmail.com" />
        </FadeIn>
      </div>
    </section>
  );
};
