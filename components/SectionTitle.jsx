export default function SectionTitle({ title, description }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}