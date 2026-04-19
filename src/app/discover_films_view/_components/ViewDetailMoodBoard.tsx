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
        </div>
    );
};

export default ViewDetailMoodBoard;