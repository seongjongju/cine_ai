import React from 'react';

const ViewDetailMoodBoard = () => {
    return (
        <div>
            <p className='title__chip md'>
                <span className='title__line'></span>
                AI 무드 보드
            </p>

            <div className='mood-board'>
                <div className='mood-board__img'>
                    <img src="/images/profile_none.png" alt="무드보드 이미지" />
                </div>
                <div className='mood-board__img'>
                    <img src="/images/profile_none.png" alt="무드보드 이미지" />
                </div>
                <div className='mood-board__img'>
                    <img src="/images/profile_none.png" alt="무드보드 이미지" />
                </div>
                <div className='mood-board__img'>
                    <img src="/images/profile_none.png" alt="무드보드 이미지" />
                </div>
            </div> {/* mood-board */}

            <button 
                className='gemini-qna__button'
                onClick={() => alert("본 기능은 영화 정보를 분석하여 무드보드를 생성하는 기능입니다. 제미나이 무료 티어 특성상 생성 횟수 제한으로 인해 현재는 제한되어 있습니다.")}
            >
                무드보드 생성
            </button>
        </div>
    );
};

export default ViewDetailMoodBoard;