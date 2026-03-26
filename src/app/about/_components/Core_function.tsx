'use client';
import Title from '@/shared/components/title/Title';
import React, { useState } from 'react';
import Core_function_coreDetail from './Core_function_coreDetail';
import Core_function_coreList from './Core_function_coreList';
import Core_function_coreChat from './Core_function_coreChat';
import Core_function_coreArt from './Core_function_coreArt';

const coreTabs = [
    {id: "tonne", label: "톤앤매너 요약"},
    {id: "interactive", label: "인터랙티브 Q&A"},
    {id: "mood", label: "AI 무드 보드"},
];

const Core_function = () => {
    const [coreTab, setCoreTab] = useState('tonne');

    return (
        <section>
            <div className='inner-2'>
                <Title  
                    chip='핵심 기능' 
                    title='3가지' 
                    accent='핵심 기능' 
                />

                <div className='core-tab-btns'>
                    {
                        coreTabs.map((tab) => (
                            <button 
                                key={tab.id} 
                                className={`core-tab-btn ${coreTab === tab.id ? 'is-active' : ''}`}
                                onClick={() => setCoreTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))
                    }
                </div>

                {
                    coreTab === 'tonne' ? 
                    (
                        <div className='core'>
                            <Core_function_coreDetail 
                                icon='🎭'
                                title='내 기분에 맞는'
                                accent='요약'
                                text={`같은 영화도 어떤 사람에겐 철학적 분석이 필요하고, 어떤 사람에겐 "야 이거 재밌어"가 필요합니다. 4가지 톤을 골라
                                        AI가 실시간으로 다시 써드립니다.`}
                                badges={['실시간 재생성', 'GEMINI 2.5', '스트리밍 출력']}
                            />

                            <Core_function_coreList />
                        </div> 
                    )
                    :
                    coreTab === 'interactive' ?
                    (
                        <div className='core'>
                            <Core_function_coreDetail 
                                icon='💬'
                                title='궁금한 건'
                                accent='직접 물어보세요'
                                text={`고구마 구간이 있는지, 반전이 있는지, 쿠키 영상은 있는지 — 정해진 정보가 아닌, 내가 원하는 정보를 AI에게 바로 물어볼 수 있습니다.`}
                                badges={['무제한 질문', '스포 조절 가능', '컨텍스트 유지']}
                            />

                            <Core_function_coreChat />
                        </div> 
                    )
                    :
                    coreTab === 'mood' ?
                    (
                        <div className='core'>
                            <Core_function_coreDetail 
                                icon='🎨'
                                title='영화의 감성을'
                                accent='아트워크로'
                                text={`스틸컷이 아닌, AI가 줄거리와 감성을 분석해 그 영화만의 분위기를 재해석한 아트워크를 생성합니다. SNS 공유 카드로도 저장할 수 있습니다.`}
                                badges={['AI 이미지 생성', 'SNS 공유', '영화별 감성 분석']}
                            />

                            <Core_function_coreArt />
                        </div> 
                    )
                    : null
                }
            </div>
        </section>
    );
};

export default Core_function;