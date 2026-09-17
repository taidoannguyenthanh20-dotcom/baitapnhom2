export default function LoadingProject() {
  return (
    <div className="space-y-8 py-6 max-w-4xl mx-auto animate-pulse">
      <div className="h-4 w-32 bg-zinc-800 rounded"></div>
      <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-6">
        <div className="h-8 w-2/3 bg-zinc-800 rounded-lg"></div>
        <div className="h-4 w-full bg-zinc-800 rounded"></div>
        <div className="h-4 w-5/6 bg-zinc-800 rounded"></div>
        <div className="h-20 w-full bg-zinc-800/60 rounded-xl"></div>
      </div>
    </div>
  );
}
