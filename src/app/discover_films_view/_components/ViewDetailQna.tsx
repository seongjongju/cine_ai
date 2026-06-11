'use client';
import { useUser } from '@/providers/UsersProvider';
import { useRouter } from 'next/navigation';
import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState } from 'react';
import { addHistory } from '@/features/services/history/addHistoryService';

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
            const modeTitle = geminiMode.find(mode => mode.id === modeTab)?.title

            const model = geminiAI.getGenerativeModel(
                {
                    model: "gemini-2.5-flash",
                    systemInstruction: `
                    당신은 영화 정보를 요약하는 전문가입니다.

                    규칙:
                    1. 제공된 영화정보 또는 인터넷에 나와있는 정보를 사용하세요.
                    2. 없는 내용을 추측하거나 창작하지 마세요.
                    3. 분위기식 소개문보다 실제 줄거리 핵심을 우선하세요.
                    4. 주인공, 사건의 시작, 핵심 설정이 있다면 포함하세요.
                    5. ${modeTitle} ${modeText} 모드에 맞게 작성하세요.
                    6. 반드시 한국어 300자 이내로 작성하세요.
                    7. 정보가 부족하면 부족하다고 명시하세요.

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
            const aiText = res.text();

            setAiAnswer(aiText);
            
            const history = {
                title: movieData.title,
                mode: modeTitle,
                myqna: qnaTextarea,
                aianswer: aiText,
            };  

            //히스토리 저장
            await addHistory(history);
        } catch(err) {
            if (err instanceof Error) {
                console.error("제미나이 답변 에러", err.message);
                if(err.message.includes("API_KEY_INVALID")) {
                    alert("알수없는 오류 발생 관리자에게 문의하세요.");
                } else if(err.message.includes("RATE_LIMIT_EXCEEDED")) {
                    alert("접속량초과로 인한 일시적인 오류 발생 잠시 후 다시 시도해주세요.");
                } else if(err.message.includes("QUOTA_EXCEEDED")) {
                    alert("제미나이 무료 티어 할당량 초과 자정 이후 다시 시도해주세요.");
                } else {
                    alert("구글 AI 서버에 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
                }
            } else {
                console.error(String(err));
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