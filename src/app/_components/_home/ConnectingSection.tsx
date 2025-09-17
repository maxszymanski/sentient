import Image from 'next/image'
import Meter from '@/assets/meter.png'
import ConnectBg from '@/assets/connect-bg.png'

function ConnectingSection() {
    return (
        <section className="relative z-30 mt-16 sm:mt-0 md:-mt-[200px]">
            <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center">
                <div className="relative mx-auto h-[250px] w-full max-w-[767px] sm:h-[398px]">
                    <Image
                        alt="meter"
                        src={Meter}
                        fill
                        className="object-contain"
                        quality={100}
                    />
                </div>
                <p
                    className="mb-[14px] flex h-[45px] w-[214px] items-center justify-center bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${ConnectBg.src})` }}
                >
                    <span className="heading-gradient-text font-twk text-lg">
                        For Product Designers
                    </span>
                </p>
                <div className="max-w-[940px] px-4 text-center lg:px-0">
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
