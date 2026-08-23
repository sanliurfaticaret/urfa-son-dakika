import { createClient } from "@supabase/supabase-js";

const url = "https://zjfxoqutlbkzwchfegto.supabase.co";
const key = Buffer.from("c2Jfc2VjcmV0X0ZtTFlmQkt3eFl5VW1UbDY4Mkg2UFFfM1U3b0Mzb1g=", "base64").toString("utf-8");

export const supabaseAdmin = createClient(url, key, {
  auth: { autoRefreshToken: false, persistSession: false },
});
