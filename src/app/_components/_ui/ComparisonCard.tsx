import Image from 'next/image'
import Globe from '@/assets/small-globe.svg'

function ComparisonCard({
    lines = 3,
    linesColor = 'green',
    name,
    list,
    isActive,
}: {
    lines?: number
    linesColor?: 'green' | 'red'
    name: string
    list: string[]
    isActive: boolean
}) {
    return (
        <div
            className={`flex max-w-[296px] flex-col transition-all duration-1000 ${isActive ? 'relative scale-100 opacity-100 delay-300' : 'absolute top-0 scale-0 opacity-0'}`}
        >
            <div className="mb-7 flex items-center gap-3">
                <div className="flex items-center gap-2">
                    {' '}
                    <Image
                        src={Globe}
                        width={25}
                        height={25}
                        alt="company logo"
                        priority
                        loading="eager"
                    />
                    <p className="text-xl leading-[26px] text-white">{name}</p>
                </div>

                <div className="flex items-center gap-2.5">
                    {[...Array(lines)].map((_, index) => (
                        <div
                            key={index}
                            className={`glow-bar relative h-[3px] w-6 rounded-sm ${linesColor === 'green' ? 'bg-[#33DE64]' : 'bg-[#FF5E5E]'} `}
                        ></div>
                    ))}
                    {name != 'Sentient' && (
                        <div
                            className={`bg-white/16 relative h-[3px] w-6 rounded-sm`}
                        ></div>
                    )}
                </div>
            </div>
            <div
                className={`flex flex-col gap-5 leading-[25px] ${name === 'Sentient' ? 'text-[#EBF8FF]' : 'text-[#F1F7FE80]'}`}
            >
                {list.map((item) => (
                    <p key={item}>{item}</p>
                ))}
            </div>
        </div>
    )
}

export default ComparisonCard
