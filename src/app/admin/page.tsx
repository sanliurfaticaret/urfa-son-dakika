"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
  category: string;
  author: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Gündem");
  const [image, setImage] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/news").then((r) => r.json()).then((d) => setNews(d || []));
  }, []);

  async function addNews(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, summary, content, category, image, author: "Admin" }),
    });
    setTitle(""); setSummary(""); setContent(""); setImage("");
    fetch("/api/news").then((r) => r.json()).then((d) => setNews(d || []));
  }

  async function deleteNews(id: string) {
    await fetch("/api/news", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    fetch("/api/news").then((r) => r.json()).then((d) => setNews(d || []));
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  }

  return (
    <div className="min-h-screen bg-[#f1f1f1]">
      <header className="bg-[#1a1a2e] text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-black">Admin Panel</h1>
        <div className="flex gap-4">
          <Link href="/" className="text-sm hover:text-[#c41e3a]">Siteye Dön</Link>
          <button onClick={logout} className="text-sm hover:text-[#c41e3a]">Çıkış</button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Haber Ekle</h2>
            <form onSubmit={addNews} className="flex flex-col gap-3">
              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Başlık" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" required />
              <input value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Özet" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" required />
              <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="İçerik" className="border border-gray-200 rounded-lg px-3 py-2 text-sm h-24" required />
              <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Görsel URL" className="border border-gray-200 rounded-lg px-3 py-2 text-sm" required />
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
                {["Gündem","Şanlıurfa","Spor","Ekonomi","Sağlık","Eğitim","Kültür-Sanat"].map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <button type="submit" className="bg-[#c41e3a] text-white font-bold py-2 rounded-lg hover:bg-red-700 transition">Ekle</button>
            </form>
          </div>

          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Haberler ({news.length})</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr><th className="text-left px-3 py-2">Başlık</th><th className="text-left px-3 py-2">Kategori</th><th className="text-left px-3 py-2">Tarih</th><th></th></tr>
                </thead>
                <tbody>
                  {news.map((n) => (
                    <tr key={n.id} className="border-b border-gray-50">
                      <td className="px-3 py-2">{n.title}</td>
                      <td className="px-3 py-2"><span className="px-2 py-0.5 bg-[#c41e3a]/10 text-[#c41e3a] text-xs rounded">{n.category}</span></td>
                      <td className="px-3 py-2 text-gray-400">{new Date(n.created_at).toLocaleDateString("tr-TR")}</td>
                      <td className="px-3 py-2"><button onClick={() => deleteNews(n.id)} className="text-red-500 hover:text-red-700 text-xs">Sil</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
