'use server';
import { createSupabaseServerClient } from "@/app/lib/supabaseServer";

export const deleteWishlist = async (id: number) => {
    const supabase = await createSupabaseServerClient();

    //현재 로그인한 유저 정보를 가져온다
    const {data: {user},} = await supabase.auth.getUser();

    if(!user) {
        return {success: false, message: '로그인이 필요한 서비스입니다.'};
    }

    //wish페이지에 내가 찜한 목록만 리스트로 노출
    const {error} = await supabase.from("wishlist").delete().eq("tmdb_id", id);
    
    if(error) {
        return {success: false, message: '오류로 인해 삭제에 실패하였습니다. 잠시 후 다시 시도해주세요.'}
    }

    return { success: true, message: '삭제가 완료되었습니다.' };
};