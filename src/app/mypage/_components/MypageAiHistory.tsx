import React from 'react';

const MypageAiHistory = () => {
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
                    <li className="ai-history__item">
                        <div className="ai-history__top">
                            <span className="ai-history__movie">기생충</span>
                            <span className="ai-history__badge">🔍 철학 모드</span>
                        </div>
                        <p className="ai-history__text">계단이라는 모티프는 수직적 계급 구조 그 자체다. 봉준호는 공간이라는 언어로 자본주의를 번역한다.</p>
                    </li>
                    <li className="ai-history__item">
                        <div className="ai-history__top">
                            <span className="ai-history__movie">베테랑 2</span>
                            <span className="ai-history__badge">🍺 친구 모드</span>
                        </div>
                        <p className="ai-history__text">야 이거 진짜 봐야 함. 고구마 없고 황정민 또 미침. 체감 90분.</p>
                    </li>
                    <li className="ai-history__item">
                        <div className="ai-history__top">
                            <span className="ai-history__movie">인셉션</span>
                            <span className="ai-history__badge">🎬 영화광 모드</span>
                        </div>
                        <p className="ai-history__text">놀란의 드림 아키텍처는 단순한 SF가 아니다. 레이어드 내러티브 구조가 장르의 문법을 재정의한다.</p>
                    </li>
                    <li className="ai-history__item">
                        <div className="ai-history__top">
                            <span className="ai-history__movie">쇼생크 탈출</span>
                            <span className="ai-history__badge">🎭 스포없음</span>
                        </div>
                        <p className="ai-history__text">희망이라는 단어가 이렇게 무거울 수 있다는 걸 보여주는 영화. 그 이상은 직접 보세요.</p>
                    </li>
                    <li className="ai-history__item">
                        <div className="ai-history__top">
                            <span className="ai-history__movie">오펜하이머</span>
                            <span className="ai-history__badge">🔍 철학 모드</span>
                        </div>
                        <p className="ai-history__text">신화적 죄책감의 현대적 재현. 프로메테우스 서사를 핵물리학으로 치환한 놀란의 가장 철학적인 작품.</p>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default MypageAiHistory;