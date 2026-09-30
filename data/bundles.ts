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
    name: "Creator Pack",
    summary: "Canva Pro + Capcut 7 Hari + Wink 14 Hari.",
    items: ["Canva Pro · 1 Bulan", "Capcut Pro · 7 Hari", "Wink · 14 Hari"],
    normalTotal: 35000,
    bundlePrice: 25000,
  },
  {
    name: "Hiburan Pack",
    summary: "YouTube + Netflix + Spotify dalam satu paket.",
    items: ["YouTube Premium · 1 Bulan", "Netflix · 1 Bulan", "Spotify Premium · 1 Bulan"],
    normalTotal: 70000,
    bundlePrice: 65000,
    featured: true,
  },
  {
    name: "Duo Pack",
    summary: "Paket hemat buat kerja kreatif tanpa ribet.",
    items: ["Canva Pro · 1 Bulan", "Capcut Pro · 7 Hari"],
    normalTotal: 25000,
    bundlePrice: 18000,
  },
  {
    name: "Paket Lengkap",
    summary: "Semua aplikasi premium 1 bulan dalam satu paket.",
    items: ["Alight Motion · 1 Tahun", "Canva Pro · 1 Bulan", "Capcut Pro · 1 Bulan", "Wink · 1 Bulan", "YouTube Premium · 1 Bulan", "Spotify Premium · 1 Bulan", "Netflix · 1 Bulan"],
    normalTotal: 160000,
    bundlePrice: 100000,
  },
];