export type Product = {
  name: string;
  duration: string;
  price: number;
  icon: string;
  tone: string;
  category: string;
};

export const products: Product[] = [
  { name: "Netflix Premium", duration: "1 Bulan", price: 35000, icon: "N", tone: "netflix", category: "Streaming" },
  { name: "Spotify Premium", duration: "1 Bulan", price: 18000, icon: "S", tone: "spotify", category: "Musik" },
  { name: "YouTube Premium", duration: "1 Bulan", price: 20000, icon: "▶", tone: "youtube", category: "Streaming" },
  { name: "Canva Pro", duration: "1 Bulan", price: 15000, icon: "C", tone: "canva", category: "Kreativitas" },
  { name: "CapCut Pro", duration: "1 Bulan", price: 25000, icon: "CC", tone: "capcut", category: "Kreativitas" },
  { name: "Viu Premium", duration: "1 Bulan", price: 12000, icon: "viu", tone: "viu", category: "Anime & Drama" },
];

export const formatRupiah = (amount: number) => `Rp${amount.toLocaleString("id-ID")}`;