export default function SectionTitle({ label, title, description }) {
  return (
    <div className="mb-10">
      <p className="label">{label}</p>
      <h1 className="mt-3 text-4xl md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}
