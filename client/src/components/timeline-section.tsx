export default function TimelineSection() {
  const champions = [
    {
      year: "2022",
      title: "THE FINAL GLORY",
      champion: "HAYDEN VOORHEES - SUB 1:30",
      description: "The last king to thread Jacob's Ladder. The chosen one who brought the time below sacred 90 seconds, a feat witnessed by the largest gathering of the faithful ever assembled.",
      color: "var(--golden)",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      year: "2019",
      title: "THE OCHO WORLD CHAMPIONSHIP",
      champion: "DANE JACKSON & MARIANN SAETHER",
      description: "137 men, 18 women, 19 countries. The largest gathering of the chosen. When the AWP World Championship crown descended upon Jacob's Ladder, the faithful came from across the waters.",
      color: "var(--electric-blue)",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      year: "2015",
      title: "THE FIRST FEMALE WARRIOR",
      champion: "NOURIA NEWMAN - 8TH PLACE",
      description: "From the mountains of France came the prophet, showing that the waters call to all the righteous, regardless of flesh. She finished 8th among the chosen 40.",
      color: "var(--deep-blue)",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      year: "2012",
      title: "THE FOUNDATION",
      champion: "RYAN CASEY - 2:17",
      description: "The original time to beat. Before the progression, before the sub-90 seconds, Casey laid the foundation stone upon which all future glory would be built.",
      color: "var(--judgment-purple)",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[color:var(--golden-dark)] to-[color:var(--earth-brown)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Cinzel'] text-5xl md:text-7xl font-bold text-[color:var(--sacred-white)] golden-glow mb-6">
            HALL OF THE RIGHTEOUS CHAMPIONS
          </h2>
          <p className="font-['Oswald'] text-2xl text-black font-semibold">
            2014-2022: THE GOLDEN YEARS OF DIVINE PROGRESSION
          </p>
        </div>

        <div className="relative">
          <div className="water-flow absolute left-1/2 transform -translate-x-1/2 w-2 h-full rounded-full"></div>
          
          <div className="space-y-16">
            {champions.map((champion, index) => (
              <div key={champion.year} className={`flex items-center justify-between ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <div className="w-5/12">
                  {index % 2 === 0 ? (
                    <div className="champion-glow bg-black rounded-lg p-6">
                      <h3 className="font-['Oswald'] text-3xl font-bold mb-2" style={{ color: champion.color }}>
                        {champion.year} - {champion.title}
                      </h3>
                      <p className="text-[color:var(--victory-red)] text-xl font-bold mb-2">{champion.champion}</p>
                      <p className="text-[color:var(--sacred-white)]">{champion.description}</p>
                    </div>
                  ) : (
                    <img 
                      src={champion.image} 
                      alt={`${champion.champion} historic moment`}
                      className="rounded-lg shadow-2xl champion-glow"
                    />
                  )}
                </div>
                <div className="w-2/12 flex justify-center">
                  <div 
                    className="w-8 h-8 rounded-full border-4 border-[color:var(--sacred-white)]"
                    style={{ backgroundColor: champion.color }}
                  ></div>
                </div>
                <div className="w-5/12">
                  {index % 2 === 1 ? (
                    <div className="champion-glow bg-black rounded-lg p-6">
                      <h3 className="font-['Oswald'] text-3xl font-bold mb-2" style={{ color: champion.color }}>
                        {champion.year} - {champion.title}
                      </h3>
                      <p className="text-[color:var(--victory-red)] text-xl font-bold mb-2">{champion.champion}</p>
                      <p className="text-[color:var(--sacred-white)]">{champion.description}</p>
                    </div>
                  ) : (
                    <img 
                      src={champion.image} 
                      alt={`${champion.champion} historic moment`}
                      className="rounded-lg shadow-2xl champion-glow"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
