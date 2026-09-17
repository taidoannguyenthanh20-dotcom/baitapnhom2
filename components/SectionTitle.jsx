export default function SectionTitle({ label, title, description }) {
  return (
    <div className="text-center mb-10">
      {label && <p className="text-blue-600 font-semibold uppercase tracking-wider text-xs mb-1">{label}</p>}
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">{title}</h2>
      {description && <p className="text-gray-600 mt-2 max-w-xl mx-auto text-sm">{description}</p>}
    </div>
  );
}