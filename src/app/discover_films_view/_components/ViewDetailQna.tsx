import React, { useState } from 'react';

const geminiMode = [
    {id: 'not spoiler', icon: '🎭', title: '스포 없이', text: '궁금증만 자극하는 흥미 위주 요약'},
    {id: 'film buff', icon: '🎬', title: '영화광처럼', text: '연출·배우·장르 문법 중심 분석'},
    {id: 'philosophy', icon: '🔍', title: '철학적으로', text: '메타포·메시지·감독 의도 심층 분석'},
    {id: 'friend', icon: '🍺', title: '친구한테', text: '반말, 유머, 과장 섞인 캐주얼 추천'},
];

const geminiEx = [
    {id: 'ex_0', text: '고구마 구간 있나요?'},
    {id: 'ex_1', text: '반전 있나요? (스포X)'},
    {id: 'ex_2', text: '쿠키 영상 있어요?'},
    {id: 'ex_3', text: '눈물 주의 구간?'},
    {id: 'ex_4', text: '원작 있나요?'},
];

const ViewDetailQna = () => {
    const [modeTab, setModeTab] = useState<string>('');
    const [exTab, setExTab] = useState<string>('');
    const [exText, setExText] = useState<string>('');
    const [qnaTextarea, setQnaTextarea] = useState<string>('');

    const handleChangeQnaTextarea = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setExText('');
        setQnaTextarea(e.target.value);
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
                    <ul className='gemini-qna__ex'>
                        {
                            geminiEx.map((ex) => (
                                <li 
                                    key={ex.id} 
                                    className={`gemini-qna__li ${ex.id === exTab ? 'is-active' : ''}`}
                                    onClick={() => {
                                        setExTab(ex.id);
                                        setExText(ex.text);
                                    }}
                                >
                                    {ex.text}
                                </li>
                            ))
                        }
                    </ul> {/* gemini-qna__ex */}
                    <form className='gemini-qna__form'>
                        <textarea 
                            placeholder='직접 질문을 입력하세요.' 
                            onChange={handleChangeQnaTextarea}
                            value={exText ? exText : qnaTextarea}
                            className='gemini-qna__textarea' 
                        />
                        <button className='gemini-qna__button'>질문하기</button>
                    </form>
                </div> {/* gemini-qna__q */}

                <div className='gemini-qna__a'>
                    <p className="gemini-qna__ai">
                        <span className="gemini-qna__circle"></span>
                        AI 응답
                    </p>
                    {
                        exText !== '' || qnaTextarea !== '' ? 
                        (
                            <p className='gemini-qna__user'>
                                {exText ? exText : qnaTextarea}
                            </p>
                        ) : null
                    }
                    <p className='gemini-qna__answer'>
                        반전이라기보다 폭로에 가깝습니다. 중반부에 예상치 못한 전환이 있는데, 이게 장르 자
                        체를 갈아엎어버립니다. 스릴러적 긴장감이 갑자기 치고 들어오는 구조라서 — 알고 봐도
                        충격이고, 모르고 봐도 충격입니다. 스포 없이 말하자면 지하에 무언가 있다는 것만 알
                        고 들어가세요.
                    </p>
                </div> {/* gemini-qna__a */}
            </div> {/* gemini-qna */}
        </div>
    );
};

export default ViewDetailQna;