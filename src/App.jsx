import { useState } from "react";
import levels from "./data/levels.json";
import LevelList from "./components/LevelList";
import LevelDetail from "./components/LevelDetail";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [selectedLevel, setSelectedLevel] = useState(levels[0]);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="flex">
        <LevelList levels={levels} onSelect={setSelectedLevel} />
        <LevelDetail level={selectedLevel} />
        <Sidebar />
      </div>
    </div>
  );
}
