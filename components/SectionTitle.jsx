export default function SectionTitle({ label, title, description }) {
  return (
    <header className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        {label}
      </p>
      <h1 className="mt-3 text-4xl font-bold text-gray-900">{title}</h1>
      <p className="mt-4 max-w-2xl leading-7 text-gray-600">
        {description}
      </p>
    </header>
  );
}
