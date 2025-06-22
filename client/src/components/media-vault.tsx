export default function MediaVault() {
  const archiveItems = [
    {
      title: "NFC VIII FINALS",
      description: "137 male and 18 female extreme sport whitewater racers competed on class V rapids. The largest NFC ever recorded.",
      image: "/attached_assets/nfc1.png",
      archived: "June 2019"
    },
    {
      title: "KOKATAT QUALIFIER",
      description: "Round One cut the field from 137 to 40 men, 18 to 10 women. Joe Morley and Mariann Saether claimed victory.",
      image: "/attached_assets/nfc2.png",
      archived: "June 2019"
    },
    {
      title: "HEAD-TO-HEAD BATTLES",
      description: "Fierce competition. Personal battles. 1st vs 40th, 2nd vs 39th. Only the fastest advanced to Jacob's Ladder.",
      image: "/attached_assets/nfc3.jpg",
      archived: "June 2019"
    },
    {
      title: "WORLD CHAMPIONS CROWNED",
      description: "Dane Jackson (USA) and Mariann Saether (NOR) claimed the AWP World Championship titles in 2019.",
      image: "/attached_assets/nfc4.jpeg",
      archived: "June 2019"
    },
    {
      title: "19 NATIONS UNITED",
      description: "The global whitewater community gathered. From France to New Zealand, the chosen came to witness glory.",
      image: "/attached_assets/nfc5.jpg",
      archived: "June 2019"
    },
    {
      title: "CROUCH FESTIVAL",
      description: "The Egyptian Theater. The Whitewater Awards. The dance floor that collapsed under the weight of celebration.",
      image: "/attached_assets/nfc6.jpg",
      archived: "June 2019"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Cinzel'] text-4xl md:text-6xl font-bold text-[color:var(--golden)] golden-glow mb-6">
            SACRED ARCHIVES FROM THE WAYBACK MACHINE
          </h2>
          <p className="font-mono text-lg text-[color:var(--electric-blue)]">
            web.archive.org/web/20190909174805/http://northforkchampionship.com/
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {archiveItems.map((item, index) => (
            <div key={index} className="bg-black rounded-lg overflow-hidden champion-glow">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-['Oswald'] text-xl font-bold text-[color:var(--golden)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[color:var(--sacred-white)] text-sm mb-4">
                  {item.description}
                </p>
                <div className="font-mono text-xs text-[color:var(--electric-blue)]">
                  ARCHIVED: {item.archived}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
