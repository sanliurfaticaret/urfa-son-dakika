import LoginForm from "./LoginForm";

export const metadata = {
  title: "Admin Girişi | Urfa Son Dakika",
  description: "Yönetim paneli giriş sayfası",
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-[#f1f1f1] flex items-center justify-center px-4">
      <LoginForm />
    </div>
  );
}
