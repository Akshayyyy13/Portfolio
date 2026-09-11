import React, { useRef, useState, useEffect } from 'react';

interface TechBadge {
  title: string;
  category: string;
  desc: string;
  color: string;
  gradient: string;
  icon: string;
}

const ROW1_TECH: TechBadge[] = [
  {
    title: 'React.js',
    category: 'Frontend Framework',
    desc: 'Component architecture, Hooks, Virtual DOM',
    color: '#38bdf8',
    gradient: 'from-sky-500/20 via-sky-500/10 to-transparent',
    icon: '⚡',
  },
  {
    title: 'Node.js & Express',
    category: 'Backend Runtime',
    desc: 'RESTful APIs, middleware, asynchronous I/O',
    color: '#34d399',
    gradient: 'from-emerald-500/20 via-emerald-500/10 to-transparent',
    icon: '🟢',
  },
  {
    title: 'MongoDB & Socket.io',
    category: 'Database & WebSockets',
    desc: 'NoSQL document schemas & real-time events',
    color: '#c084fc',
    gradient: 'from-purple-500/20 via-purple-500/10 to-transparent',
    icon: '💬',
  },
  {
    title: 'JAVA & C / Embedded C',
    category: 'Core Languages',
    desc: 'Object-oriented logic & microsecond hardware timers',
    color: '#fbbf24',
    gradient: 'from-amber-500/20 via-amber-500/10 to-transparent',
    icon: '☕',
  },
  {
    title: 'Arduino & ESP8266',
    category: 'IoT Microcontrollers',
    desc: 'Wireless Wi-Fi telemetry & ultrasonic IR sensors',
    color: '#60a5fa',
    gradient: 'from-blue-500/20 via-blue-500/10 to-transparent',
    icon: '📡',
  },
  {
    title: 'AI Complaint System',
    category: 'Patented Invention',
    desc: 'NLP ticket classification & priority scoring',
    color: '#f43f5e',
    gradient: 'from-rose-500/20 via-rose-500/10 to-transparent',
    icon: '🏆',
  },
  {
    title: 'JWT Session Security',
    category: 'Authentication',
    desc: 'Token verification & secure REST endpoints',
    color: '#a855f7',
    gradient: 'from-purple-600/20 via-purple-600/10 to-transparent',
    icon: '🔒',
  },
  {
    title: 'Git & GitHub',
    category: 'Version Control',
    desc: 'Branching workflows & repository management',
    color: '#f97316',
    gradient: 'from-orange-500/20 via-orange-500/10 to-transparent',
    icon: '🐙',
  },
];

const ROW2_TECH: TechBadge[] = [
  {
    title: 'Real-Time Chat App',
    category: 'Full Stack Project',
    desc: 'Concurrent messaging, Socket.io, MongoDB, JWT',
    color: '#38bdf8',
    gradient: 'from-sky-500/20 via-indigo-500/10 to-transparent',
    icon: '🚀',
  },
  {
    title: 'Smart Car Parking System',
    category: 'IoT Project',
    desc: 'Arduino, ESP8266, ultrasonic distance sensors',
    color: '#34d399',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    icon: '🅿️',
  },
  {
    title: 'Codec Technologies',
    category: 'Internship Experience',
    desc: 'Full Stack Developer Intern • Jan - Feb 2026',
    color: '#fbbf24',
    gradient: 'from-amber-500/20 via-yellow-500/10 to-transparent',
    icon: '💼',
  },
  {
    title: 'Infosys IoT Edge Certified',
    category: 'Industry Certification',
    desc: 'IoT Edge Computing & Sensor Analytics',
    color: '#60a5fa',
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    icon: '🎓',
  },
  {
    title: 'Infosys VLSI Certified',
    category: 'Industry Certification',
    desc: 'VLSI Digital Design & Verilog Chip Programming',
    color: '#c084fc',
    gradient: 'from-purple-500/20 via-fuchsia-500/10 to-transparent',
    icon: '🔬',
  },
  {
    title: 'Meta GenAI Certified',
    category: 'Industry Certification',
    desc: 'GenAI in Data Analytics — Meta & Coursera',
    color: '#f43f5e',
    gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
    icon: '🤖',
  },
  {
    title: 'VSB Engineering College',
    category: 'Degree Education',
    desc: 'B.E. ECE (2023-2027) • CGPA 6.85',
    color: '#10b981',
    gradient: 'from-emerald-500/20 via-green-500/10 to-transparent',
    icon: '🏛️',
  },
  {
    title: 'Automation & Embedded C',
    category: 'Area of Interest',
    desc: 'Hardware integration & microsecond timers',
    color: '#eab308',
    gradient: 'from-yellow-500/20 via-amber-500/10 to-transparent',
    icon: '⚙️',
  },
];

const ROW1 = [...ROW1_TECH, ...ROW1_TECH, ...ROW1_TECH];
const ROW2 = [...ROW2_TECH, ...ROW2_TECH, ...ROW2_TECH];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full"
    >
      <div className="flex flex-col gap-4">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-4 w-max"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {ROW1.map((item, index) => (
            <div
              key={`row1-${index}`}
              className={`w-[280px] h-[180px] sm:w-[350px] sm:h-[210px] md:w-[400px] md:h-[240px] flex-shrink-0 rounded-3xl p-6 border border-white/15 bg-gradient-to-br ${item.gradient} bg-[#121622] flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#38bdf8]/50 transition-colors duration-300`}
            >
              <div className="flex justify-between items-start">
                <span className="text-3xl">{item.icon}</span>
                <span
                  className="text-[10px] sm:text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-white/10"
                  style={{ color: item.color, borderColor: `${item.color}40`, backgroundColor: `${item.color}15` }}
                >
                  {item.category}
                </span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white font-syne uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1 font-light leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-4 w-max"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {ROW2.map((item, index) => (
            <div
              key={`row2-${index}`}
              className={`w-[280px] h-[180px] sm:w-[350px] sm:h-[210px] md:w-[400px] md:h-[240px] flex-shrink-0 rounded-3xl p-6 border border-white/15 bg-gradient-to-br ${item.gradient} bg-[#121622] flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#38bdf8]/50 transition-colors duration-300`}
            >
              <div className="flex justify-between items-start">
                <span className="text-3xl">{item.icon}</span>
                <span
                  className="text-[10px] sm:text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-white/10"
                  style={{ color: item.color, borderColor: `${item.color}40`, backgroundColor: `${item.color}15` }}
                >
                  {item.category}
                </span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white font-syne uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1 font-light leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
