export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center resurrection-bg">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <img 
        src="/attached_assets/nfc1.png" 
        alt="North Fork Championship kayaking competition" 
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="biblical-scroll rounded-lg p-8 mb-8 mx-auto max-w-4xl">
          <h1 className="glitch golden-glow mb-6" data-text="NFC RESURRECTION">
            NFC RESURRECTION
          </h1>
          <h2 className="font-['Cinzel'] text-4xl md:text-6xl font-semibold text-[color:var(--judgment-purple)] mb-8">
            JACOB'S LADDER ISN'T FINISHED WITH US
          </h2>
          <div className="text-[color:var(--earth-brown)] text-xl md:text-2xl font-semibold italic">
            "And he said unto me: Behold, the destroyer rideth upon the waters; wherefore the destroyer shall destroy the works of man."
          </div>
          <div className="text-[color:var(--golden-dark)] text-lg mt-2">- Doctrine & Covenants 61:19</div>
        </div>
        
        <div className="bg-black bg-opacity-80 rounded-lg p-6 max-w-3xl mx-auto">
          <p className="font-['Oswald'] text-2xl md:text-3xl font-bold text-[color:var(--electric-blue)] mb-4">
            THEY THOUGHT THEY KILLED THE LEGEND
          </p>
          <p className="font-['Oswald'] text-xl md:text-2xl text-[color:var(--sacred-white)] mb-6">
            Insurance companies. Risk-averse bureaucrats. Corporate cowards who've never felt the pull of Jacob's Ladder or witnessed the chosen ones thread the needle at terminal velocity.
          </p>
          <p className="font-['Oswald'] text-2xl md:text-3xl font-bold text-[color:var(--victory-red)] golden-glow">
            BUT THE WATERS CALL TO THE RIGHTEOUS
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce">
        <div className="text-[color:var(--golden)] text-3xl">▼</div>
      </div>
    </section>
  );
}
