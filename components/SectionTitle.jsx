export default function SectionTitle({
  label,
  title,
  description,
}) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
        {label}
      </p>

      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>

      <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
        {description}
      </p>
    </div>
  );
}