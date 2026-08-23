"use client";
import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: string;
  image: string;
  created_at: string;
}

export default function NewsCard({ news, small }: { news: NewsItem; small?: boolean }) {
  if (small) {
    return (
      <Link href={`/haber/${news.id}`} className="group flex gap-3 items-start hover:bg-gray-50 p-2 rounded transition">
        <div className="relative w-20 h-14 shrink-0 rounded overflow-hidden">
          <Image src={news.image} alt={news.title} fill className="object-cover" />
        </div>
        <div className="min-w-0">
          <span className="text-[9px] font-bold text-[#c41e3a] uppercase">{news.category}</span>
          <h4 className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-[#c41e3a] transition line-clamp-2">{news.title}</h4>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/haber/${news.id}`} className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition flex flex-col h-full">
      <div className="relative h-44 overflow-hidden">
        <Image src={news.image} alt={news.title} fill className="object-cover group-hover:scale-110 transition duration-700" />
        <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#c41e3a] text-white text-[9px] font-bold uppercase rounded">{news.category}</span>
      </div>
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-[#c41e3a] transition line-clamp-2 mb-2">{news.title}</h3>
        <p className="text-xs text-gray-500 line-clamp-3 flex-1">{news.summary}</p>
        <span className="text-[11px] text-gray-400 mt-2 pt-2 border-t border-gray-50">{new Date(news.created_at).toLocaleDateString("tr-TR")}</span>
      </div>
    </Link>
  );
}
