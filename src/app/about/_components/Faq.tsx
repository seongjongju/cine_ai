import Title from '@/shared/components/title/Title';
import React from 'react';

const Faq = () => {
    return (
        <section>
            <div className='inner-2'>
                <Title 
                    chip='자주 묻는 질문'
                    title='FAQ'
                />
                <div className='faq'>
                    <div className='faq__item'>
                        <h6 className='faq__q'>실제로 AI가 답변하나요?</h6>
                        <p className='faq__a'>네, Google Gemini 2.5 API를 기반으로 실시간 응답합니다. 영화 데이터베이스와 연동되어 정확한 정보를 제공합니다.</p>
                    </div>
                    <div className='faq__item'>
                        <h6 className='faq__q'>스포일러 없이 정말 사용할 수 있나요?</h6>
                        <p className='faq__a'>스포없음 모드는 핵심 반전과 결말을 숨기도록 설계되어 있습니다. Q&A에서도 스포 여부를 먼저 물어봅니다.</p>
                    </div>
                    <div className='faq__item'>
                        <h6 className='faq__q'>무료 요금제에서 카드 등록이 필요한가요?</h6>
                        <p className='faq__a'>아니요. 무료 요금제는 카드 등록 없이 소셜 계정만으로 바로 시작할 수 있습니다.</p>
                    </div>
                    <div className='faq__item'>
                        <h6 className='faq__q'>어떤 영화까지 지원하나요?</h6>
                        <p className='faq__a'>TMDB 데이터베이스와 연동되어 국내외 주요 영화를 지원합니다. 커버리지는 지속 확대 중입니다.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;