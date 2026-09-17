export default function SectionTitle({ label, title, description }) {
  return (
    <div className="mb-8 text-center">
      <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{label}</span>
      <h2 className="text-3xl font-bold mt-2 text-gray-900">{title}</h2>
      {description && <p className="text-gray-500 mt-2">{description}</p>}
    </div>
  );
}
