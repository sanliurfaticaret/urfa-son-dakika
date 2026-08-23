"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-black mb-2">URFA <span className="text-[#c41e3a]">SON DAKİKA</span></h3>
            <p className="text-gray-400 text-xs">Şanlıurfa'nın en güncel ve güvenilir haber kaynağı.</p>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-wider mb-2 text-gray-300">Kategoriler</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {["Gündem","Şanlıurfa","Spor","Ekonomi","Sağlık","Eğitim","Kültür-Sanat"].map((c) => (
                <Link key={c} href={`#${c.toLowerCase()}`} className="text-gray-400 text-xs hover:text-[#c41e3a] transition">{c}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-wider mb-2 text-gray-300">İletişim</h4>
            <p className="text-gray-400 text-xs">Şanlıurfa, Türkiye</p>
            <p className="text-gray-400 text-xs">info@urfasondakika.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-500 text-[10px]">
          <p>© {new Date().getFullYear()} Urfa Son Dakika. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
