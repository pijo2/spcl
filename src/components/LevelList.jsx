export default function LevelList({ levels, onSelect }) {
  return (
    <div className="bg-black text-white w-64 p-4 overflow-y-scroll h-screen">
      {levels.map((lvl, index) => (
        <button
          key={lvl.id}
          className="block text-left py-2 hover:bg-indigo-600 w-full"
          onClick={() => onSelect(lvl)}
        >
          #{index + 1} {lvl.name}
        </button>
      ))}
    </div>
  );
}
