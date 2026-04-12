import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import type { Database } from './types/supabase';

export async function middleware(request: NextRequest) {
    let supabaseResponse = NextResponse.next({request,})

    const supabase = createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    const { data: { user } } = await supabase.auth.getUser();
    
    const protectedRoutes = ['/mypage', '/wish'];
    const isProtectedRoute = protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route));

    if (isProtectedRoute && !user) {
        return NextResponse.redirect(new URL('/login?message=login_required', request.url));
    }

    return supabaseResponse;
}

// 필요한 경로만 지정
export const config = {
    matcher: [
        '/mypage/:path*', 
        '/wish/:path*',
        '/mypage', 
        '/wish'   
    ],
};