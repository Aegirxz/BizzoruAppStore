import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { formatRupiah, productCategoryLabels, type Product } from "@/data/products";

const productLogos: Record<string, { background: string; color: string }> = {
  alightmotion: { background: "#201b1d", color: "#d5b36a" },
  netflix: { background: "#241213", color: "#e50914" },
  spotify: { background: "#102117", color: "#1ed760" },
  youtube: { background: "#271313", color: "#ff3939" },
  canva: { background: "#142322", color: "#65d9c1" },
  capcut: { background: "#1c1d20", color: "#f5f5f5" },
  wink: { background: "#221e2b", color: "#c9a7ff" },
  viu: { background: "#281523", color: "#f4a1dc" },
};

const productImages: Record<string, string> = {
  alightmotion: "/alightmotion.jpeg",
  canva: "/canva.jpeg",
  capcut: "/capcut.jpeg",
  wink: "/wink.jpeg",
  youtube: "/youtube.jpeg",
  spotify: "/spotify.jpeg",
  netflix: "/netflix.jpeg",
};

export default function ProductCard({ product }: { product: Product }) {
  const logo = productLogos[product.tone] ?? { background: "#1b1d20", color: "#d4af37" };
  const orderMessage = encodeURIComponent(`Halo Bizzoru Store, saya ingin order ${product.name} (${product.duration}).`);
  const imageSrc = productImages[product.tone] ?? "/brandlogo.jpeg";

  return (
    <article className="product-card">
      <div className="product-topline">
        <div
          aria-label={`${product.name} logo`}
          className={`product-logo product-logo-${product.tone}`}
          style={{ background: logo.background, color: logo.color }}
        >
          {product.icon}
        </div>
        <span className="product-tag">{productCategoryLabels[product.category]}</span>
      </div>

      <div className="mb-3 overflow-hidden rounded-md border border-white/10 bg-[#0d0e10]">
        <Image alt={`${product.name} preview`} className="h-28 w-full object-cover" height={180} src={imageSrc} width={320} />
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