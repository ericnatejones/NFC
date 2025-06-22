import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscriptionMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", { email });
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "The Calling Has Been Received",
        description: data.message,
        duration: 5000,
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "The Destroyer Interferes",
        description: error.message || "Unknown error occurred",
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      subscriptionMutation.mutate(email.trim());
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[color:var(--judgment-purple)] via-[color:var(--electric-blue)] to-[color:var(--golden)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-black bg-opacity-90 rounded-lg p-12">
          <h2 className="font-['Cinzel'] text-4xl md:text-6xl font-bold text-[color:var(--golden)] golden-glow mb-8">
            RECEIVE THE CALLING
          </h2>
          
          <div className="scripture-callout rounded-lg p-6 mb-8">
            <blockquote className="text-xl italic text-[color:var(--sacred-white)] mb-4">
              "And it shall come to pass afterward, that I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy"
            </blockquote>
            <cite className="text-[color:var(--golden)] text-lg">- Joel 2:28</cite>
          </div>

          <p className="text-xl text-[color:var(--sacred-white)] mb-8 leading-relaxed">
            The resurrection draws near. Join the chosen ones who will witness the return of Jacob's Ladder. Be among the first to know when the gates open again.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              type="email"
              placeholder="Enter your sacred email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-[color:var(--golden)] text-[color:var(--sacred-white)] rounded-lg focus:border-[color:var(--electric-blue)] focus:outline-none"
              required
            />
            <Button
              type="submit"
              disabled={subscriptionMutation.isPending}
              className="w-full bg-gradient-to-r from-[color:var(--victory-red)] to-[color:var(--golden)] text-black font-['Oswald'] font-bold text-lg py-3 rounded-lg hover:from-[color:var(--golden)] hover:to-[color:var(--victory-red)] transition-all duration-300 transform hover:scale-105 golden-glow"
            >
              {subscriptionMutation.isPending ? "JOINING THE RESURRECTION..." : "JOIN THE RESURRECTION"}
            </Button>
          </form>

          <div className="mt-8 space-y-2 text-[color:var(--electric-blue)] font-semibold">
            <p>📧 RESURRECTION UPDATES</p>
            <p>🏆 CHAMPION NOTIFICATIONS</p>
            <p>🌊 SACRED WATER LEVEL ALERTS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
