export default function SectionTitle({
  label,
  title,
  description,
  align = "center",
}) {
  const alignmentClasses =
    {
      left: "text-left items-start",
      center: "text-center items-center mx-auto",
      right: "text-right items-end ml-auto",
    }[align] || "text-center items-center mx-auto";

  return (
    <div
      className={`flex flex-col max-w-2xl mb-10 sm:mb-12 ${alignmentClasses}`}
    >
      {label && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3 tracking-wide uppercase">
          {label}
        </span>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
