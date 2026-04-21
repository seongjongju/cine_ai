import { NextResponse } from "next/server";
import { adminAuthClient } from "@/app/lib/supabaseAdmin";
import { createSupabaseServerClient } from "@/app/lib/supabaseServer";

export async function DELETE(request: Request) {
    try {
        const supabase = await createSupabaseServerClient();
        const { data: {user}, error: authError } = await supabase.auth.getUser();

        if(authError || !user) {
            return NextResponse.json({ error: "유저가 확인되지 않습니다." }, {status: 401});
        }

        const {error: deleteError} = await adminAuthClient.deleteUser(user.id);

        if(deleteError) throw deleteError;

        await supabase.auth.signOut();

        return NextResponse.json({ message: "회원 탈퇴 성공" });
    } catch(err) {
        const error = err as Error;
        console.error("회원 탈퇴 오류", error.message);
        return NextResponse.json({ error: error.message }, {status: 500});
    }
};  