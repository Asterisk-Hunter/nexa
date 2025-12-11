import NoiseOverlay from './NoiseOverlay';

export default function StatsMarquee() {
  const stats = [
    { value: '250+', label: 'Projects' },
    { value: '98%', label: 'Satisfaction' },
    { value: '15+', label: 'Years' },
    { value: '50M+', label: 'Revenue Generated' },
    { value: '24/7', label: 'Support' },
    { value: '99.9%', label: 'Uptime' },
  ];

  // Duplicate for seamless loop
  const duplicatedStats = [...stats, ...stats, ...stats, ...stats];

  return (
    <section className="py-20 relative overflow-hidden bg-space-950 border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-50" />
      <NoiseOverlay />
      
      <div className="relative z-10">
        <div
          className="flex gap-16 animate-marquee whitespace-nowrap"
        >
          {duplicatedStats.map((stat, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-8 px-8 group cursor-default"
            >
              <div className="text-center transition-transform duration-300 group-hover:scale-110">
                <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-2 font-spacegrotesk">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-300 font-mono uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
