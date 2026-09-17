export default function SectionTitle({ 
  label, 
  title, 
  description,
  showBadge = true,
  tags = []
}) {
  return (
    <div className="text-center max-w-2xl mx-auto my-8">
      {showBadge && label && (
        <span className="text-xs uppercase font-bold tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block mb-3 border border-indigo-100">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
      {tags.length > 0 && (
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}