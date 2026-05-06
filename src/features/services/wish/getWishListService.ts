'use server';
import { createSupabaseServerClient } from "@/app/lib/supabaseServer";

export const getWishlist = async () => {
    const supabase = await createSupabaseServerClient();

    //현재 로그인한 유저 정보를 가져온다
    const {data: {user},} = await supabase.auth.getUser();

    if(!user) {
        return {success: false, message: '로그인이 필요한 서비스입니다.'};
    }

    //wish페이지에 내가 찜한 목록만 리스트로 노출
    const {data: wishlist, error} = await supabase.from("wishlist").select().eq("user_id", user.id).order('created_at', { ascending: false });

    if(error) {
        return {success: false, message: error.message, data: null}
    }

    return { success: true, data: wishlist };
};