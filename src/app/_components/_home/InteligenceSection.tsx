import SectionBg from '@/assets/section-desktop-hero.png'
import SectionEllipse from '@/assets/ellipse.webp'
function InteligenceSection() {
    return (
        <section className="relative z-0">
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
                <div className="flex h-full w-full flex-col items-center justify-end overflow-x-hidden lg:justify-start lg:pt-[436px]">
                    <h3 className="text-heading-gradient font-t leading-11 mb-5 px-4 text-center text-[32px] tracking-[-0.5px]">
                        Start every day with perfect context
                    </h3>
                    <p className="text-white72 mb-4 max-w-[774px] px-4 text-center leading-[25px]">
                        Not just another calendar widget. Sentient shows you
                        what&apos;s actually important: the prep needed for
                        today&apos;s meetings, commitments you made that are
                        due, and the 2-3 things that deserve your focus.
                        It&apos;s the difference between checking 12 apps and
                        knowing what matters.
                    </p>
                    <div className="mb-[60px] flex w-full max-w-[352px] items-center justify-center gap-2 px-2 md:mb-[92px]">
                        <div className="relative z-10 h-1 w-full rounded-[31px] bg-[#62E9FF29] sm:w-[82px]">
                            <div className="line-gradient absolute left-0 top-0 z-20 h-full w-[73%] rounded-[31px] sm:w-[60px]"></div>
                        </div>
                        <div className="h-1 w-full rounded-[31px] bg-[#62E9FF29] sm:w-[82px]"></div>
                        <div className="h-1 w-full rounded-[31px] bg-[#62E9FF29] sm:w-[82px]"></div>
                        <div className="h-1 w-full rounded-[31px] bg-[#62E9FF29] sm:w-[82px]"></div>
                    </div>
                    <div className="long-line mb-[36px] h-px w-full rounded-2xl"></div>
                    <div className="flex w-full items-center gap-6 overflow-x-auto px-4 pb-6 md:justify-center md:gap-10 lg:pb-0">
                        <p className="shrink-0 text-nowrap leading-[25px] text-white">
                            Daily Brief That Actually Matters
                        </p>
                        <p className="shrink-0 text-nowrap leading-[25px] text-white/40">
                            Proactive Reminders
                        </p>
                        <p className="shrink-0 text-nowrap leading-[25px] text-white/40">
                            Instant Context Recall
                        </p>
                        <p className="shrink-0 text-nowrap leading-[25px] text-white/40">
                            Ambient Awareness
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InteligenceSection
