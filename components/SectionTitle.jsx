export default function SectionTitle({ label, title, description }) {
  return (
    <div className="mb-6">
      <span className="text-sm font-bold text-blue-500 uppercase">{label}</span>
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      {description && <p className="text-gray-600 mt-2">{description}</p>}
    </div>
  );
}
