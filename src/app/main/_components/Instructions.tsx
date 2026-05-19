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
                            <span className='instructions__icon'>🔍</span>
                            01
                        </div>
                        <p className='instructions__title'>영화 검색</p>
                        <p className='instructions__text'>
                            제목으로 검색하거나 장르별로 필터링해 원하는 영화를 빠르게 찾아보세요.
                        </p>
                    </div>

                    <div className='instructions__item'>
                        <div className='instructions__number'>
                            <span className='instructions__icon'>🎬</span>
                            02
                        </div>
                        <p className='instructions__title'>상세 정보 확인</p>
                        <p className='instructions__text'>
                            줄거리, 출연진, 평점, 트레일러까지 — 영화의 모든 정보를 한 페이지에서 확인하세요.
                        </p>
                    </div>

                    <div className='instructions__item'>
                        <div className='instructions__number'>
                            <span className='instructions__icon'>💬</span>
                            03
                        </div>
                        <p className='instructions__title'>AI에게 질문</p>
                        <p className='instructions__text'>
                            스포 없는 요약, 반전 해석, 감독 의도까지 — 궁금한 건 뭐든 AI에게 바로 물어보세요.
                        </p>
                    </div>

                    <div className='instructions__item'>
                        <div className='instructions__number'>
                            <span className='instructions__icon'>🎭</span>
                            04
                        </div>
                        <p className='instructions__title'>위시리스트 저장</p>
                        <p className='instructions__text'>
                            나중에 보고 싶은 영화는 위시리스트에 담아두세요. 마이페이지에서 언제든 확인할 수 있어요.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Instructions;