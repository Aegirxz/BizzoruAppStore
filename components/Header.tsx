import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Pricelist", href: "#pricelist" },
  { label: "Bundling", href: "#bundling" },
  { label: "Info", href: "#info" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#090a0b]/90 backdrop-blur-xl">
      <div className="section-wrap flex min-h-[66px] items-center justify-between gap-5">
        <a aria-label="Bizzoru Store, beranda" className="shrink-0" href="#home">
          <span className="block text-[12px] font-extrabold tracking-[0.13em] text-[#f3f0e8]">
            BIZZORU <span className="text-[#d4af37]">STORE</span>
          </span>
          <span className="mt-1 block text-[8px] font-semibold tracking-[0.29em] text-[#828184]">APP PREMIUM</span>
        </a>
        <nav aria-label="Navigasi utama" className="flex items-center gap-4 sm:gap-7">
          {navigation.map((item) => (
            <a key={item.href} className="text-[10px] font-medium text-[#a5a4a0] transition-colors hover:text-[#f0d77d] sm:text-[11px]" href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="hidden min-h-[34px] items-center gap-1.5 border border-[#d4af37]/50 px-3 text-[9px] font-bold text-[#e9d995] transition-colors hover:bg-[#d4af37] hover:text-[#111] sm:inline-flex" href="https://wa.me/6281331994711" rel="noreferrer" target="_blank">
            Hubungi Admin <ArrowUpRight aria-hidden="true" size={12} />
          </a>
        </nav>
      </div>
    </header>
  );
}