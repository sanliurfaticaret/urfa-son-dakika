import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { password } = await req.json();
  if (password === "KızıldemirMedine63") {
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_session", "true", { httpOnly: true, maxAge: 86400, path: "/" });
    return res;
  }
  return NextResponse.json({ success: false }, { status: 401 });
}
