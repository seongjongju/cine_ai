import Link from 'next/link';
import React from 'react';
import Title from '@/shared/components/title/Title';

const AboutIntro = () => {
    return (
        <section className='about-intro'>
            <div className='inner-2'>
                <Title  
                    chip='서비스 소개' 
                    title='넷플릭스는 100명에게' 
                    accent='같은 줄거리' 
                    title_1='보여줍니다.'
                />
                <p className='text-[var(--gray-0)] break-keep text-sm mb-5 md:mb-10 md:text-base'>
                    CineAI는 다릅니다. 100명에게 100가지 다른 방식으로 영화를 소개하고, AI가 당신만을 위한 큐레이터가 됩니다.
                </p>

                <div className='table-wrap'>
                    <table className='default-table about-intro__table'>
                        <colgroup>
                            <col style={{width: "33.3%"}} />
                            <col style={{width: "33.3%"}} />
                            <col style={{width: "33.3%"}} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>기능</th>
                                <th>기존 서비스</th>
                                <th className='accent-th'>Cine AI</th>
                            </tr>
                            <tr>
                                <td>
                                    <p className='text-[#ffffff] font-semibold mb-2 text-xs sm:text-sm md:text-base break-keep'>줄거리 / 텍스트</p>
                                    <p className='text-[var(--gray-1)] text-xs sm:text-sm md:text-base break-keep'>영화 소개 방식</p>
                                </td>
                                <td>
                                    <p className='text-[var(--gray-1)] mb-2 text-xs sm:text-sm md:text-base break-keep'>고정된 줄거리 텍스트</p>
                                    <br />
                                </td>
                                <td>
                                    <p className='text-[#ffffff] font-semibold mb-2 text-xs sm:text-sm md:text-base break-keep'>4가지 톤으로 재구성</p>
                                    <p className='table-badge'>AI 생성</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='text-[#ffffff] font-semibold mb-2 text-xs sm:text-sm md:text-base break-keep'>영화 정보 탐색</p>
                                    <p className='text-[var(--gray-1)] text-xs sm:text-sm md:text-base break-keep'>궁금한 내용 찾기</p>
                                </td>
                                <td>
                                    <p className='text-[var(--gray-1)] mb-2 text-xs sm:text-sm md:text-base break-keep'>수동적 정보 탐색</p>
                                    <br />
                                </td>
                                <td>
                                    <p className='text-[#ffffff] font-semibold mb-2 text-xs sm:text-sm md:text-base break-keep'>AI에게 직접 질문</p>
                                    <p className='table-badge'>대화형</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='text-[#ffffff] font-semibold mb-2 text-xs sm:text-sm md:text-base break-keep'>추천 / 무드</p>
                                    <p className='text-[var(--gray-1)] text-xs sm:text-sm md:text-base break-keep'>취향 기반 큐레이션</p>
                                </td>
                                <td>
                                    <p className='text-[var(--gray-1)] mb-2 text-xs sm:text-sm md:text-base break-keep'>스트리밍·예고편 위주</p>
                                    <br />
                                </td>
                                <td>
                                    <p className='text-[#ffffff] font-semibold mb-2 text-xs sm:text-sm md:text-base break-keep'>AI 생성 무드 보드</p>
                                    <p className='table-badge'>시각화</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='text-[#ffffff] font-semibold mb-2 text-xs sm:text-sm md:text-base break-keep'>사용자 경험</p>
                                    <p className='text-[var(--gray-1)] text-xs sm:text-sm md:text-base break-keep'>개인화 수준</p>
                                </td>
                                <td>
                                    <p className='text-[var(--gray-1)] mb-2 text-xs sm:text-sm md:text-base break-keep'>100명 → 같은 경험</p>
                                    <br />
                                </td>
                                <td>
                                    <p className='text-[#ffffff] font-semibold mb-2 text-xs sm:text-sm md:text-base break-keep'>100명 → 100가지 경험</p>
                                    <p className='table-badge'>개인화</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='text-[#ffffff] font-semibold mb-2 text-xs sm:text-sm md:text-base break-keep'>스포 없는 궁금증 해소</p>
                                    <p className='text-[var(--gray-1)] text-xs sm:text-sm md:text-base break-keep'>고구마·반전·만화 구간</p>
                                </td>
                                <td>
                                    <p className='text-[var(--gray-1)] mb-2 text-xs sm:text-sm md:text-base break-keep'>별도 정보 없음</p>
                                    <br />
                                </td>
                                <td>
                                    <p className='text-[#ffffff] font-semibold mb-2 text-xs sm:text-sm md:text-base break-keep'>스포없이 궁금증 해결</p>
                                    <p className='table-badge'>스마트</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> {/* table-wrap */}
                <div className="flex gap-2 mt-6 sm:mt-10">
                    <Link className="button-0 bg-[var(--gold-0)] text-[var(--black-1)]" href="/login">
                        무료로 시작하기
                    </Link>
                    <a className="button-0 text-[var(--gray-1)] border-1 border-[var(--gray-1)] 
                            hover:text-[var(--gold-0)] hover:border-[var(--gold-0)]
                            transition duration-300" 
                        href="#problem"
                    >
                        기능 살펴보기 ↓
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;