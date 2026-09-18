export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 text-center p-6 mt-12 border-t border-slate-800">
      <p>© {new Date().getFullYear()} My Developer Portfolio. Built with Next.js & Tailwind CSS.</p>
    </footer>
  );
}