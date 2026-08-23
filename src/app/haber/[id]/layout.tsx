import { getNews } from "./page";

export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const news = await getNews(params.id);
    if (!news) return { title: "Haber Bulunamadı | Urfa Son Dakika" };
    return {
      title: `${news.title} | Urfa Son Dakika`,
      description: news.summary,
    };
  } catch (e) {
    return { title: `HATA: ${String(e)} | Urfa Son Dakika` };
  }
}

export default function HaberLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
