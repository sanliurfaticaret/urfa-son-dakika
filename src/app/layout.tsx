export const metadata = {
  title: "Urfa Son Dakika - Şanlıurfa Haberleri",
  description: "Şanlıurfa'nın en güncel haber sitesi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
