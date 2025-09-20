import Image from 'next/image'
import Link from 'next/link'
import LinkBg from '@/assets/link-bg.png'
import Email from '@/assets/link-email.svg'
import X from '@/assets/link-x.svg'
import FaqBg from '@/assets/faq-bg.png'
import FaqQuestions from '../_ui/FaqQuestions'

function FaqSection() {
    return (
        <section
            className="w-full bg-top bg-no-repeat sm:mt-0 md:pt-1"
            style={{ backgroundImage: `url(${FaqBg.src})` }}
        >
            <div className="relative z-50 mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 pt-[400px] lg:flex-row xl:px-[120px]">
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
                            className="my-outline border-white/12 relative flex h-[43px] w-[43px] items-center justify-center focus-visible:!rounded-[10px]"
                        >
                            <Image
                                src={LinkBg}
                                alt=""
                                fill
                                quality={100}
                                className="object-cover"
                            />
                            <Image
                                src={Email}
                                alt="email icon"
                                width={20}
                                height={16}
                                quality={100}
                            />
                        </Link>
                        <Link
                            href="https://x.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="my-outline relative flex h-[43px] w-[43px] items-center justify-center focus-visible:!rounded-[10px]"
                        >
                            <Image src={LinkBg} alt="" fill quality={100} />
                            <Image
                                src={X}
                                alt="X icon"
                                height={22}
                                width={24}
                                quality={100}
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
