export default function SectionTitle({ label, title, description }) {
  return (
    <div className="text-center mb-10">
      {label && <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">{label}</span>}
      <h2 className="text-3xl font-bold mt-1 mb-3">{title}</h2>
      {description && <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>}
    </div>
  );
}