import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <a aria-label="Bizzoru Store, kembali ke atas" className="footer-brand" href="#home">BIZZORU <span>STORE</span></a>
        <a className="footer-contact" href="https://wa.me/6281331994711" rel="noreferrer" target="_blank">
          <MessageCircle aria-hidden="true" size={14} /> +62 813-3199-4711 <ArrowUpRight aria-hidden="true" size={12} />
        </a>
        <p className="footer-copyright">© 2026 Bizzoru Store. All rights reserved.</p>
      </div>
    </footer>
  );
}