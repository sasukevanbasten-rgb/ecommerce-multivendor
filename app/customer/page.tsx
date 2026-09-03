export default function Customer() {
  return <Dashboard title="Customer Dashboard" items={["Belanja","Keranjang","Pesanan Saya","Wishlist","Profil"]} />;
}
function Dashboard({title,items}:{title:string;items:string[]}) {
  return <main className="dashboard"><aside><h2>TokoKita</h2>{items.map(x=><div className="menu" key={x}>{x}</div>)}</aside><section><h1>{title}</h1><div className="stats"><div>Pesanan<br/><b>0</b></div><div>Keranjang<br/><b>0</b></div><div>Wishlist<br/><b>0</b></div></div></section></main>;
}
