export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>E-Commerce Multi-Vendor</h1>
      <p>Marketplace dengan 3 role: Customer, Seller, Admin</p>
      <nav style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <a href="/login">Login</a>
        <a href="/customer">Customer</a>
        <a href="/seller">Seller</a>
        <a href="/admin">Admin</a>
      </nav>
    </main>
  )
}
