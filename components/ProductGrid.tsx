"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { productCategories, productCategoryLabels, products, type ProductCategory } from "@/data/products";

const allCategories: Array<"all" | ProductCategory> = ["all", ...productCategories];

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | ProductCategory>("all");

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory);

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

        <div className="mb-6 flex flex-wrap gap-2">
          {allCategories.map((category) => {
            const isActive = selectedCategory === category;
            const label = category === "all" ? "Semua" : productCategoryLabels[category];

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  isActive
                    ? "border-[#d4af37] bg-[#d4af37] text-[#111827]"
                    : "border-[#2a2d31] bg-[#121416] text-[#d7d8d9] hover:border-[#d4af37]/60"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={`${product.name}-${product.duration}`} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="mt-5 text-sm text-[#a1a3a6]">Belum ada item di kategori ini. Coba pilih kategori lain.</p>
        )}

        <p className="mt-5 flex items-center gap-2 text-[10px] text-[#77787a]"><Sparkles aria-hidden="true" className="text-[#d4af37]" size={13} /> Butuh durasi atau aplikasi lain? Tanya admin kami.</p>
      </div>
    </section>
  );
}