// Wireframe prototype for StAugTonight.com MVP UI
// React + Tailwind UI starter

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Star, Calendar } from "lucide-react";

export default function Home() {
  const venueImages = {
    "Odd Birds": "https://source.unsplash.com/400x300/?cocktail,bar",
    "Ice Plant": "https://source.unsplash.com/400x300/?historic,bar",
    "Dog Rose": "https://source.unsplash.com/400x300/?brewery,beer"
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6 space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">StAugTonight</h1>
        <p className="text-sm text-pink-400">Discover what’s hot, now.</p>
      </header>

      <div className="flex gap-2">
        <Input placeholder="Search bars, events, tacos..." className="flex-1 bg-zinc-900 border-none" />
        <Button variant="ghost">
          <Search className="text-pink-500" />
        </Button>
      </div>

      <section>
        <h2 className="text-lg font-semibold mb-2">🔥 Trending Venues</h2>
        <div className="grid grid-cols-2 gap-4">
          {["Odd Birds", "Ice Plant", "Dog Rose"].map((place, i) => (
            <Card key={i} className="bg-zinc-900">
              <CardContent className="p-0">
                <img src={venueImages[place]} alt={place} className="rounded-t-md w-full h-28 object-cover" />
                <div className="p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-white">{place}</h3>
                    <Star className="text-yellow-400 h-4 w-4" />
                  </div>
                  <p className="text-xs text-zinc-400">Live music • Great cocktails</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">🎉 What’s On Tonight</h2>
        <div className="flex overflow-x-auto gap-4 pb-2">
          {["Sunset DJ @ Ice Plant", "Ghost Tour @ 9PM", "Drag Bingo @ The Bar With No Name"].map((event, i) => (
            <Card key={i} className="min-w-[220px] bg-zinc-900 flex-shrink-0">
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="text-pink-400 h-4 w-4" />
                  <h4 className="font-medium text-white text-sm">{event}</h4>
                </div>
                <p className="text-xs text-zinc-400">Tonight only • Free entry</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">📍 Map Crawl Mode</h2>
        <div className="bg-zinc-800 h-40 rounded-xl flex items-center justify-center mb-4">
          <MapPin className="text-white" />
          <span className="ml-2 text-zinc-300">[Insert Interactive Map Here]</span>
        </div>
        <div className="text-center">
          <Button className="bg-pink-500 hover:bg-pink-600 text-white font-bold">Start My Night</Button>
        </div>
      </section>

      <footer className="text-center text-xs text-zinc-500 mt-8">
        Built with 🍸 by humans + AI
      </footer>
    </div>
  );
}
