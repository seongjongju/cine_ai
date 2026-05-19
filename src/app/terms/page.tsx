import Title from '@/shared/components/title/Title';
import './_styles/pol.css';
import React from 'react';

const TermsPage = () => {
    return (
        <section>
            <nav className='inner-3'>
                <Title chip='법적 고지' title='이용약관' />
                <p className='text-[#7a7068] break-keep text-sm md:text-base'>
                    CineAI 서비스를 이용하시기 전에 본 약관을 주의 깊게 읽어 주십시오. <br />
                    서비스 이용 시 본 약관에 동의한 것으로 간주됩니다.
                </p>

                <div className='pol-group'>
                    <p className='pol-title'><span>01</span> 목적</p>
                    <p className='pol-text'>
                        본 약관은 CineAI(이하 &quot;회사&quot;)가 제공하는 AI 기반 영화 큐레이션 서비스(이하 &quot;서비스&quot;)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.
                    </p>
                    <div className='pol-ex'>
                        본 약관에 동의하지 않으시는 경우, 서비스 이용을 중단하시기 바랍니다. 서비스에 접속하거나 이용하는 행위는 본 약관에 동의하는 것으로 간주됩니다.
                    </div>
                </div>

                <div className='pol-group'>
                    <p className='pol-title'><span>02</span> 정의</p>
                    <p className='pol-text mb-[1em]'>
                        본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                    </p>
                    <ul className='pol-list'>
                        <li className='pol-list__li'>&quot;서비스&quot;란 회사가 제공하는 AI 기반 영화 추천 및 큐레이션 플랫폼을 의미합니다.</li>
                        <li className='pol-list__li'>&quot;이용자&quot;란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 의미합니다.</li>
                        <li className='pol-list__li'>&quot;회원&quot;이란 회사와 서비스 이용 계약을 체결하고 계정을 생성한 이용자를 의미합니다.</li>
                        <li className='pol-list__li'>&quot;AI 큐레이션&quot;이란 인공지능 알고리즘을 통해 이용자의 취향에 맞는 영화를 추천하는 기능을 의미합니다.</li>
                        <li className='pol-list__li'>&quot;콘텐츠&quot;란 서비스 내에서 제공되는 텍스트, 이미지, 영상 등 모든 형태의 정보를 의미합니다.</li>
                    </ul>
                </div>

                <div className='pol-group'>
                    <p className='pol-title'><span>03</span> 약관의 효력 및 변경</p>
                    <p className='pol-text mb-[1em]'>
                        본 약관은 서비스 초기 화면에 게시하거나 기타 방법으로 이용자에게 공지함으로써 효력을 발생합니다.
                    </p>
                    <p className='pol-text'>
                        회사는 관련 법령을 위반하지 않는 범위 내에서 본 약관을 개정할 수 있으며, 개정 시 시행일 7일 전부터 서비스 내 공지사항을 통해 고지합니다. 다만 이용자에게 불리한 변경의 경우 30일 전에 고지합니다.
                    </p>
                </div>

                <div className='pol-group'>
                    <p className='pol-title'><span>04</span> 서비스 이용</p>
                    <p className='pol-text mb-[1em]'>
                        회사는 다음과 같은 서비스를 제공합니다.
                    </p>
                    <ul className='pol-list'>
                        <li className='pol-list__li'>4가지 톤의 영화 줄거리 재구성 서비스</li>
                        <li className='pol-list__li'>AI 대화형 영화 정보 질의응답</li>
                        <li className='pol-list__li'>위시리스트 및 관심 영화 관리 기능</li>
                    </ul>
                    <p className='pol-text mt-[.75em]'>
                        서비스는 연중무휴 제공을 원칙으로 하되, 시스템 점검 또는 기술적 사유로 일시 중단될 수 있습니다.
                    </p>
                </div>

                <div className='pol-group'>
                    <p className='pol-title'><span>05</span> 회원 의무</p>
                    <p className='pol-text mb-[1em]'>
                        회원은 서비스 이용 시 다음 행위를 하여서는 안 됩니다.
                    </p>
                    <ul className='pol-list'>
                        <li className='pol-list__li'>타인의 정보를 도용하거나 허위 정보를 등록하는 행위</li>
                        <li className='pol-list__li'>회사의 저작권 또는 제3자의 지식재산권을 침해하는 행위</li>
                        <li className='pol-list__li'>서비스의 안정적 운영을 방해하는 행위</li>
                        <li className='pol-list__li'>음란, 폭력적 콘텐츠를 게시하거나 유포하는 행위</li>
                        <li className='pol-list__li'>상업적 목적의 무단 광고·홍보 행위</li>
                    </ul>
                    <div className='pol-ex'>
                        위반 시 사전 통지 없이 서비스 이용이 제한될 수 있으며, 법적 조치가 취해질 수 있습니다.
                    </div>
                </div>

                <div className='pol-group'>
                    <p className='pol-title'><span>06</span> 지식재산권</p>
                    <p className='pol-text mb-[.75em]'>
                        서비스 내 AI가 생성한 콘텐츠, UI 디자인, 텍스트, 로고 등 모든 지식재산은 회사에 귀속됩니다. 이용자는 서비스를 통해 제공된 콘텐츠를 개인적, 비상업적 목적으로만 이용할 수 있습니다.
                    </p>
                    <p className='pol-text'>
                        이용자가 서비스 내에 게시한 콘텐츠에 대한 저작권은 해당 이용자에게 있으며, 회사는 서비스 운영 및 개선을 위해 이를 활용할 수 있는 비독점적 라이선스를 보유합니다.
                    </p>
                </div>

                <div className='pol-group'>
                    <p className='pol-title'><span>07</span> 면책 조항</p>
                    <p className='pol-text mb-[1em]'>
                        회사는 천재지변, 불가항력적 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다. AI가 생성한 영화 추천 및 정보는 참고용이며, 이를 근거로 한 이용자의 결정에 대한 책임은 이용자 본인에게 있습니다.
                    </p>
                    <ul className='pol-list'>
                        <li className='pol-list__li'>AI 추천 결과의 정확성 또는 완전성에 대한 보증 불가</li>
                        <li className='pol-list__li'>이용자 간 분쟁 또는 이용자와 제3자 간 분쟁에 대한 책임 불부담</li>
                        <li className='pol-list__li'>무료 서비스에서 발생하는 데이터 손실에 대한 책임 제한</li>
                    </ul>
                </div>

                <div className='pol-group'>
                    <p className='pol-title'><span>08</span> 분쟁 해결</p>
                    <p className='pol-text mb-[.75em]'>
                        본 약관과 관련하여 발생하는 분쟁은 대한민국 법률에 따라 해결하며, 소송이 필요한 경우 회사 소재지를 관할하는 법원을 전속 관할 법원으로 합니다.
                    </p>
                    <p className='pol-text mb-[1em]'>
                        서비스 이용과 관련한 문의 및 불만 사항은 아래 이메일로 접수해 주시기 바랍니다.
                    </p>
                    <div className='pol-ex'>
                        고객센터: legal@cineai.kr <br /> 운영 시간: 평일 10:00 – 18:00
                    </div>
                </div>

            </nav>
        </section>
    );
};

export default TermsPage;