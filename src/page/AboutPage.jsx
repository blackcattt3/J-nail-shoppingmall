import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className='about-wrapper'>
        <div className='about-container'>
            <h1>About us</h1>
            <section className='about-section'>
                <h5>🌷 J.nail | About Our Brand</h5>
                <p>“Beauty is not defined. It’s expressed.”</p>
                <p>
                    <span>J.nail은 단순히 손끝을 장식하는 브랜드가 아닙니다.</span>
                    <span>우리는 네일을 하나의 예술이자, 자신을 표현하는 언어라고 믿습니다.</span>
                </p>
                <p>
                    <span>각자의 개성, 감정, 그리고 그날의 무드까지 —</span>
                    <span>J.nail은 그 모든 순간을 손끝의 색으로 담아내는 브랜드입니다.</span>
                </p>
                <p>
                    <span>절대적인 미(美)는 존재하지 않습니다.</span>
                    <span>그 대신 우리는 ‘자신만의 미(美)’를 찾는 여정에 함께합니다.</span>
                </p>
                <p>
                    <span>누구나 자신만의 스타일로 빛날 자격이 있으며,</span>
                    <span>그 확신을 디자인과 컬러로 표현하는 것이 우리의 철학입니다.</span>
                </p>
            </section>
            <section className='about-section'>
                <h5>🌍 Vision</h5>
                <p>“To paint the world, one nail at a time.”</p>
                <p>
                    <span>우리는 J.nail의 감각적인 디자인과 철학을</span>
                    <span>한국을 넘어 전 세계로 확장해 나갈 것입니다.</span>
                    <span>하나의 네일이 하나의 예술이 되고,</span>
                    <span> 그 예술이 전 세계 여성들의 자신감을 만들어가는 브랜드로 성장하겠습니다.</span>
                </p>
            </section>
            <section className='about-section'>
                <h5>💎 Our Promise</h5>
                <p>
                    <span>Originality — 트렌드를 따르지 않고, 감각을 제안합니다.</span>
                    <span>Sincerity — 제품 하나하나에 진심을 담습니다.</span>
                    <span>Empowerment — 모든 이가 자기만의 스타일을 자신 있게 표현할 수 있도록 돕습니다.</span>
                </p>
            </section>
            <section>
                <p>“J.nail is not just a brand.</p>
                <p>It’s a statement of individuality.”</p>
            </section>
        </div>
    </div>
  );
};

export default AboutPage;