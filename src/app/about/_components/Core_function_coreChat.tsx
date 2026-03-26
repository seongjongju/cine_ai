import React from 'react';

const Core_function_coreChat = () => {
    return (
        <div className='core__chat'>
            <div className='core__chat--q'>
                고구마 구간 있나요?
            </div>
            <div className='core__chat--a'>
                <p className='core__chat--ai'>
                    <span className='core__chat-circle'></span>
                    AI 응답
                </p>
                중반부까지는 오히려 시원합니다. 기택 가족의 계획이 척척 맞아 들어가는 구간이라 보는 맛이 있어요. 고구마는 후반부에 예상치 못한 전환 이후입니다.
            </div>
            <div className='core__chat--q'>
                반전 있어요? (스포X)
            </div>
            <div className='core__chat--a'>
                <p className='core__chat--ai'>
                    <span className='core__chat-circle'></span>
                    AI 응답
                </p>
                반전이라기보다 폭로에 가깝습니다. 중반에 장르 자체를 갈아엎는 전환이 있어요. &ldquo;지하에 무언가 있다&rdquo; 는 것만 알고 들어가세요.
            </div>
        </div>
    );
};

export default Core_function_coreChat;