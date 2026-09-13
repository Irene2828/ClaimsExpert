export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden" style={{ backgroundColor: "#0B1B35" }}>
      <div className="relative max-w-[1336px] mx-auto px-8 lg:px-12 py-12 flex flex-col lg:flex-row gap-6 lg:items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[#0E223F] font-inter font-medium text-[12px] bg-white">
            G
          </div>
          <span className="font-inter text-[11px] tracking-[0.18em] text-white/60 uppercase">
            © {new Date().getFullYear()} Guertin Claims Advisory • Montreal, QC
          </span>
        </div>
        <div className="flex gap-6 font-inter text-[12px] text-white/50 items-center">
          <span className="hover:text-white transition-colors cursor-default font-medium">
            Cookie Statements (CA)
          </span>
          <span className="hover:text-white transition-colors cursor-default font-medium">
            Privacy statement (CA)
          </span>
          <span className="text-white/80">
            438 794-1044
          </span>
        </div>
      </div>
    </footer>
  );
}
