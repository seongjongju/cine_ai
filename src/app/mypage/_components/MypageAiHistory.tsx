import { History } from '@/types/history';
import Link from 'next/link';
import React from 'react';

interface HistoryProps {
    history: History[] | null | undefined;
};

const MypageAiHistory = ({history}: HistoryProps) => {
    return (
        <section>
            <nav className='inner'>
                <p className='title__chip md'>
                    <span className='title__line'></span>
                    AI 요약 히스토리
                </p>
                <h2 className='title md'>
                    내가 받은 <span>AI 요약</span>
                </h2>
                <ul className="ai-history__list">
                    {
                        history?.length ? 
                        (
                            history?.slice(0, 5)?.map((his) => (
                                <li 
                                    key={his.id}
                                    className="ai-history__item"
                                >
                                    <div className="ai-history__top">
                                        <span className="ai-history__movie">{his?.title}</span>
                                        <span className="ai-history__badge">
                                            {his?.mode !== null ? his?.mode : "미 선택"}
                                        </span>
                                    </div>
                                    <p className='ai-history__mytext'>{his?.myqna}</p>
                                    <p className="ai-history__text">{his?.aianswer}</p>
                                </li>
                            ))
                        ) :
                        (
                            <div>
                                <p className='text-[#fff]'>요약받은 영화가 없습니다.</p>
                                <Link
                                    href={'/discover_films?page=1&genre=all'}
                                    className='text-[var(--gold-0)]'
                                >
                                    요약받으러 가기 →
                                </Link>
                            </div>
                        )
                    }
                </ul>
            </nav>
        </section>
    );
};

export default MypageAiHistory;