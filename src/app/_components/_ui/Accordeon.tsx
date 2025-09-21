import Image from 'next/image'
import { FaMinus } from 'react-icons/fa'
import Bg from '@/assets/btn-ellipse.png'

interface AccorderonProps {
    onClick: () => void
    isOpen: boolean
    title: string
    answer: string
}

function Accordeon({ onClick, isOpen, title, answer }: AccorderonProps) {
    return (
        <div
            className={`${isOpen ? 'faq-border faq-active-bg relative bg-transparent' : 'border-white/12 border bg-[#01030CBF]'} faq-shadow group relative flex shrink-0 flex-col overflow-hidden rounded-2xl p-1.5`}
        >
            {isOpen && <Image fill alt="" src={Bg} className="object-cover" />}
            <h3 className="w-full">
                <button
                    className={`border-white/12 flex w-full items-center justify-between gap-1 rounded-[10px] border px-3 py-[18px] text-left transition-colors duration-300 sm:gap-6 md:px-5 ${isOpen ? 'cursor-auto bg-[rgba(255,255,255,0.08)]' : 'cursor-pointer bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)]'}`}
                    onClick={onClick}
                >
                    <span className="font-twk heading-gradient-text text-base sm:text-lg sm:leading-5">
                        {title}
                    </span>
                    <span className="relative">
                        <FaMinus className="size-[17px] text-white/60" />

                        <FaMinus
                            className={`absolute left-0 top-1/2 size-[17px] -translate-y-1/2 text-white/60 ${isOpen ? 'rotate-0' : 'rotate-90'} transition-transform duration-300`}
                        />
                    </span>
                </button>
            </h3>

            <p
                className={`px-3 text-sm leading-6 text-[#F1F7FEB5] sm:text-base sm:leading-[25px] ${isOpen ? 'visible max-h-[500px] pb-3 pt-4' : 'delay-50 invisible max-h-0'} select-none transition-all duration-300`}
            >
                {answer}
            </p>
        </div>
    )
}

export default Accordeon
