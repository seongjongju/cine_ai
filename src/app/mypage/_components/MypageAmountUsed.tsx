import React from 'react';

const MypageAmountUsed = () => {
    return (
        <section>
            <nav className='inner'>
                <p className='title__chip md'>
                    <span className='title__line'></span>
                    AI 사용량
                </p>
                <h2 className='title md'>
                    오늘 남은 <span>사용량</span>
                </h2>
                <ul className="ai-usage__list">
                    <li className="ai-usage__item">
                        <div className="ai-usage__item-top">
                            <span className="ai-usage__name">AI 요약</span>
                            <span className="ai-usage__icon">✦</span>
                        </div>
                        <p className="ai-usage__count"><em>47</em></p>
                        <p className="ai-usage__max">/ 100회 사용</p>
                        <div className="ai-usage__bar">
                            <div className="ai-usage__bar-fill" style={{ width: '47%' }}></div>
                        </div>
                    </li>
                    <li className="ai-usage__item">
                        <div className="ai-usage__item-top">
                            <span className="ai-usage__name">무드 보드</span>
                            <span className="ai-usage__icon">✦</span>
                        </div>
                        <p className="ai-usage__count"><em>2</em></p>
                        <p className="ai-usage__max">/ 12회 사용</p>
                        <div className="ai-usage__bar">
                            <div className="ai-usage__bar-fill" style={{ width: '20%' }}></div>
                        </div>
                    </li>
                </ul>
                <p className="ai-usage__reset">⊙ 24시간 후에 초기화됩니다</p>
            </nav>
        </section>
    );
};

export default MypageAmountUsed;