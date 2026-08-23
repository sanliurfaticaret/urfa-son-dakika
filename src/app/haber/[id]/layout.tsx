import { supabaseAdmin } from "@/lib/supabase";
import type { Metadata } from "next";

async function getNews(id: string) {
  const { data } = await supabaseAdmin.from("news").select("*").eq("id", id).single();
  return data;
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const news = await getNews(params.id);
  if (!news) return { title: "Haber Bulunamadı | Urfa Son Dakika" };
  return {
    title: `${news.title} | Urfa Son Dakika`,
    description: news.summary,
  };
}

export default function HaberLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
