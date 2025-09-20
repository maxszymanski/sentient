'use client'

import SectionBg from '@/assets/security-bg.webp'
import Logo from '../_icons/Logo'
import StarsIcon from '../_icons/StarsIcon'
import ControlIcon from '../_icons/ControlIcon'
import EyeIcon from '../_icons/EyeIcon'
import LockIcon from '../_icons/LockIcon'
import Image from 'next/image'
import Shield from '@/assets/security-shield.png'
import Data from '@/assets/data-img.png'
import Connect from '@/assets/connect.png'
import Operiations from '@/assets/operations.png'
import { ReactNode, useState } from 'react'

const btns = [
    { name: 'Local Intelligence', icon: <StarsIcon /> },
    { name: 'Granular Control', icon: <ControlIcon /> },
    { name: 'Transparent Operations', icon: <EyeIcon /> },
    { name: 'Encrypted Everything', icon: <LockIcon /> },
]

const slides = [
    {
        title: 'Your Data lives with you',
        content:
            'Sentient runs entirely on your device by default. Your conversations, documents, and patterns never leave your computer unless you explicitly choose sync options. Local intelligence means no cloud dependency, no data mining, no surveillance.',
        image: Data,
        size: {
            width: 660,
            height: 262,
        },
    },
    {
        title: 'You decide what it knows',
        content:
            'Connect only the data sources you trust. Set retention periods for different types of information. Review and delete anything from your memory graph. Sentient remembers only what you allow, for as long as you choose.',
        image: Connect,
        size: {
            width: 524,
            height: 262,
        },
    },
    {
        title: 'See exactly how it thinks',
        content:
            'Every suggestion comes with clear reasoning. Every connection shows its source. You can always understand why Sentient recommended something, what information it used, and how it made the connection. ',
        image: Operiations,
        size: {
            width: 524,
            height: 262,
        },
    },
    {
        title: 'Security at every layer',
        content:
            "When you do choose cloud features, everything is encrypted end-to-end. Your local data is protected with device-level security. Even we can't see your information—that's not a promise, it's architecture.",
        image: Shield,
        size: {
            width: 398,
            height: 262,
        },
    },
]

function SecuritySection() {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <section className="relative z-50 pl-2 pt-32 md:pt-40 lg:pt-52 xl:pl-0">
            <h2 className="heading-gradient-text leading-14 font-twk mx-auto mb-[60px] w-full text-center text-[44px] tracking-[-0.5px]">
                Trust through transparency, <br /> privacy through design
            </h2>
            <div
                className="relative z-50 mx-auto flex h-[781px] w-full max-w-[1200px] flex-col bg-cover bg-left bg-no-repeat py-6 md:flex-row md:py-0 xl:bg-center"
                style={{ backgroundImage: `url(${SectionBg.src})` }}
            >
                <div className="relative flex w-full cursor-default flex-col pb-8 md:max-w-[273px]">
                    <div className="border-white/12 flex w-full border-b px-5 pb-7 md:pt-6 lg:px-9">
                        <Logo />
                    </div>
                    <div className="flex flex-col gap-3 px-4 py-7 lg:px-5">
                        {btns.map((btn, idx) => (
                            <Button
                                key={btn.name}
                                name={btn.name}
                                isActive={activeIndex === idx}
                                onClick={() => setActiveIndex(idx)}
                            >
                                {btn.icon}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="line-security hidden h-[90%] w-px min-w-px md:block"></div>
                <div className="relative z-[60] w-full px-4 md:pt-6 lg:px-6">
                    <div className="security-box relative flex flex-col items-center rounded-xl md:h-[95%]">
                        <div className="flex flex-col items-center">
                            <div className="flex h-[200px] flex-col items-center sm:h-[262px]">
                                {slides.map((slide, idx) => (
                                    <Image
                                        alt={`security image number ${idx + 1}`}
                                        src={slide.image}
                                        quality={100}
                                        width={slide.size.width}
                                        height={slide.size.height}
                                        key={slide.title + idx}
                                        className={`block transition-all duration-1000 ${activeIndex === idx ? 'relative opacity-100 delay-300' : 'absolute opacity-0'}`}
                                    />
                                ))}
                            </div>

                            <div className="relative px-2 pb-8 lg:px-0 lg:pb-0">
                                {slides.map((slide, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-full text-center transition-all duration-1000 ${activeIndex === idx ? 'relative scale-100 opacity-100 delay-300' : 'absolute left-0 top-0 scale-0 opacity-0'}`}
                                    >
                                        <h3 className="heading-gradient-text leading-11 font-twk mb-6 text-3xl tracking-[-0.5px] sm:text-[32px]">
                                            {slide.title}
                                        </h3>
                                        <p className="relative z-[70] mx-auto w-full max-w-[610px] leading-[25px] text-[#F1F7FEB5]">
                                            {slide.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 z-[80] hidden h-[350px] w-full bg-[#010513] blur-[50px] md:block"></div>
            </div>
        </section>
    )
}

function Button({
    children,
    name,
    isActive,
    onClick,
}: {
    children: ReactNode
    name: string
    isActive: boolean
    onClick: () => void
}) {
    return (
        <button
            className={`inline-flex w-[233px] cursor-pointer items-center gap-2.5 rounded-[60px] py-2 pl-[13px] tracking-[-2%] transition-colors duration-300 ${isActive ? 'security-button text-white' : 'hover:text-white/72 text-white/50'}`}
            onClick={onClick}
        >
            {' '}
            {children} <span>{name}</span>
        </button>
    )
}

export default SecuritySection
