export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto p-8 text-center text-slate-500 animate-pulse">
      <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto mb-4"></div>
      <div className="h-4 bg-slate-200 rounded w-2/3 mx-auto mb-2"></div>
      <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto"></div>
    </div>
  );
}
