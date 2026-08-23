"use client";
import NewsCard from "./NewsCard";
interface NewsItem { id: string; title: string; summary: string; category: string; image: string; created_at: string; }
const CATS = [{key:"Gündem",label:"GÜNDEM",id:"gundem"},{key:"Şanlıurfa",label:"ŞANLIURFA",id:"sanliurfa"},{key:"Spor",label:"SPOR",id:"spor"},{key:"Ekonomi",label:"EKONOMİ",id:"ekonomi"},{key:"Sağlık",label:"SAĞLIK",id:"saglik"},{key:"Eğitim",label:"EĞİTİM",id:"egitim"},{key:"Kültür-Sanat",label:"KÜLTÜR-SANAT",id:"kultur"}];
export default function CategorySection({ news }: { news: NewsItem[] }) {
  if (!news.length) return null;
  return (
    <section className="container mx-auto px-4 py-4">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4"><h2 className="text-sm font-black text-[#1a1a2e] uppercase tracking-wide">Son Haberler</h2><div className="flex-1 h-px bg-gray-300"/></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{news.slice(0,8).map(n => <NewsCard key={n.id} news={n} />)}</div>
      </div>
      {CATS.map(({key,label,id}) => {
        const items = news.filter(n => n.category === key);
        if (!items.length) return null;
        return (
          <div key={key} className="mb-8" id={id}>
            <div className="flex items-center gap-3 mb-4"><h2 className="text-sm font-black text-[#1a1a2e] uppercase tracking-wide">{label}</h2><div className="flex-1 h-px bg-gray-300"/></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{items.slice(0,4).map(n => <NewsCard key={n.id} news={n} />)}</div>
          </div>
        );
      })}
    </section>
  );
}
