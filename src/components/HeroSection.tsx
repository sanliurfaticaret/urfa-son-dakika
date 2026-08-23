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

export default function HeroSection({ news }: { news: NewsItem[] }) {
  const main = news[0];
  const side = news.slice(1, 6);
  if (!main) return null;

  return (
    <section className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Ana haber */}
        <div className="lg:col-span-2">
          <Link href={`/haber/${main.id}`} className="group block relative h-[300px] md:h-[420px] rounded-lg overflow-hidden">
            <Image src={main.image} alt={main.title} fill className="object-cover group-hover:scale-105 transition duration-700" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="inline-block px-2 py-0.5 bg-[#c41e3a] text-white text-[10px] font-bold rounded mb-2">{main.category.toUpperCase()}</span>
              <h2 className="text-lg md:text-2xl font-bold text-white leading-tight group-hover:text-red-200 transition">{main.title}</h2>
              <p className="text-gray-300 text-sm mt-2 line-clamp-2 hidden md:block">{main.summary}</p>
            </div>
          </Link>
        </div>

        {/* Yan haberler */}
        <div className="flex flex-col gap-3">
          {side.map((item) => (
            <Link key={item.id} href={`/haber/${item.id}`} className="group flex gap-3 bg-white p-2 rounded-lg border border-gray-100 hover:shadow transition">
              <div className="relative w-24 h-16 shrink-0 rounded overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] font-bold text-[#c41e3a] uppercase">{item.category}</span>
                <h4 className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-[#c41e3a] transition line-clamp-2">{item.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
