import Image from 'next/image'
import Link from 'next/link'
import Email from '@/assets/email-icon.png'
import X from '@/assets/x-icon.png'
import FaqBg from '@/assets/faq-bg.png'
import FaqQuestions from '../_ui/FaqQuestions'

function FaqSection() {
    return (
        <section
            className="bg-dark relative mx-auto w-full max-w-[1440px] bg-top bg-no-repeat sm:mt-0 md:pt-1 xl:px-[120px]"
            style={{ backgroundImage: `url(${FaqBg.src})` }}
        >
            <div className="relative z-20 flex w-full flex-col gap-10 px-4 pt-[400px] lg:flex-row">
                <div className="mx-auto w-full max-w-[352px]">
                    <h2 className="heading-gradient-text sm:leading-14 font-twk mx-auto mb-6 w-full text-4xl tracking-[-0.5px] sm:text-[44px] lg:px-0">
                        Questions about <br /> your second brain
                    </h2>
                    <p className="text-white/71 leading-[25px]">
                        Still have questions? No worries, Feel free to contact
                        us
                    </p>
                    <div className="mt-7 flex items-center gap-3">
                        <Link
                            href="mailto:hello@sentient.com"
                            className="my-outline focus-visible:!rounded-[10px]"
                        >
                            <Image
                                src={Email}
                                alt="email icon"
                                height={43}
                                width={43}
                            />
                        </Link>
                        <Link
                            href="https://x.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="my-outline focus-visible:!rounded-[10px]"
                        >
                            <Image
                                src={X}
                                alt="X icon"
                                height={43}
                                width={43}
                            />
                        </Link>
                    </div>
                </div>
                <FaqQuestions />
            </div>
        </section>
    )
}

export default FaqSection
