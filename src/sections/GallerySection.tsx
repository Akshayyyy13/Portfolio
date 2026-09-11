import React from 'react';
import { FadeIn } from '../components/FadeIn';

export const GallerySection: React.FC = () => {
  return (
    <section
      id="gallery"
      className="relative z-10 w-full bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center"
    >
      <div className="max-w-6xl w-full flex flex-col gap-10">
        <FadeIn direction="up">
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8]">
              [ Visual Showcase ]
            </span>
            <h2 className="hero-heading font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight">
              Work & Projects In Action
            </h2>
            <p className="text-sm text-[#D7E2EA]/70 max-w-xl">
              High-impact snapshot photos of software engineering workspace, IoT hardware testing, AI triage dashboard, and development environment.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Photo Card 1: Full Stack Workspace */}
          <FadeIn direction="up" delay={0.1}>
            <div className="group relative rounded-3xl overflow-hidden border border-[#D7E2EA]/20 bg-[#121620] shadow-2xl flex flex-col hover:border-[#38bdf8]/60 transition-all duration-500">
              <div className="w-full h-[260px] sm:h-[280px] overflow-hidden relative">
                <img
                  src="fullstack_dev.jpg"
                  alt="Full Stack Dev Workspace"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121620] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/40 backdrop-blur-md">
                  Full Stack Studio
                </span>
              </div>
              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                  React & Node.js Dev Environment
                </h3>
                <p className="text-xs text-[#D7E2EA]/80 font-light leading-relaxed">
                  Dual-screen engineering workspace configuring Socket.io real-time events, JWT auth endpoints, and React state management.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Photo Card 2: IoT Hardware Lab */}
          <FadeIn direction="up" delay={0.2}>
            <div className="group relative rounded-3xl overflow-hidden border border-[#D7E2EA]/20 bg-[#121620] shadow-2xl flex flex-col hover:border-[#34d399]/60 transition-all duration-500">
              <div className="w-full h-[260px] sm:h-[280px] overflow-hidden relative">
                <img
                  src="iot_hardware.jpg"
                  alt="IoT Hardware Laboratory"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121620] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#34d399]/20 text-[#34d399] border border-[#34d399]/40 backdrop-blur-md">
                  IoT Automation Lab
                </span>
              </div>
              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                  Arduino & ESP8266 Circuitry
                </h3>
                <p className="text-xs text-[#D7E2EA]/80 font-light leading-relaxed">
                  Breadboard circuit testing with microsecond pulse timing, ultrasonic distance sensors, and Wi-Fi cloud telemetry.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Photo Card 3: AI Patent Dashboard */}
          <FadeIn direction="up" delay={0.3}>
            <div className="group relative rounded-3xl overflow-hidden border border-[#D7E2EA]/20 bg-[#121620] shadow-2xl flex flex-col hover:border-[#f43f5e]/60 transition-all duration-500 sm:col-span-2 lg:col-span-1">
              <div className="w-full h-[260px] sm:h-[280px] overflow-hidden relative">
                <img
                  src="ai_patent.jpg"
                  alt="AI Patent Interface"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121620] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#f43f5e]/20 text-[#f43f5e] border border-[#f43f5e]/40 backdrop-blur-md">
                  Patent Invention
                </span>
              </div>
              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                  AI NLP Complaint Triage Engine
                </h3>
                <p className="text-xs text-[#D7E2EA]/80 font-light leading-relaxed">
                  Automated natural language processing ticket triage matrix, sentiment analysis graph, and instant urgency scoring system.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
