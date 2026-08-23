"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth/login", { method: "POST", body: JSON.stringify({ password: pw }), headers: { "Content-Type": "application/json" } });
    if (res.ok) { router.push("/admin"); router.refresh(); }
    else setErr("Hatalı şifre!");
  }

  return (
    <div className="min-h-screen bg-[#f1f1f1] flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-black text-[#1a1a2e] mb-6 text-center">Admin Girişi</h1>
        {err && <p className="text-red-500 text-sm mb-3">{err}</p>}
        <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Şifre" className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-4 text-sm" />
        <button type="submit" className="w-full bg-[#c41e3a] text-white font-bold py-3 rounded-lg hover:bg-red-700 transition">Giriş Yap</button>
      </form>
    </div>
  );
}
