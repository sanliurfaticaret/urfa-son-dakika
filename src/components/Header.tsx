"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const topLinks = [
  { label: "KÜNYE", href: "#" },
  { label: "İLETİŞİM", href: "#" },
  { label: "YAZARLAR", href: "#" },
  { label: "FİKSTÜR", href: "#" },
  { label: "HABER GÖNDER", href: "#" },
];

const nav = [
  { label: "ANA SAYFA", href: "/" },
  { label: "GÜNDEM", href: "#gundem" },
  { label: "ŞANLIURFA", href: "#sanliurfa" },
  { label: "SPOR", href: "#spor" },
  { label: "EKONOMİ", href: "#ekonomi" },
  { label: "SAĞLIK", href: "#saglik" },
  { label: "EĞİTİM", href: "#egitim" },
  { label: "KÜLTÜR-SANAT", href: "#kultur" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white">
      {/* Üst bar */}
      <div className="bg-[#c41e3a] text-white text-[11px]">
        <div className="container mx-auto px-4 py-1.5 flex justify-between items-center">
          <div className="flex gap-4">
            {topLinks.map((l) => (
              <Link key={l.label} href={l.href} className="hover:underline">{l.label}</Link>
            ))}
          </div>
          <span className="hidden md:inline">
            {new Date().toLocaleDateString("tr-TR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
          </span>
        </div>
      </div>

      {/* Logo */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#c41e3a] rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">U</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black text-[#1a1a2e] leading-none">
                URFA <span className="text-[#c41e3a]">SON DAKİKA</span>
              </h1>
              <p className="text-[9px] text-gray-400 tracking-widest uppercase">Doğru Haber, Hızlı Haber</p>
            </div>
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-[#1a1a2e] hidden md:block">
        <div className="container mx-auto px-4 flex">
          {nav.map((n) => (
            <Link key={n.label} href={n.href} className="px-4 py-3 text-[11px] font-bold text-white hover:bg-[#c41e3a] transition">
              {n.label}
            </Link>
          ))}
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-[#1a1a2e] px-4 py-2 flex flex-col">
          {nav.map((n) => (
            <Link key={n.label} href={n.href} onClick={() => setOpen(false)} className="py-2 text-sm font-bold text-white border-b border-gray-700">
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
