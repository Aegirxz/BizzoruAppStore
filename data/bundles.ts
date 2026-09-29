export type Bundle = {
  name: string;
  summary: string;
  items: string[];
  normalTotal: number;
  bundlePrice: number;
  featured?: boolean;
};

export const bundles: Bundle[] = [
  {
    name: "Stream Mode",
    summary: "Teman maraton film dan playlist harian.",
    items: ["Netflix Premium · 1 Bulan", "Spotify Premium · 1 Bulan", "YouTube Premium · 1 Bulan"],
    normalTotal: 73000,
    bundlePrice: 62000,
  },
  {
    name: "Creator Kit",
    summary: "Semua tools untuk ide yang jadi karya.",
    items: ["Canva Pro · 1 Bulan", "CapCut Pro · 1 Bulan", "YouTube Premium · 1 Bulan"],
    normalTotal: 60000,
    bundlePrice: 49000,
    featured: true,
  },
  {
    name: "Otaku Night",
    summary: "Satu malam, banyak episode, tanpa jeda.",
    items: ["Netflix Premium · 1 Bulan", "Viu Premium · 1 Bulan", "Spotify Premium · 1 Bulan"],
    normalTotal: 65000,
    bundlePrice: 55000,
  },
];