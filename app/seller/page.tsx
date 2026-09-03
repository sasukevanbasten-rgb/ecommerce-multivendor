export default function Seller() {
  return <main className="dashboard"><aside><h2>Seller</h2>{["Dashboard","Produk","Tambah Produk","Pesanan","Penjualan","Pengaturan Toko"].map(x=><div className="menu" key={x}>{x}</div>)}</aside><section><h1>Seller Dashboard</h1><div className="stats"><div>Total Produk<br/><b>0</b></div><div>Pesanan<br/><b>0</b></div><div>Pendapatan<br/><b>Rp 0</b></div></div></section></main>;
}
