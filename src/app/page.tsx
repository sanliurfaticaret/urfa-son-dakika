import { supabaseAdmin } from "@/lib/supabase";
import Header from "@/components/Header";
import Ticker from "@/components/Ticker";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
export const dynamic = "force-dynamic";
async function getNews() {
  const { data, error } = await supabaseAdmin.from("news").select("*").order("created_at", { ascending: false });
  if (error) { console.error(error); return []; }
  return data || [];
}
export default async function Home() {
  const news = await getNews();
  return (
    <main className="min-h-screen bg-[#f1f1f1]">
      <Header />
      <Ticker news={news.slice(0,8).map(n => ({ id: n.id, title: n.title }))} />
      <HeroSection news={news} />
      <CategorySection news={news} />
      <Footer />
    </main>
  );
}
