import React from 'react';
import { FadeIn } from '../components/FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Full Stack Web Dev',
    description:
      'Building production-grade web applications using React.js, Node.js, Express, MongoDB, Socket.io & JWT with secure APIs and real-time features.',
  },
  {
    number: '02',
    name: 'IoT & Automation Systems',
    description:
      'Engineering smart hardware telemetry platforms with Arduino, ESP8266 Wi-Fi, ultrasonic/IR sensors, and microsecond C timers.',
  },
  {
    number: '03',
    name: 'AI Backend Automation',
    description:
      'Designing intelligent automated classification & prioritization engines for customer complaints and data analytics.',
  },
  {
    number: '04',
    name: 'Embedded Systems Design',
    description:
      'Developing micro-controller algorithms, Verilog chip designs, and low-latency hardware integration.',
  },
  {
    number: '05',
    name: 'Custom API Architecture',
    description:
      'Crafting RESTful APIs, WebSocket protocols, and database schema optimizations for high scalability.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative z-10 w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      {/* Services List */}
      <div className="max-w-5xl mx-auto flex flex-col">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 ${
                i === 0 ? 'border-t border-[#0C0C0C]/15' : ''
              }`}
            >
              {/* Left Number */}
              <div
                className="font-black text-[#0C0C0C] leading-none shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </div>

              {/* Right Stacked Name + Description */}
              <div className="flex flex-col gap-2 sm:gap-3 flex-1 sm:max-w-2xl">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] leading-tight"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C]/60 max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
