// supabase.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://gehcvalwixalqqdssekw.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_0xH493bo2eEKS4Gq6SKdfw_r5F0tNJu";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export as both named and default
export { supabase };
export default supabase;

// Also add to window for non-module scripts
if (typeof window !== 'undefined') {
    window.supabase = supabase;
}