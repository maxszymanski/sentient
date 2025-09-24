import RiveAnimation from './RiveAnimation'

function ConnectingSection() {
    return (
        <section className="xs:-mt-16 relative z-[49] sm:mt-0 md:z-[61] md:-mt-[250px] lg:-mt-[200px]">
            <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center">
                <RiveAnimation />

                <div className="relative z-10 mt-[400px] max-w-[940px] px-4 text-center lg:px-0">
                    <h3 className="heading-gradient-text font-twk sm:leading-14 mb-5 text-[32px] leading-10 tracking-[-0.5px]">
                        Connecting design feedback across tools
                    </h3>
                    <p className="leading-[25px] text-[#F1F7FE80]">
                        You&apos;re iterating on the checkout flow. Sentient
                        surfaces the accessibility concerns Jake mentioned in
                        last week&apos;s Figma comment, the user testing
                        insights from Sarah&apos;s research doc, and reminds you
                        about the mobile constraints discussed in
                        yesterday&apos;s Slack thread. All without you having to
                        remember or search for any of it.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ConnectingSection
