import { BadgeCheck, Banknote, Check, CreditCard, QrCode, Wallet } from "lucide-react";

const steps = ["Pilih produk", "Hubungi admin", "Lakukan pembayaran", "Produk dikirim"];
const payments = [
  { label: "QRIS", icon: QrCode },
  { label: "DANA", icon: Wallet },
  { label: "GOPAY", icon: CreditCard },
  { label: "OVO", icon: Banknote },
];

export default function InfoSection() {
  return (
    <section aria-labelledby="info-title" className="info-section" id="info">
      <div className="section-wrap">
        <div className="info-heading">
          <span className="section-kicker">Belanja tanpa ragu</span>
          <h2 className="section-title" id="info-title">Simple, aman, beres<span className="text-[#d4af37]">.</span></h2>
        </div>
        <div className="info-grid">
          <article className="info-panel">
            <div className="info-icon"><BadgeCheck aria-hidden="true" size={19} /></div>
            <h3 className="info-title">Garansi</h3>
            <p className="info-description">Setiap produk dilengkapi garansi sesuai durasi dan ketentuan paket. Kalau ada kendala, admin siap bantu sampai beres.</p>
          </article>
          <article className="info-panel">
            <div className="info-icon"><Check aria-hidden="true" size={19} /></div>
            <h3 className="info-title">Proses Order</h3>
            <ol className="order-steps">
              {steps.map((step, index) => <li key={step}><span className="step-number">0{index + 1}</span>{step}</li>)}
            </ol>
          </article>
          <article className="info-panel">
            <div className="info-icon"><Wallet aria-hidden="true" size={19} /></div>
            <h3 className="info-title">Metode Pembayaran</h3>
            <p className="info-description">Pilih metode pembayaran yang paling nyaman.</p>
            <div className="payment-list">
              {payments.map(({ label, icon: Icon }) => <div className="payment-item" key={label}><Icon aria-hidden="true" size={15} />{label}</div>)}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}