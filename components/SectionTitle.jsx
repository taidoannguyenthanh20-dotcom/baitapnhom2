export default function SectionTitle({ label, title, description }) {
  return (
    <div className="mb-6 border-b pb-4">
      {label && <span className="text-sm font-semibold uppercase text-blue-600 tracking-wider">{label}</span>}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{title}</h2>
      {description && <p className="text-gray-600 dark:text-gray-300 mt-1">{description}</p>}
    </div>
  );
}