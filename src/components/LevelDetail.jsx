export default function LevelDetail({ level }) {
  if (!level) return <div className="p-4">Wybierz poziom z listy</div>;
  return (
    <div className="p-6 flex-1">
      <h2 className="text-2xl font-bold mb-2">{level.name}</h2>
      <p>Creators: {level.creator}</p>
      <p>Verifier: {level.verifier}</p>
      <p>Publisher: {level.publisher}</p>
      <div className="my-4">
        <iframe
          width="560"
          height="315"
          src={level.video}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <p><strong>Points when completed:</strong> {level.points}</p>
      <p><strong>ID:</strong> {level.level_id}</p>
      <p><strong>Password:</strong> {level.password}</p>
      <p className="mt-4"><strong>Records:</strong> 100% or better to qualify</p>
    </div>
  );
}
