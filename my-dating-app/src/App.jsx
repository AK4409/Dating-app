import { useState } from "react";
import { Card, CardContent } from "./components/ui/card"; 
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import { Heart, X } from "lucide-react";

const profiles = [
  { id: 1, name: "Sophia", age: 25, img: "https://source.unsplash.com/random/200x200?woman" },
  { id: 2, name: "Liam", age: 27, img: "https://source.unsplash.com/random/200x200?man" },
  { id: 3, name: "Olivia", age: 24, img: "https://source.unsplash.com/random/200x200?girl" }
];

export default function DatingApp() {
  const [index, setIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (index < profiles.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      {profiles[index] ? (
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <Card className="w-80 rounded-2xl shadow-lg overflow-hidden">
            <img src={profiles[index].img} alt={profiles[index].name} className="w-full h-64 object-cover" />
            <CardContent className="p-4 text-center">
              <h2 className="text-xl font-semibold">{profiles[index].name}, {profiles[index].age}</h2>
            </CardContent>
          </Card>
          <div className="flex justify-between mt-4">
            <Button variant="outline" className="rounded-full p-2" onClick={() => handleSwipe("left")}>
              <X className="w-6 h-6 text-red-500" />
            </Button>
            <Button variant="outline" className="rounded-full p-2" onClick={() => handleSwipe("right")}>
              <Heart className="w-6 h-6 text-green-500" />
            </Button>
          </div>
        </motion.div>
      ) : (
        <p>No more profiles</p>
      )}
    </div>
  );
}
