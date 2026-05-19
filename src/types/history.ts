import { Database } from '@/types/supabase';
export type History = Database['public']['Tables']['history']['Row'];

export type HistoryInsert = {
    title: string;
    mode: string | undefined;
    myqna: string;
    aianswer: string | null;
};