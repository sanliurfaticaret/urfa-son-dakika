export async function generateMetadata({ params }: { params: { id: string } }) {
  return { title: `ID: ${params.id} | Urfa Son Dakika` };
}

export default function HaberLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
