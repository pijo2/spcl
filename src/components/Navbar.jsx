export default function Navbar() {
  return (
    <nav className="bg-indigo-700 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">SMLL</h1>
      <div className="flex gap-4">
        <a href="#" className="hover:underline">List</a>
        <a href="#" className="hover:underline">Leaderboard</a>
        <a href="#" className="hover:underline">Roulette</a>
        <button className="bg-white text-black px-3 py-1 rounded">Submit Record</button>
      </div>
    </nav>
  );
}
