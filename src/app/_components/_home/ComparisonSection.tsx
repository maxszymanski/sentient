'use client'

import { useState } from 'react'
import ButtonBg from '@/assets/button-bg.png'
import Image from 'next/image'

const btns = [
    'Sentient Vs Chatbot',
    'Sentient Vs Note-Taking Apps',
    'Sentient Vs AI Assistants',
]

function ComparisonSection() {
    const [selectedBtn, setSelectedBtn] = useState(0)
    return (
        <section className="pt-20 lg:pt-40">
            <div className="mx-auto w-full max-w-[725px]">
                <h2 className="heading-gradient-text leading-14 font-twk mx-auto mb-[60px] w-full px-4 text-center text-[44px] tracking-[-0.5px] lg:px-0">
                    Beyond chatbots <br /> and productivity apps
                </h2>
                <div className="flex items-center gap-8 overflow-x-auto px-4 lg:px-0">
                    {btns.map((name, index) => (
                        <button
                            key={name}
                            className={`font-twk btn-linear relative z-20 block h-[100px] cursor-pointer text-center text-lg leading-5 transition-colors duration-300 hover:text-white ${selectedBtn === index ? 'text-white' : 'text-white72'} blur-[7px]`}
                        >
                            <span className="block">{name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ComparisonSection
