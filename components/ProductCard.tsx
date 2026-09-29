import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";
import { formatRupiah } from "@/data/products";

const productLogos: Record<string, { background: string; color: string }> = {
  netflix: { background: "#241213", color: "#e50914" },
  spotify: { background: "#102117", color: "#1ed760" },
  youtube: { background: "#271313", color: "#ff3939" },
  canva: { background: "#142322", color: "#65d9c1" },
  capcut: { background: "#1c1d20", color: "#f5f5f5" },
  viu: { background: "#281523", color: "#f4a1dc" },
};

export default function ProductCard({ product }: { product: Product }) {
  const logo = productLogos[product.tone];
  const orderMessage = encodeURIComponent(`Halo Bizzoru Store, saya ingin order ${product.name} (${product.duration}).`);

  return (
    <article className="product-card">
      <div className="product-topline">
        <div aria-label={`${product.name} logo`} className={`product-logo product-logo-${product.tone}`} style={{ "--logo-bg": logo.background, "--logo-color": logo.color } as React.CSSProperties}>
          {product.icon}
        </div>
        <span className="product-tag">{product.category}</span>
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-duration">{product.duration}</p>
      <div className="product-bottom">
        <div><span className="product-price-label">Mulai dari</span><strong className="product-price">{formatRupiah(product.price)}</strong></div>
        <a aria-label={`Order ${product.name} via WhatsApp`} className="product-order" href={`https://wa.me/6281331994711?text=${orderMessage}`} rel="noreferrer" target="_blank">
          Order <ArrowUpRight aria-hidden="true" size={12} />
        </a>
      </div>
    </article>
  );
}