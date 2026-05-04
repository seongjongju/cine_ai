'use client';
import { supabase } from '@/app/lib/supabaseClient';
import { useUser } from '@/providers/UsersProvider';
import Title from '@/shared/components/title/Title';
import { recentMovieStoreClear } from '@/store/movieStore';
import { useRouter } from 'next/navigation';
import React from 'react';

const MyPageInterface = () => {
    const {user} = useUser();
    const router = useRouter();

    const userName = user?.user_metadata?.name;
    const userEmail = user?.email;

    const isGoogle = user?.app_metadata.provider === 'google';
    const myGoogleIco = '/icons/my_google_ico.png';

    const isKakao = user?.app_metadata.provider === 'kakao';
    const myKakaoIco = '/icons/my_kakao_ico.png';

    //로그아웃
    const handleSignOut = async (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const { error } = await supabase.auth.signOut();
        if (error) console.error('로그아웃 에러:', error);
        else {
            alert('로그아웃이 완료되었습니다.');
            router.refresh();
            recentMovieStoreClear(); //최근 들어간 상세페이지 목록 전체 삭제
            router.push('/');
        }
    };

    //회원 탈퇴
    const handleUserDelete = async (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!confirm("정말 탈퇴하시겠습니까? 탈퇴 시 모든 이용 기록과 데이터가 삭제되며 복구할 수 없습니다.")) {
            return;
        }

        try {
            const res = await fetch('/api/auth/delete', {
                method: "DELETE"
            });

            if(!res.ok) throw new Error("회원 탈퇴 실패");

            alert("회원 탈퇴가 완료되었습니다. 그동안 이용해 주셔서 감사합니다.");

            router.refresh();
            router.push('/');
        } catch(err) {
            const error = err as Error;
            console.error("회원탈퇴 오류", error.message);
            alert("회원 탈퇴 처리 중 오류가 발생했습니다. 다시 시도해 주세요.");
        }
    };

    return (
        <section>
            <div className='inner'>
                <Title chip='마이페이지' title='안녕하세요' accent={userName} title_1='님' />

                <div className='user-info'>
                    <p className='user-info__title'>로그인 계정</p>
                    <p className='user-info__text'>
                        <img src={`${isGoogle ? myGoogleIco : myKakaoIco}`} width={32} />
                        {userEmail}
                    </p>
                </div>

                <div className='auth-management'>
                    <button 
                        className='button-0 text-[var(--gray-1)] border-1 border-[var(--gray-1)] hover:text-[var(--gold-0)] hover:border-[var(--gold-0)] transition duration-300'
                        onClick={handleSignOut}
                    >
                        로그아웃
                    </button>
                    <button 
                        className='button-0 text-[var(--gray-1)] border-1 border-[var(--gray-1)] hover:text-[#e80404] hover:border-[#e80404] transition duration-300'
                        onClick={handleUserDelete}
                    >
                        회원탈퇴
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MyPageInterface;