import Title from '@/shared/components/title/Title';
import React from 'react';

const Instructions = () => {
    return (
        <section className='bg-[#111111]'>
            <div className='inner-2'>
                <Title chip='사용 방법' title='어떻게' accent='작동하나요'/>

                <div className='instructions'>
                    <div className='instructions__item'>
                        <div className='instructions__number'>
                            <span className='instructions__icon'>🎬</span>
                            01
                        </div>
                        <p className='instructions__title'>영화 선택</p>
                        <p className='instructions__text'>
                            보고 싶은 영화를 검색하거나 AI 추천을 받으세요. 장르, 기분, 
                            감독으로 필터링도 가능합니다.
                        </p>
                    </div> {/* item */}

                    <div className='instructions__item'>
                        <div className='instructions__number'>
                            <span className='instructions__icon'>🎭</span>
                            02
                        </div>
                        <p className='instructions__title'>톤 선택</p>
                        <p className='instructions__text'>
                            스포 없이, 영화광처럼, 철학적으로, 친구한테 원하는 방식으
                            로 요약을 받아보세요.
                        </p>
                    </div> {/* item */}

                    <div className='instructions__item'>
                        <div className='instructions__number'>
                            <span className='instructions__icon'>💬</span>
                            03
                        </div>
                        <p className='instructions__title'>AI에게 질문</p>
                        <p className='instructions__text'>
                            고구마 구간, 반전, 감독 의도, 쿠키 영상 — 궁금한 건 뭐든 바로 
                            물어보세요.
                        </p>
                    </div> {/* item */}

                    <div className='instructions__item'>
                        <div className='instructions__number'>
                            <span className='instructions__icon'>🎨</span>
                            04
                        </div>
                        <p className='instructions__title'>무드 보드</p>
                        <p className='instructions__text'>
                            영화의 감성을 AI가 아트워크로 재해석합니다. SNS 공유 카드로도 저장할 수 있어요.
                        </p>
                    </div> {/* item */}
                </div>
            </div>
        </section>
    );
};

export default Instructions;