import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  trade: string;
  zip_code: string;
  timeline: string;
  budget: string;
}

export async function submitLead(payload: LeadPayload): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase.from('leads').insert({
    name: payload.name,
    phone: payload.phone,
    email: payload.email,
    trade: payload.trade,
    zip_code: payload.zip_code,
    timeline: payload.timeline,
    budget: payload.budget,
  });
  if (error) return { success: false, error: error.message };
  console.log('[LEAD CAPTURED]', payload);
  return { success: true };
}
