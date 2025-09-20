'use client'
import SectionBg from '@/assets/section-desktop-hero.png'
import SectionEllipse from '@/assets/ellipse.webp'
import { useState } from 'react'

const btns = [
    'Daily Brief That Actually Matters',
    'Proactive Reminders',
    ' Instant Context Recall',
    'Ambient Awareness',
]

const slides = [
    {
        title: 'Start every day with perfect context',
        content:
            "Not just another calendar widget. Sentient shows you what's actually important: the prep needed for today's meetings, commitments you made that are due, and the 2-3 things that deserve your focus. It's the difference between checking 12 apps and knowing what matters.",
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat explicabo, quos voluptatem repudiandae nam animi illo magni sint dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat explicabo, quos voluptatem repudiandae nam',
    },
    {
        title: 'Lorem ipsum dolor sit amet.',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat explicabo, quos voluptatem repudiandae nam animi illo magni sint dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat explicabo, quos voluptatem repudiandae nam animi illo magni sint dolorem? Lorem ipsum dolor sit amet consectetur',
    },
]

function InteligenceSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <section className="relative z-0 pt-16 lg:pt-40">
            <div
                className="absolute -top-60 left-0 z-10 h-[1200px] w-[1700px] max-w-full bg-contain bg-no-repeat 2xl:-top-96 2xl:h-[1500px] 2xl:w-[2000px]"
                style={{ backgroundImage: `url(${SectionEllipse.src})` }}
            ></div>
            <h2 className="heading-gradient-text leading-14 font-twk mx-auto mb-[60px] w-full text-center text-[44px] tracking-[-0.5px]">
                Intelligence that <br /> spans everything you do
            </h2>
            <div
                className="mx-auto h-[781px] w-full max-w-[1200px] bg-cover bg-right md:bg-center"
                style={{ backgroundImage: `url(${SectionBg.src})` }}
            >
                <div className="relative z-20 flex h-full w-full flex-col items-center justify-end overflow-x-hidden lg:justify-start lg:pt-[436px]">
                    <div className="relative">
                        {slides.map((slide, idx) => (
                            <div
                                key={idx}
                                className={`transition-all duration-1000 ${activeIndex === idx ? 'relative scale-100 opacity-100 delay-300' : 'absolute left-0 top-0 scale-0 opacity-0'}`}
                            >
                                <h3 className="text-heading-gradient font-t leading-11 mb-5 px-4 text-center text-[32px] tracking-[-0.5px]">
                                    {slide.title}
                                </h3>
                                <p className="text-white72 mb-4 max-w-[774px] px-4 text-center leading-[25px]">
                                    {slide.content}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mb-[60px] flex w-full max-w-[352px] items-center justify-center gap-2 px-2 md:mb-[92px]">
                        {btns.map((btn, idx) => (
                            <div
                                key={btn + idx}
                                className="relative z-10 h-1 w-full rounded-[31px] bg-[#62E9FF29] sm:w-[82px]"
                            >
                                <div
                                    className={`line-gradient absolute left-0 top-0 z-20 h-full rounded-[31px] transition-[width] duration-500 ${activeIndex == idx ? 'delay-400 w-[73%] sm:w-[60px]' : 'w-0'}`}
                                ></div>
                            </div>
                        ))}
                    </div>
                    <div className="long-line mb-[24px] h-px w-full rounded-2xl"></div>
                    <div className="flex w-full items-center gap-6 overflow-x-auto px-2 pb-3 md:justify-center lg:gap-10 lg:pb-0">
                        {btns.map((btn, idx) => (
                            <InteligenceButton
                                key={btn}
                                name={btn}
                                isActive={activeIndex === idx}
                                onClick={() => setActiveIndex(idx)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function InteligenceButton({
    name,
    isActive,
    onClick,
}: {
    name: string
    isActive: boolean
    onClick: () => void
}) {
    return (
        <button
            className={`hover:text-white72 shrink-0 cursor-pointer text-nowrap p-2 leading-[25px] transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/40'}`}
            onClick={onClick}
        >
            {name}
        </button>
    )
}

export default InteligenceSection
