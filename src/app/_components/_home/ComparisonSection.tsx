'use client'

import { useState } from 'react'
import ChatBg from '@/assets/bg-chat.png'
import ComparisonCard from '../_ui/ComparisonCard'
import Link from 'next/link'

const btns = [
    'Sentient Vs Chatbot',
    'Sentient Vs Note-Taking Apps',
    'Sentient Vs AI Assistants',
]

const sentientList = [
    ' Proactively offers insights before you realize you need them',
    'Builds context automatically from your behavior',
    'Maintains continuous memory across all interactions',
]
const chatbotList = [
    'Wait for you to ask questions',
    'Need constant prompting and context',
    'Forget previous conversations',
]

function ComparisonSection() {
    const [selectedBtn, setSelectedBtn] = useState(0)
    return (
        <section className="pt-20 lg:pt-40">
            <div className="mx-auto w-full max-w-[725px]">
                <h2 className="heading-gradient-text leading-14 font-twk mx-auto mb-[60px] w-full px-4 text-center text-[44px] tracking-[-0.5px] lg:px-0">
                    Beyond chatbots <br /> and productivity apps
                </h2>
                <div className="border-white/16 flex w-full items-center gap-8 overflow-x-auto border-b px-4 lg:px-0">
                    {btns.map((name, index) => (
                        <button
                            key={name}
                            className={`font-twk relative z-20 block shrink-0 cursor-pointer text-nowrap border-b pb-[26px] pt-[53px] text-center text-lg leading-5 transition-colors duration-300 hover:text-white ${selectedBtn === index ? 'border-blue-600 bg-blue-400 text-white' : 'text-white72 border-transparent'} `}
                            onClick={() => setSelectedBtn(index)}
                        >
                            <span className="block">{name}</span>
                        </button>
                    ))}
                </div>
                <div
                    className="flex min-h-[530px] w-full flex-col bg-cover bg-center px-4 pt-[52px] md:px-0"
                    style={{ backgroundImage: `url(${ChatBg.src})` }}
                >
                    <div className="flex w-full flex-col items-center justify-between gap-10 sm:flex-row sm:items-start">
                        <ComparisonCard
                            lines={3}
                            name="Sentient"
                            list={sentientList}
                        />
                        {selectedBtn === 0 && (
                            <ComparisonCard
                                lines={1}
                                linesColor="red"
                                name="Chatbot"
                                list={chatbotList}
                            />
                        )}
                        {selectedBtn === 1 && (
                            <ComparisonCard
                                lines={1}
                                linesColor="red"
                                name="Note-Taking Apps"
                                list={chatbotList}
                            />
                        )}
                        {selectedBtn === 2 && (
                            <ComparisonCard
                                lines={1}
                                linesColor="red"
                                name="AI Assistants"
                                list={chatbotList}
                            />
                        )}
                    </div>
                    <Link
                        href="/"
                        className="header-link text-dark my-outline hover: hover:text-dark/80 mt-20 flex h-[39px] w-[169px] items-center justify-center self-center rounded-[59px] border-[0.5px] border-white/50 transition-colors duration-300"
                    >
                        Request a Demo
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ComparisonSection
