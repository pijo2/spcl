export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-sm p-4 w-72">
      <h3 className="text-lg font-bold mb-2">List Editors</h3>
      <ul className="mb-4">
        <li>👑 Shift</li>
        <li>👤 Wimpiebok [SILLY]</li>
        <li>👤 Mesayokin</li>
        <li>👤 Trial List Helper</li>
        <li>🖥️ Wimpiebok [SILLY]</li>
        <li>🖥️ Shift</li>
      </ul>
      <h3 className="text-lg font-bold mb-2">Submission Requirements</h3>
      <ul className="list-disc ml-5">
        <li>No hacks (FPS bypass allowed up to 360fps)</li>
        <li>Submit only levels listed here</li>
        <li>Use source audio/clicks, no edited audio</li>
        <li>Must show previous attempt + death animation</li>
        <li>Show hitting the endwall</li>
        <li>No secret/bug routes</li>
        <li>No easy modes</li>
      </ul>
    </div>
  );
}
