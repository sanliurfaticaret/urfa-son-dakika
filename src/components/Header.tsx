"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const nav = ["ANA SAYFA","GÜNDEM","ŞANLIURFA","SPOR","EKONOMİ","SAĞLIK","EĞİTİM","KÜLTÜR-SANAT"];
const links = ["/","#gundem","#sanliurfa","#spor","#ekonomi","#saglik","#egitim","#kultur"];
export default function Header() {
  const [open, setOpen] = useState(false);
  const today = new Date().toLocaleDateString("tr-TR", { weekday:"long", day:"numeric", month:"long", year:"numeric" });
  return (
    <header className="bg-white">
      <div className="bg-[#c41e3a] text-white text-[11px]">
        <div className="container mx-auto px-4 py-1.5 flex justify-between">
          <div className="flex gap-4">
            {["KÜNYE","İLETİŞİM","YAZARLAR","FİKSTÜR","HABER GÖNDER"].map(l => <Link key={l} href="#" className="hover:underline">{l}</Link>)}
          </div>
          <span className="hidden md:inline">{today}</span>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#c41e3a] rounded flex items-center justify-center"><span className="text-white font-bold text-xl">U</span></div>
          <div>
            <h1 className="text-xl md:text-2xl font-black text-[#1a1a2e] leading-none">URFA <span className="text-[#c41e3a]">SON DAKİKA</span></h1>
            <p className="text-[9px] text-gray-400 tracking-widest uppercase">Doğru Haber, Hızlı Haber</p>
          </div>
        </Link>
        <button onClick={() => setOpen(!open)} className="md:hidden"><Menu size={24} /></button>
      </div>
      <nav className="bg-[#1a1a2e] hidden md:block">
        <div className="container mx-auto px-4 flex">
          {nav.map((n, i) => <Link key={n} href={links[i]} className="px-4 py-3 text-[11px] font-bold text-white hover:bg-[#c41e3a] transition">{n}</Link>)}
        </div>
      </nav>
      {open && <div className="md:hidden bg-[#1a1a2e] px-4 py-2 flex flex-col">{nav.map((n, i) => <Link key={n} href={links[i]} onClick={() => setOpen(false)} className="py-2 text-sm font-bold text-white border-b border-gray-700">{n}</Link>)}</div>}
    </header>
  );
}
