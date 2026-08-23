"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ password: pw }),
      headers: { "Content-Type": "application/json" },
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setErr("Hatalı şifre!");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
      <h1 className="text-2xl font-black text-[#1a1a2e] mb-6 text-center">Admin Girişi</h1>
      {err && <p className="text-red-500 text-sm mb-3 text-center">{err}</p>}
      <input
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder="Şifre"
        className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#c41e3a]"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#c41e3a] text-white font-bold py-3 rounded-lg hover:bg-red-700 transition disabled:opacity-50"
      >
        {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
      </button>
    </form>
  );
}
