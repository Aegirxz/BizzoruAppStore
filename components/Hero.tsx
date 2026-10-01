import { ArrowDown, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero-section" id="home">
      <div className="section-wrap hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title" id="hero-title">BIZZORU <span>STORE</span></h1>
          <p className="hero-subtitle">APP PREMIUM</p>
          <p className="hero-description">
            Naikkan level hiburan dan kreativitasmu. Akses aplikasi premium pilihan dengan proses simpel, harga bersahabat, dan layanan yang bisa diandalkan.
          </p>
          <div className="hero-actions">
            <a className="gold-button" href="https://wa.me/6281331994711" rel="noreferrer" target="_blank">
              Order Sekarang <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <a className="outline-button" href="#pricelist">
              Lihat Pricelist <ArrowDown aria-hidden="true" size={14} />
            </a>
          </div>
          <div className="hero-note"><ShieldCheck aria-hidden="true" size={14} /> Transaksi aman · Admin responsif · Garansi tersedia</div>
          <div aria-label="Keunggulan Bizzoru Store" className="hero-stats">
            <div className="hero-stat"><strong>Fast</strong><span>Proses instan</span></div>
            <div className="hero-stat"><strong>Premium</strong><span>Akses pilihan</span></div>
            <div className="hero-stat"><strong>Trusted</strong><span>Layanan terjamin</span></div>
          </div>
        </div>
        <div aria-hidden="true" className="hero-art">
          <div className="hero-brand-frame">
            <img alt="Logo Bizzoru Store" className="hero-brand-image" src="/brandlogo.jpeg" />
          </div>
        </div>
      </div>
    </section>
  );
}