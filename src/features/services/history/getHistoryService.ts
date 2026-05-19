"use server";
import { createSupabaseServerClient } from "@/app/lib/supabaseServer";

export const getHistory = async () => {
    const supabase = await createSupabaseServerClient();

    //현재 로그인한 유저 정보를 가져온다
    const {data: {user},} = await supabase.auth.getUser();

    if(!user) {
        return {success: false, message: '로그인이 필요한 서비스입니다.'};
    }

    //히스토리 테이블 조회
    const {data: history, error} = await supabase.from("history").select().eq("user_id", user.id).order('created_at', { ascending: false });

    if(error) {
        return {success: false, message: error.message, data: null}
    }

    return {success: true, data: history};
};