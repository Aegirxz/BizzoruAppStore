import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { bundles } from "@/data/bundles";
import { formatRupiah } from "@/data/products";

export default function BundlingSection() {
  return (
    <section aria-labelledby="bundling-title" className="bundle-section" id="bundling">
      <div className="section-wrap">
        <div className="bundle-intro">
          <span className="section-kicker">Lebih banyak, lebih hemat</span>
          <h2 className="section-title" id="bundling-title">Bundling Hemat<span className="text-[#d4af37]">.</span></h2>
          <p className="muted-copy">Paket pilihan untuk bikin pengalaman premium makin lengkap, dengan harga spesial.</p>
        </div>
        <div className="bundle-grid">
          {bundles.map((bundle) => {
            const savings = bundle.normalTotal - bundle.bundlePrice;
            const orderMessage = encodeURIComponent(`Halo Bizzoru Store, saya ingin order bundling ${bundle.name}.`);

            return (
              <article className={`bundle-card${bundle.featured ? " featured" : ""}`} key={bundle.name}>
                <span className="bundle-badge"><Sparkles aria-hidden="true" className="mr-1 inline" size={10} />HEMAT {Math.round((savings / bundle.normalTotal) * 100)}%</span>
                <h3 className="bundle-name">{bundle.name}</h3>
                <p className="bundle-summary">{bundle.summary}</p>
                <ul className="bundle-items">
                  {bundle.items.map((item) => <li key={item}><Check aria-hidden="true" size={13} />{item}</li>)}
                </ul>
                <div className="bundle-pricing">
                  <div><span>Harga bundling</span><strong className="bundle-price">{formatRupiah(bundle.bundlePrice)}</strong></div>
                  <div><span>Harga normal</span><del>{formatRupiah(bundle.normalTotal)}</del><span className="bundle-discount">Hemat {formatRupiah(savings)}</span></div>
                </div>
                <a className="gold-button bundle-order" href={`https://wa.me/6281331994711?text=${orderMessage}`} rel="noreferrer" target="_blank">
                  Order Bundling <ArrowUpRight aria-hidden="true" size={14} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}