'use client';
import { supabase } from '@/app/lib/supabaseClient';
import { useUser } from '@/providers/UsersProvider';
import Title from '@/shared/components/title/Title';
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

    const handleSignOut = async (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const { error } = await supabase.auth.signOut();
        if (error) console.error('로그아웃 에러:', error);
        else {
            router.refresh();
            router.push('/');
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
                    <button className='button-0 text-[var(--gray-1)] border-1 border-[var(--gray-1)] hover:text-[#e80404] hover:border-[#e80404] transition duration-300'>회원탈퇴</button>
                </div>
            </div>
        </section>
    );
};

export default MyPageInterface;