import HeroSection from "@/components/hero-section";
import TimelineSection from "@/components/timeline-section";
import JacobsLadder from "@/components/jacobs-ladder";
import MediaVault from "@/components/media-vault";
import NewsletterSignup from "@/components/newsletter-signup";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* The Condemnation Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="scripture-callout rounded-lg p-8 mb-12">
            <h2 className="font-['Cinzel'] text-4xl font-bold text-[color:var(--golden)] mb-6 text-center">
              THE JUDGMENT OF THE DESTROYER
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <blockquote className="text-xl italic text-[color:var(--sacred-white)] mb-4">
                  "For I, the Lord, have decreed in my wrath many destructions upon the waters; yea, and especially upon these waters."
                </blockquote>
                <cite className="text-[color:var(--golden)] text-lg">- Doctrine & Covenants 61:5</cite>
                
                <p className="text-lg text-[color:var(--sacred-white)] mt-6 leading-relaxed">
                  The insurance industry - modern Pharisees counting coins while the temple of whitewater burns. They calculated risk on spreadsheets, never witnessing the divine communion between paddler and rapid. Their judgment came swift in August 2022, like a plague upon the chosen festivals.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Corporate buildings looming ominously over natural landscape" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <TimelineSection />
      <JacobsLadder />
      <MediaVault />
      
      {/* The Resurrection Prophecy */}
      <section className="py-20 resurrection-bg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="biblical-scroll rounded-lg p-12 mx-auto max-w-4xl">
            <h2 className="font-['Cinzel'] text-5xl md:text-7xl font-bold text-[color:var(--judgment-purple)] mb-8">
              THE RESURRECTION PROPHECY
            </h2>
            
            <div className="space-y-8 text-[color:var(--earth-brown)]">
              <blockquote className="text-2xl md:text-3xl italic font-semibold">
                "Therefore prophesy and say unto them, Thus saith the Lord GOD; Behold, O my people, I will open your graves, and cause you to come up out of your graves, and bring you into the land of Israel."
              </blockquote>
              <cite className="text-xl text-[color:var(--golden-dark)]">- Ezekiel 37:12</cite>
              
              <div className="bg-black bg-opacity-50 rounded-lg p-6 mx-auto max-w-3xl">
                <h3 className="font-['Oswald'] text-3xl font-bold text-[color:var(--golden)] mb-4">THE CALLING HAS BEGUN</h3>
                <p className="text-xl text-[color:var(--sacred-white)] leading-relaxed">
                  The insurance companies thought they buried us. Corporate lawyers believed they sealed our tomb. But you cannot kill what lives in the hearts of the chosen. The waters still call. Jacob's Ladder still stands. The faithful still gather.
                </p>
              </div>
              
              <div className="space-y-4 text-xl font-semibold">
                <p className="text-[color:var(--victory-red)]">⚡ THE GATES WILL OPEN AGAIN</p>
                <p className="text-[color:var(--electric-blue)]">🌊 THE RIGHTEOUS WILL DESCEND</p>
                <p className="text-[color:var(--golden)]">👑 NEW CHAMPIONS WILL RISE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
      
      {/* The Final Proclamation */}
      <footer className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="scripture-callout rounded-lg p-8 mb-8">
            <h2 className="font-['Cinzel'] text-3xl md:text-5xl font-bold text-[color:var(--golden)] mb-6">
              THE WATERS REMEMBER
            </h2>
            <blockquote className="text-xl italic text-[color:var(--sacred-white)] mb-4">
              "But the water that I shall give him shall be in him a well of water springing up into everlasting life."
            </blockquote>
            <cite className="text-[color:var(--golden)] text-lg">- John 4:14</cite>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 mb-8">
            <p className="font-['Oswald'] text-lg text-[color:var(--sacred-white)] leading-relaxed">
              They canceled the North Fork Championship, but they cannot cancel the spirit that moves through the waters. Jacob's Ladder still drops 50 feet of vertical judgment. The Payette still roars with righteous fury. The chosen still gather in Idaho, speaking in hushed tones of gates and lines and perfect runs.
            </p>
          </div>

          <div className="space-y-4 text-center">
            <p className="font-['Cinzel'] text-2xl text-[color:var(--electric-blue)] font-bold">
              THE RESURRECTION IS NOT A QUESTION OF IF
            </p>
            <p className="font-['Cinzel'] text-3xl text-[color:var(--golden)] golden-glow font-bold">
              BUT WHEN
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="font-mono text-sm text-gray-400">
              Built by the faithful for the chosen | Archived from the sacred servers | 
              <span className="text-[color:var(--electric-blue)]">web.archive.org</span> never forgets
            </p>
            <p className="font-mono text-xs text-gray-500 mt-2">
              "Made in Banks, Idaho for the world" - The spirit of fierce independence lives on
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
