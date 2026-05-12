import Title from '@/shared/components/title/Title';
import '../terms/_styles/pol.css';
import React from 'react';

const PrivacyPage = () => {
    return (
        <section>
            <nav className='inner-3'>
                <Title chip='법적 고지' title='개인정보처리방침' />
                <p className='text-[#7a7068] break-keep text-sm md:text-base'>
                    CineAI는 이용자의 개인정보를 소중히 여기며, 관련 법령을 준수하여 안전하게 보호합니다. <br />
                    본 방침을 통해 수집하는 정보와 이용 목적을 투명하게 안내드립니다.
                </p>

                <div className='pol-group'>
                    <p className='pol-title'><span>01</span> 수집하는 개인정보</p>
                    <p className='pol-text mb-[1em]'>
                        CineAI는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.
                    </p>

                    <p className='title__chip md'>회원가입 시</p>
                    <ul className='pol-list mb-[1rem]'>
                        <li className='pol-list__li'>이메일 주소</li>
                        <li className='pol-list__li'>비밀번호 (암호화 저장)</li>
                    </ul>

                    <p className='title__chip md'>서비스 이용 시</p>
                    <ul className='pol-list'>
                        <li className='pol-list__li'>위시리스트 목록</li>
                        <li className='pol-list__li'>AI 대화 내역</li>
                        <li className='pol-list__li'>접속 로그 및 IP</li>
                    </ul>
                </div>

                <div className='pol-group'>
                    <p className='pol-title'><span>02</span> 개인정보 이용 목적</p>
                    <p className='pol-text mb-[1em]'>
                        수집한 개인정보는 다음의 목적으로만 이용됩니다.
                    </p>
                    <ul className='pol-list'>
                        <li className='pol-list__li'>회원 가입, 본인 확인 및 계정 관리</li>
                        <li className='pol-list__li'>AI 기반 개인화 영화 추천 및 큐레이션 서비스 제공</li>
                        <li className='pol-list__li'>서비스 품질 개선 및 신규 기능 개발</li>
                        <li className='pol-list__li'>이용 통계 분석 및 서비스 안정성 확보</li>
                        <li className='pol-list__li'>법령 준수 및 분쟁 해결</li>
                    </ul>
                </div>

                <div className='pol-group'>
                    <p className='pol-title'><span>03</span> 제3자 제공</p>
                    <p className='pol-text mb-[1em]'>
                        CineAI는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 단, 다음의 경우는 예외로 합니다.
                    </p>
                    <ul className='pol-list'>
                        <li className='pol-list__li'>이용자가 사전에 동의한 경우</li>
                        <li className='pol-list__li'>법령에 의거하거나 수사 기관의 적법한 요청이 있는 경우</li>
                        <li className='pol-list__li'>통계 작성, 학술 연구 등을 위해 특정 개인을 식별할 수 없는 형태로 제공하는 경우</li>
                    </ul>
                </div>

                <div className='pol-group'>
                    <p className='pol-title'><span>04</span> 처리 위탁</p>
                    <p className='pol-text mb-[1em]'>
                        서비스 운영을 위해 다음 업체에 개인정보 처리를 위탁하고 있습니다.
                    </p>
                    <ul className='pol-list'>
                        <li className='pol-list__li'>Supabase — 서버 인프라 및 데이터 저장</li>
                        <li className='pol-list__li'>Google Gemini API — AI 추천 기능 연산 처리</li>
                        <li className='pol-list__li'>Vercel — 웹 서비스 배포 및 운영</li>
                        <li className='pol-list__li'>TMDB (The Movie Database) — 영화 메타데이터 제공</li>
                    </ul>
                </div>

                <div className='pol-group'>
                    <p className='pol-title'><span>05</span> 이용자 권리</p>
                    <p className='pol-text mb-[1em]'>
                        이용자는 언제든지 다음 권리를 행사할 수 있습니다.
                    </p>
                    <ul className='pol-list'>
                        <li className='pol-list__li'>개인정보 열람, 수정, 삭제 요청</li>
                        <li className='pol-list__li'>개인정보 처리 정지 요청</li>
                        <li className='pol-list__li'>개인정보 이동권 행사 (데이터 다운로드)</li>
                        <li className='pol-list__li'>동의 철회 및 회원 탈퇴</li>
                    </ul>
                    <div className='pol-ex'>
                        권리 행사는 마이페이지 설정 또는 privacy@cineai.kr로 요청하실 수 있으며, 접수 후 10영업일 이내에 처리됩니다.
                    </div>
                </div>

                <div className='pol-group'>
                    <p className='pol-title'><span>06</span> 개인정보 보호책임자</p>
                    <p className='pol-text mb-[1em]'>
                        개인정보 처리와 관련한 불만 처리 및 피해 구제를 위해 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                    </p>
                    <div className='pol-ex'>
                        이름: 홍길동 &nbsp;·&nbsp; 직책: 개인정보 보호 담당자 <br />
                        이메일: privacy@cineai.kr <br />
                        운영 시간: 평일 10:00 – 18:00
                    </div>
                    <p className='pol-text mt-[.75em]'>
                        기타 개인정보 침해 신고는 개인정보보호위원회(privacy.go.kr) 또는 한국인터넷진흥원(KISA)에 문의하실 수 있습니다.
                    </p>
                </div>

            </nav>
        </section>
    );
};

export default PrivacyPage;