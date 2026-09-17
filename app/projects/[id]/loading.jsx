export default function LoadingProject() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse space-y-8">
      {/* Breadcrumb Skeleton */}
      <div className="h-4 w-48 bg-slate-800 rounded"></div>

      {/* Hero Skeleton */}
      <div className="space-y-4">
        <div className="h-6 w-32 bg-slate-800 rounded-full"></div>
        <div className="h-10 w-3/4 bg-slate-800 rounded-lg"></div>
        <div className="h-5 w-full bg-slate-800 rounded"></div>
      </div>

      {/* Image Skeleton */}
      <div className="h-72 sm:h-96 w-full bg-slate-800 rounded-2xl"></div>

      {/* Details Skeleton */}
      <div className="space-y-4 pt-4">
        <div className="h-6 w-40 bg-slate-800 rounded"></div>
        <div className="flex gap-2">
          <div className="h-8 w-20 bg-slate-800 rounded"></div>
          <div className="h-8 w-24 bg-slate-800 rounded"></div>
          <div className="h-8 w-20 bg-slate-800 rounded"></div>
        </div>
      </div>
    </div>
  );
}
