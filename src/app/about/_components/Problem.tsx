import Title from '@/shared/components/title/Title';
import React from 'react';

const Problem = () => {
    return (
        <section id='problem'>
            <div className='inner-2'>
                <div className='problem'>
                    <div className='problem__item'>
                        <Title  
                            chip='문제 인식' 
                            title='기존 서비스의' 
                            accent='한계' 
                        />
                        <ul className='problem__list'>
                            <li className='problem__li'>
                                <p className='problem__title'>01. 스포일러 통제 불가</p>
                                <p className='problem__text'>스포가 싫어도, 원해도 모두 같은 줄거리를 봅니다.</p>
                            </li>
                            <li className='problem__li'>
                                <p className='problem__title'>02. 궁금증 해결 불가</p>
                                <p className='problem__text'>고구마 구간이 있는지, 쿠키 영상이 있는지 알 수 없습니다.</p>
                            </li>
                            <li className='problem__li'>
                                <p className='problem__title'>03. 감성 정보 부재</p>
                                <p className='problem__text'>&quot;재밌다&quot;, &quot;슬프다&quot; 이상의 감성 정보를 얻기 어렵습니다.</p>
                            </li>
                            <li className='problem__li'>
                                <p className='problem__title'>04. 수동적 탐색</p>
                                <p className='problem__text'>정보를 제공하는 주체는 서비스이고 사용자는 받아보기만 합니다.</p>
                            </li>
                        </ul>
                    </div> {/* item */}
                    <div className='problem__item'>
                        <Title  
                            chip='CineAI 솔루션' 
                            title='우리의' 
                            accent='답변' 
                        />
                        <div className='problem__answer'>
                            <p className='problem__heading'>
                                <span className='text-[var(--gold-0)]'>✦</span> 톤앤매너 선택
                            </p>
                            <p className='problem__text'>스포 없이, 영화광처럼, 철학적으로, 친구한테 — 4가지 방식으로 AI가 실시간 재요약합니다.</p>
                        </div>
                        <div className='problem__answer'>
                            <p className='problem__heading'>
                                <span className='text-[var(--gold-0)]'>✦</span> 인터랙티브 Q&A
                            </p>
                            <p className='problem__text'>원하는 것을 직접 물어보세요. 고구마, 반전, 쿠키, 감독 의도까지 AI가 대답합니다.</p>
                        </div>
                        <div className='problem__answer'>
                            <p className='problem__heading'>
                                <span className='text-[var(--gold-0)]'>✦</span> AI 무드 보드
                            </p>
                            <p className='problem__text'>영화의 감성을 AI가 재해석한 아트워크로 시각화합니다. SNS 공유 카드로도 저장 가능.</p>
                        </div>
                    </div> {/* item */}
                </div>
            </div>
        </section>
    );
};

export default Problem;