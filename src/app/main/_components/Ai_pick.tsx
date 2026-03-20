'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import Title from '@/shared/components/title/Title';
import React, { useEffect } from 'react';

const Ai_pick = () => {
    useEffect(() => {
        const slides = document.querySelectorAll<HTMLElement>('.pick-swiper__slide');
        if (!slides.length) return;

        const genreColors: { keyword: string; color: string }[] = [
            { keyword: '드라마',     color: '#231C0C' },
            { keyword: '액션',       color: '#240E0E' },
            { keyword: '애니메이션', color: '#0B1523' },
            { keyword: '스릴러',     color: '#162910' },
            { keyword: '코미디',     color: '#1C1A08' },
            { keyword: '로맨스',     color: '#1F0D17' },
            { keyword: '공포',       color: '#0F0A0A' },
            { keyword: '호러',       color: '#0F0A0A' },
            { keyword: 'SF',         color: '#091520' },
            { keyword: '판타지',     color: '#0D0B20' },
            { keyword: '범죄',       color: '#141414' },
            { keyword: '미스터리',   color: '#0C0C18' },
            { keyword: '전쟁',       color: '#111108' },
            { keyword: '역사',       color: '#1A130A' },
            { keyword: '음악',       color: '#0D1A1A' },
            { keyword: '다큐',       color: '#0A1010' },
            { keyword: '서부',       color: '#1A1208' },
            { keyword: '모험',       color: '#0A1A12' },
        ];

        slides.forEach((slide) => {
            const genre = slide.querySelector<HTMLElement>('.pick-swiper__genre');
            if (!genre) return;

            const text = genre.textContent ?? '';
            const matched = genreColors.filter(({ keyword }) => text.includes(keyword));

            if (matched.length === 0) return;

            if (matched.length === 1) {
                slide.style.background = matched[0].color;
            } else {
                const colors = matched.slice(0, 3).map(({ color }) => color);
                const stops = colors.map((color, i) => {
                    const percent = Math.round((i / (colors.length - 1)) * 100);
                    return `${color} ${percent}%`;
                });
                slide.style.background = `linear-gradient(135deg, ${stops.join(', ')})`;
            }
        });
    }, []);

    return (
        <section>
            <div className='inner-2'>
                <Title chip='오늘의 큐레이션' title='AI가 고른' accent='이주의 영화'/>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={3}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={1300}
                    loop={false}
                    pagination={{
                        el: '.navi .swiper-pagination',
                        clickable: false,
                    }}
                    navigation={{
                        nextEl: '.navi .swiper-button-next',
                        prevEl: '.navi .swiper-button-prev'
                    }}
                    breakpoints={{
                        1281: {slidesPerView: 4},
                        769: {slidesPerView: 3},
                        1: {slidesPerView: 2},
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="pick-swiper"
                >
                    <SwiperSlide className="pick-swiper__slide">
                    <div className="pick-swiper__detail">
                        <p className="pick-swiper__genre">
                        <span>9.0</span>
                        드라마 · 스릴러
                        </p>
                        <p className="pick-swiper__name">기생충</p>
                        <p className="pick-swiper__badge">🔍 철학 모드</p>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className="pick-swiper__slide">
                    <div className="pick-swiper__detail">
                        <p className="pick-swiper__genre">
                        <span>8.3</span>
                        액션
                        </p>
                        <p className="pick-swiper__name">베테랑 2</p>
                        <p className="pick-swiper__badge">🍺 친구 모드</p>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className="pick-swiper__slide">
                    <div className="pick-swiper__detail">
                        <p className="pick-swiper__genre">
                        <span>8.1</span>
                        애니메이션
                        </p>
                        <p className="pick-swiper__name">인사이드 아웃 2</p>
                        <p className="pick-swiper__badge">🎭 스포없음</p>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className="pick-swiper__slide">
                    <div className="pick-swiper__detail">
                        <p className="pick-swiper__genre">
                        <span>9.3</span>
                        드라마
                        </p>
                        <p className="pick-swiper__name">쇼생크 탈출</p>
                        <p className="pick-swiper__badge">🎬 영화광 모드</p>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className="pick-swiper__slide">
                    <div className="pick-swiper__detail">
                        <p className="pick-swiper__genre">
                        <span>8.7</span>
                        SF · 액션
                        </p>
                        <p className="pick-swiper__name">인셉션</p>
                        <p className="pick-swiper__badge">🔍 철학 모드</p>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className="pick-swiper__slide">
                    <div className="pick-swiper__detail">
                        <p className="pick-swiper__genre">
                        <span>8.5</span>
                        드라마 · 역사
                        </p>
                        <p className="pick-swiper__name">오펜하이머</p>
                        <p className="pick-swiper__badge">🔍 철학 모드</p>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className="pick-swiper__slide">
                    <div className="pick-swiper__detail">
                        <p className="pick-swiper__genre">
                        <span>8.0</span>
                        코미디
                        </p>
                        <p className="pick-swiper__name">극한직업</p>
                        <p className="pick-swiper__badge">🍺 친구 모드</p>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className="pick-swiper__slide">
                    <div className="pick-swiper__detail">
                        <p className="pick-swiper__genre">
                        <span>8.2</span>
                        드라마 · 스릴러
                        </p>
                        <p className="pick-swiper__name">버닝</p>
                        <p className="pick-swiper__badge">🎬 영화광 모드</p>
                    </div>
                    </SwiperSlide>
                </Swiper>

                <div className='navi'>
                    <button className='swiper-button-prev'>◀</button>
                    <div className='swiper-pagination'></div>
                    <button className='swiper-button-next'>▶</button>
                </div>
            </div>
        </section>
    );
};

export default Ai_pick;