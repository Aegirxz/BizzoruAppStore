import { ArrowDown, ArrowUpRight, BadgeCheck, Gamepad2, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero-section" id="home">
      <div className="section-wrap hero-inner">
        <div className="hero-copy">
          <div className="hero-label"><span /> PREMIUM DIGITAL ACCESS</div>
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
          <div className="hero-orbit" />
          <div className="hero-core">
            <div className="core-mark">B</div>
            <div className="core-caption"><span>ACCESS GRANTED</span><Sparkles size={11} /></div>
          </div>
          <div className="hero-chip chip-top">
            <BadgeCheck size={17} />
            <span><strong>Premium unlocked</strong><small>More play. More possibility.</small></span>
          </div>
          <div className="hero-chip chip-bottom">
            <Gamepad2 size={19} />
            <span><strong>Your next level</strong><small>Streaming · Gaming · Creator</small></span>
          </div>
          <span className="hero-side-mark">BUILT FOR YOUR NEXT LEVEL</span>
        </div>
      </div>
    </section>
  );
}