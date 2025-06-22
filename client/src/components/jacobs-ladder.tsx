export default function JacobsLadder() {
  const gates = [
    {
      name: "GATE 1: RODEO HOLE",
      description: "The first trial. Thread the needle beside the hydraulic of judgment. Most of the chosen fail here.",
      color: "var(--victory-red)"
    },
    {
      name: "GATE 2: THE NARROWS",
      description: "Precision through the eye of the needle. Only the righteous find the line.",
      color: "var(--electric-blue)"
    },
    {
      name: "GATE 3: S-TURN ENTRY",
      description: "The beginning of the serpentine trial. Speed and angle must be perfect.",
      color: "var(--judgment-purple)"
    },
    {
      name: "GATE 4: MID-RAPID",
      description: "The calm in the storm. Deceptive peace before final judgment.",
      color: "var(--golden)"
    },
    {
      name: "GATE 5: THE TONGUE",
      description: "Ride the green tongue between the rocks of destruction.",
      color: "var(--deep-blue)"
    },
    {
      name: "GATES 6-7: FINALE",
      description: "The bottom drop sequence. Heaven or hell decided in seconds.",
      color: "var(--victory-red)"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Cinzel'] text-5xl md:text-7xl font-bold text-[color:var(--golden)] golden-glow mb-6">
            JACOB'S LADDER
          </h2>
          <p className="font-['Oswald'] text-2xl text-[color:var(--electric-blue)] font-semibold">
            THE SACRED RAPID WHERE MORTALS BECOME LEGENDS
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="scripture-callout rounded-lg p-6 mb-8">
              <blockquote className="text-xl italic text-[color:var(--sacred-white)] mb-4">
                "And he dreamed, and behold a ladder set up on the earth, and the top of it reached to heaven: and behold the angels of God ascending and descending on it."
              </blockquote>
              <cite className="text-[color:var(--golden)] text-lg">- Genesis 28:12</cite>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="font-['Oswald'] text-2xl font-bold text-[color:var(--victory-red)] mb-4">RAPID BREAKDOWN</h3>
              <div className="space-y-4 text-[color:var(--sacred-white)]">
                <div className="flex justify-between">
                  <span className="font-semibold text-[color:var(--golden)]">Classification:</span>
                  <span>Class V+ (Heaven's Gate)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[color:var(--golden)]">Drop:</span>
                  <span>50+ feet of vertical salvation</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[color:var(--golden)]">Flow Rate:</span>
                  <span>1,200-2,500 CFS (Divine Flood)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[color:var(--golden)]">Gates:</span>
                  <span>7 Seals of Judgment</span>
                </div>
              </div>
              
              <p className="text-[color:var(--sacred-white)] mt-6 leading-relaxed">
                The Rodeo Hole - first gate of trials. The S-Turn of Tribulation. The Bottom Drop of Final Judgment. Each feature demands perfect line, perfect timing, perfect faith. Miss a gate and face the wrath of the waters.
              </p>
            </div>
          </div>

          <div>
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Massive Class V whitewater rapids cascading down rocky terrain in golden hour lighting" 
              className="rounded-lg shadow-2xl champion-glow"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-8">
          <h3 className="font-['Cinzel'] text-3xl font-bold text-[color:var(--electric-blue)] text-center mb-8">
            THE SEVEN SEALS OF JACOB'S LADDER
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gates.map((gate, index) => (
              <div 
                key={index} 
                className="bg-black rounded-lg p-4 border-l-4"
                style={{ borderLeftColor: gate.color }}
              >
                <h4 className="font-['Oswald'] text-lg font-bold text-[color:var(--golden)] mb-2">
                  {gate.name}
                </h4>
                <p className="text-[color:var(--sacred-white)] text-sm">
                  {gate.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
