import Link from "next/link";

const products = [
  { name: "Produk Contoh 1", price: "Rp 99.000" },
  { name: "Produk Contoh 2", price: "Rp 149.000" },
  { name: "Produk Contoh 3", price: "Rp 199.000" },
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="logo">TokoKita</div>
        <nav><Link href="/login">Login</Link></nav>
      </header>

      <section className="hero">
        <h1>Marketplace Multi-Vendor</h1>
        <p>Satu website untuk Customer, Seller, dan Admin.</p>
        <Link className="button" href="/login">Mulai Belanja</Link>
      </section>

      <section className="section">
        <h2>Produk Pilihan</h2>
        <div className="grid">
          {products.map((p) => (
            <article className="card" key={p.name}>
              <div className="image">Foto Produk</div>
              <h3>{p.name}</h3>
              <strong>{p.price}</strong>
              <button>Tambah ke Keranjang</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}