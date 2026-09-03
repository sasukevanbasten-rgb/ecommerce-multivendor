export default function Admin() {
  return <main className="dashboard"><aside><h2>Admin</h2>{["Dashboard","Customer","Seller","Produk","Pesanan","Kategori","Laporan","Pengaturan"].map(x=><div className="menu" key={x}>{x}</div>)}</aside><section><h1>Admin Dashboard</h1><div className="stats"><div>Customer<br/><b>0</b></div><div>Seller<br/><b>0</b></div><div>Produk<br/><b>0</b></div><div>Pesanan<br/><b>0</b></div></div></section></main>;
}
