export const productCategories = ["editing", "hiburan", "sosmed", "lainnya"] as const;

export type ProductCategory = (typeof productCategories)[number];

export const productCategoryLabels: Record<ProductCategory, string> = {
  editing: "Editing",
  hiburan: "Hiburan",
  sosmed: "Sosmed",
  lainnya: "Lainnya",
};

export type Product = {
  name: string;
  duration: string;
  price: number;
  icon: string;
  tone: string;
  category: ProductCategory;
};

export const products: Product[] = [
  { name: "Alight Motion", duration: "1 Tahun", price: 10000, icon: "🎬", tone: "alightmotion", category: "editing" },
  { name: "Canva Pro", duration: "1 Bulan", price: 15000, icon: "🎨", tone: "canva", category: "editing" },
  { name: "Capcut Pro", duration: "7 Hari", price: 10000, icon: "✂️", tone: "capcut", category: "editing" },
  { name: "Capcut Pro", duration: "1 Bulan", price: 35000, icon: "✂️", tone: "capcut", category: "editing" },
  { name: "Wink", duration: "14 Hari", price: 10000, icon: "✨", tone: "wink", category: "editing" },
  { name: "Wink", duration: "1 Bulan", price: 20000, icon: "✨", tone: "wink", category: "editing" },
  { name: "YouTube Premium", duration: "1 Bulan", price: 10000, icon: "▶️", tone: "youtube", category: "hiburan" },
  { name: "Spotify Premium", duration: "1 Bulan", price: 15000, icon: "🎧", tone: "spotify", category: "hiburan" },
  { name: "Netflix", duration: "1 Bulan", price: 45000, icon: "🍿", tone: "netflix", category: "hiburan" },
];

export const formatRupiah = (amount: number) => `Rp${amount.toLocaleString("id-ID")}`;