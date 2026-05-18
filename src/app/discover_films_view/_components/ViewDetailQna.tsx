'use client';
import { useUser } from '@/providers/UsersProvider';
import { useRouter } from 'next/navigation';
import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState } from 'react';

type MovieData = {
    title: string;
    overview: string;
    genre: string;
};

interface MovieDataProps {
    movieData: MovieData;
};

const geminiMode = [
    {id: 'not spoiler', icon: '🎭', title: '스포 없이', text: '궁금증만 자극하는 흥미 위주 요약'},
    {id: 'film buff', icon: '🎬', title: '영화광처럼', text: '연출·배우·장르 문법 중심 분석'},
    {id: 'philosophy', icon: '🔍', title: '철학적으로', text: '메타포·메시지·감독 의도 심층 분석'},
    {id: 'friend', icon: '🍺', title: '친구한테', text: '반말, 유머, 과장 섞인 캐주얼 추천'},
];

const ViewDetailQna = ({ movieData } :MovieDataProps) => {
    const { user } = useUser();
    const [modeTab, setModeTab] = useState<string>('');
    const [qnaTextarea, setQnaTextarea] = useState<string>('');
    const [aiAnswer, setAiAnswer] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

    const handleChangeQnaTextarea = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        if(!user) {
            alert('로그인이 필요한 서비스입니다.');
            router.push('/login');
            return;
        };

        setQnaTextarea(e.target.value);
    };

    const handleClickAiSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if(qnaTextarea.trim() === '') {
            alert('질문을 입력하세요.');
            return;
        };

        const geminiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        if(geminiKey === undefined) return;
        
        const geminiAI = new GoogleGenerativeAI(geminiKey);

        try {
            setIsLoading(true);

            const modeText = geminiMode.find(mode => mode.id === modeTab)?.text

            const model = geminiAI.getGenerativeModel(
                {
                    model: "gemini-2.5-flash",
                    systemInstruction: `당신은 영화를 모드에 맞게 설명해 주는 전문가입니다. 아래 영화 정보를 바탕으로
                        사용자가 선택한 ${modeTab} ${modeText}모드에 맞게 친절히 300자 이내로 꼭 끊어서 답변해주세요.

                        [영화정보]
                        - 제목: ${movieData.title}
                        - 장르: ${movieData.genre}
                        - 줄거리: ${movieData.overview}
                    `,
                    generationConfig: {},
                    safetySettings: []
                },
            );

            const result = await model.generateContent(qnaTextarea);
            const res = result.response;

            setAiAnswer(res.text());
        } catch(err) {
            if (err instanceof Error) {
                console.log("제미나이 답변 에러", err.message); 
            } else {
                console.log(String(err));
            }
        } finally {
            setIsLoading(false);
        }
    };   
    
    return (
        <div>
            <p className='title__chip md'>
                <span className='title__line'></span>
                인터랙티브 Q&A : 모드를 선택해주세요.
            </p>

            <ul className='gemini-mode'>
                {
                    geminiMode.map((mode) => (
                        <li 
                            key={mode.id} 
                            className={`gemini-mode__li ${mode.id === modeTab ? 'is-active' : ''}`}
                            onClick={() => setModeTab(mode.id)}
                        >
                            <span className='gemini-mode__icon'>{mode.icon}</span>
                            <p className='gemini-mode__title'>{mode.title}</p>
                            <p className='gemini-mode__text'>{mode.text}</p>
                        </li>
                    ))
                }
            </ul> {/* gemini-mode */}

            <div className='gemini-qna'>
                <div className='gemini-qna__q'>
                    <h6 className='gemini-qna__title'>궁금한 거 물어봐</h6>
                    <form className='gemini-qna__form'>
                        <textarea 
                            placeholder='질문을 입력하세요.' 
                            onChange={handleChangeQnaTextarea}
                            value={qnaTextarea}
                            className='gemini-qna__textarea' 
                        />
                        <button 
                            className='gemini-qna__button'
                            onClick={handleClickAiSubmit}
                        >
                            질문하기
                        </button>
                    </form>
                </div> {/* gemini-qna__q */}

                <div className='gemini-qna__a'>
                    <p className="gemini-qna__ai">
                        <span className="gemini-qna__circle"></span>
                        AI 응답
                    </p>
                    {
                        qnaTextarea.trim() !== '' ? 
                        (
                            <p className='gemini-qna__user'>
                                {qnaTextarea}
                            </p>
                        ) : null
                    }
                    {
                        isLoading ? 
                        (
                            <p className='text-[#ffffff]'>답변 작성중...</p>
                        ) :
                        (
                            <p className='gemini-qna__answer'>
                                {
                                    aiAnswer !== "" ? aiAnswer : ""
                                }
                            </p>
                        )
                    }
                </div> {/* gemini-qna__a */}
            </div> {/* gemini-qna */}
        </div>
    );
};

export default ViewDetailQna;