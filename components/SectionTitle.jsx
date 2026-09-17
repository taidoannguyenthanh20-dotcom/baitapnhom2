export default function SectionTitle({ label, title, description }) {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      {label && (
        <span className="px-3 py-1 mb-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight mb-3">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-zinc-400 text-sm sm:text-base font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
