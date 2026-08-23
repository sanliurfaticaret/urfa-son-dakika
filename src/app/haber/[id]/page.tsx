"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  author: string;
  image: string;
  created_at: string;
}

export default function HaberDetay() {
  const params = useParams();
  const id = params.id as string;
  const [news, setNews] = useState<NewsItem | null>(null);
  const [related, setRelated] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    supabase
      .from("news")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data }) => {
        if (data) {
          setNews(data);
          supabase
            .from("news")
            .select("id, title, image, category, created_at")
            .eq("category", data.category)
            .neq("id", id)
            .order("created_at", { ascending: false })
            .limit(4)
            .then(({ data: rel }) => setRelated(rel || []));
        }
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f1f1f1]">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="animate-spin w-10 h-10 border-4 border-[#c41e3a] border-t-transparent rounded-full mx-auto" />
        </div>
      </main>
    );
  }

  if (!news) {
    return (
      <main className="min-h-screen bg-[#f1f1f1]">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-[#1a1a2e]">Haber bulunamadı</h1>
          <Link href="/" className="text-[#c41e3a] mt-4 inline-block">Ana Sayfaya Dön</Link>
        </div>
      </main>
    );
  }

  const date = new Date(news.created_at).toLocaleDateString("tr-TR", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  return (
    <main className="min-h-screen bg-[#f1f1f1]">
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <Link href="/" className="inline-flex items-center gap-2 text-[#c41e3a] font-semibold text-sm hover:underline">
            <ArrowLeft size={16} /> Ana Sayfa
          </Link>
        </div>
      </header>

      <article className="container mx-auto px-4 py-6 max-w-3xl">
        <span className="inline-block px-2 py-0.5 bg-[#c41e3a]/10 text-[#c41e3a] text-[10px] font-bold uppercase rounded mb-3">{news.category}</span>
        <h1 className="text-xl md:text-3xl font-bold text-[#1a1a2e] leading-tight mb-3">{news.title}</h1>
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-5 pb-4 border-b border-gray-200">
          <span className="flex items-center gap-1"><User size={13} /> {news.author}</span>
          <span className="flex items-center gap-1"><Clock size={13} /> {date}</span>
        </div>

        <div className="relative w-full h-[240px] md:h-[400px] rounded-xl overflow-hidden mb-6">
          <Image src={news.image} alt={news.title} fill className="object-cover" priority />
        </div>

        <p className="text-base text-gray-600 font-medium border-l-4 border-[#c41e3a] pl-4 mb-6">{news.summary}</p>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">{news.content}</div>

        <div className="mt-6 pt-4 border-t border-gray-200 flex flex-wrap gap-2">
          {[news.category, "Şanlıurfa", "Son Dakika", "Urfa Haber"].map((t) => (
            <span key={t} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded">#{t}</span>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-white border-t border-gray-100 py-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-base font-bold text-[#1a1a2e] mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#c41e3a] rounded" /> İlgili Haberler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {related.map((r) => (
                <Link key={r.id} href={`/haber/${r.id}`} className="flex gap-3 items-start hover:bg-gray-50 p-2 rounded transition group">
                  <div className="relative w-16 h-16 shrink-0 rounded overflow-hidden">
                    <Image src={r.image} alt={r.title} fill className="object-cover" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-[#c41e3a] uppercase">{r.category}</span>
                    <h4 className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-[#c41e3a] transition line-clamp-2">{r.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
