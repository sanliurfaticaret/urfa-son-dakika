import { supabaseAdmin } from "@/lib/supabase";

async function getNews(id: string) {
  try {
    const { data } = await supabaseAdmin.from("news").select("*").eq("id", id).single();
    return data;
  } catch (e) {
    console.error("getNews error:", e);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const news = await getNews(id);
  if (!news) return { title: "Haber Bulunamadı | Urfa Son Dakika" };
  return {
    title: `${news.title} | Urfa Son Dakika`,
    description: news.summary,
  };
}

export default function HaberLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
