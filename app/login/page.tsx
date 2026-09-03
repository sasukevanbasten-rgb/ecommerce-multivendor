import Link from "next/link";

export default function Login() {
  return (
    <main className="center">
      <div className="form">
        <h1>Login</h1>
        <p>Pilih role untuk mencoba template.</p>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <Link className="button" href="/customer">Masuk sebagai Customer</Link>
        <Link className="button secondary" href="/seller">Masuk sebagai Seller</Link>
        <Link className="button dark" href="/admin">Masuk sebagai Admin</Link>
      </div>
    </main>
  );
}
