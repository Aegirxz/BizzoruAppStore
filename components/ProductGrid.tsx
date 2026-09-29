import { Sparkles } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductGrid() {
  return (
    <section aria-labelledby="pricelist-title" className="products-section" id="pricelist">
      <div className="section-wrap">
        <div className="section-heading-row">
          <div>
            <span className="section-kicker">Pilih aksesmu</span>
            <h2 className="section-title" id="pricelist-title">Pricelist<span className="text-[#d4af37]">.</span></h2>
          </div>
          <p className="muted-copy">Aplikasi favorit untuk streaming, berkarya, dan menemani setiap sesi.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => <ProductCard key={product.name} product={product} />)}
        </div>
        <p className="mt-5 flex items-center gap-2 text-[10px] text-[#77787a]"><Sparkles aria-hidden="true" className="text-[#d4af37]" size={13} /> Butuh durasi atau aplikasi lain? Tanya admin kami.</p>
      </div>
    </section>
  );
}