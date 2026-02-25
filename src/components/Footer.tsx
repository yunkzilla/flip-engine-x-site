export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(139,92,246,0.12)] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-pixel text-[8px] text-[#FDE047] tracking-wider">
          FLIP ENGINE X
        </div>
        <div className="text-xs text-[rgba(241,240,255,0.3)] font-semibold">
          &copy; {new Date().getFullYear()} Flip Engine X. All rights reserved.
        </div>
        <div className="flex gap-6 text-xs text-[rgba(241,240,255,0.35)] font-semibold">
          <a href="#" className="hover:text-[#C4B5FD] transition-colors">Terms</a>
          <a href="#" className="hover:text-[#C4B5FD] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#C4B5FD] transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}
