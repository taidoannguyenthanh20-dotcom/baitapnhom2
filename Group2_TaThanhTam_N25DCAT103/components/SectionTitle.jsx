export default function SectionTitle({ label, title, description, as: Heading = "h1" }) {
  return (
    <div className="mb-7">
      {label && <p className="mb-2 text-sm font-semibold text-blue-700">{label}</p>}
      <Heading className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</Heading>
      {description && <p className="mt-3 max-w-2xl leading-7 text-slate-600">{description}</p>}
    </div>
  );
}
