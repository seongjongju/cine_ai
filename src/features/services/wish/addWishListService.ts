"use server";
import { createSupabaseServerClient } from "@/app/lib/supabaseServer";
import { Detail } from "@/types/movie";

export const addWishList = async (movie: Detail) => {
    const supabase = await createSupabaseServerClient();

    //현재 로그인한 유저 정보를 가져온다
    const {data: {user},} = await supabase.auth.getUser();

    if(!user) {
        return {success: false, message: '로그인이 필요한 서비스입니다.'};
    }

    //wishlist 테이블에 등록
    const {error} = await supabase.from("wishlist").insert([
        {
            user_id: user.id,
            tmdb_id: movie.id,
            title: movie.title,
            genres: movie.genres,
            vote_average: movie.vote_average,
            poster_path: movie.poster_path,
        },
    ]);

    if(error) {
        if(error.code === "23505") {
            return {success: false, message: "이미 찜한 영화입니다."}
        }
        return { success: false, message: "등록 중 오류가 발생했습니다." };
    }

   return { success: true, message: "찜 목록에 추가되었습니다!" };
};
