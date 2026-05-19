"use server";
import { createSupabaseServerClient } from "@/app/lib/supabaseServer";
import { HistoryInsert } from "@/types/history";

export const addHistory = async (history: HistoryInsert) => {
    const supabase = await createSupabaseServerClient();

    //현재 로그인한 유저 정보를 가져온다
    const {data: {user},} = await supabase.auth.getUser();

    if(!user) {
        return {success: false, message: '로그인이 필요한 서비스입니다.'};
    }

    //히스토리 테이블에 등록
    const {error} = await supabase.from("history").insert([
        {
            user_id: user.id,
            title: history.title,
            mode: history.mode,
            myqna: history.myqna,
            aianswer: history.aianswer,
        },
    ]);

    if(error) {
        console.log('supabase error:', error);
        return { success: false, message: "등록 중 오류가 발생했습니다."};
    };

    return {success: true};
};