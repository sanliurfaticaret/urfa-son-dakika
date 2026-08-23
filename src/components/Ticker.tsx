"use client";
import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
}

export default function Ticker({ news }: { news: NewsItem[] }) {
  if (!news.length) return null;
  const items = [...news, ...news]; // duplicate for seamless loop

  return (
    <div className="bg-[#c41e3a] text-white py-2">
      <div className="container mx-auto px-4 flex items-center gap-3">
        <span className="bg-white text-[#c41e3a] text-[10px] font-black px-2 py-1 rounded shrink-0">SON DAKİKA</span>
        <div className="ticker-wrap flex-1">
          <div className="ticker-content">
            {items.map((n, i) => (
              <Link key={`${n.id}-${i}`} href={`/haber/${n.id}`} className="inline-block mx-6 text-sm hover:underline">
                {n.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
