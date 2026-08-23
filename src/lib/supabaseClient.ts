import { createClient } from "@supabase/supabase-js";

const url = "https://zjfxoqutlbkzwchfegto.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqZnhvcXV0bGJrendjaGZlZ3RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0ODcyMTUsImV4cCI6MjEwMzA2MzIxNX0.V1w7K8dT1RAfz68nRPO9Yj4qqFfU_HasQWSsKFshGPs";

export const supabase = createClient(url, key);
