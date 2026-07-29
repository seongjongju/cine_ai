'use client';
import { supabase } from '@/app/lib/supabaseClient';
import { useUser } from '@/providers/UsersProvider';
import { errorSwal } from '@/shared/utils/swal';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import googleIcon from '@/assets/icons/google_ico.png';
import kakaoIcon from '@/assets/icons/kakao_ico.png';

interface MassageProps {
    message?: string;
};

const OauthInterface = ({message}: MassageProps) => {
    const {user} = useUser();
    const router = useRouter();

    //구글
    const signInWithGoogle = async () => {
        const { error: err } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                queryParams: {
                    prompt: 'select_account',
                    access_type: 'offline',
                },
                redirectTo: `${location.origin}/api/auth/callback`, 
            },
        });
    };

    //카카오
    const signInWithKaKao = async () => {
        const { error: err } = await supabase.auth.signInWithOAuth({
            provider: "kakao",
            options: {
                queryParams: {
                    prompt: 'login',
                },
                redirectTo: `${location.origin}/api/auth/callback`, 
            },
        });
    };

    useEffect(() => {
        if(message) {
            errorSwal.fire({text:'로그인이 필요한 서비스입니다.'});
            window.history.replaceState({}, '', '/login');
            return;
        }
    }, []);

    useEffect(() => {
        if(user) {
            errorSwal.fire({text:'이미 로그인 상태입니다.'});
            router.push('/');
            return;
        }
    }, []);

    return (
        <div className='login-btns'>
            <button 
                className='login-btn btn-0'
                onClick={signInWithGoogle}
            >
                <Image width={20} height={20} src={googleIcon} alt="구글" className='login-btn__icon'/>
                Google로 계속하기
            </button>
            <button 
                className='login-btn btn-1'
                onClick={signInWithKaKao}
            >
                <Image width={20} height={20} src={kakaoIcon} alt="카카오" className='login-btn__icon'/>
                카카오로 계속하기
            </button>
        </div>
    );
};

export default OauthInterface;