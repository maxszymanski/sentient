import Globe from '@/assets/faq-globe.png'
import Image from 'next/image'
import Link from 'next/link'
import Email from '@/assets/email-icon.svg'
import X from '@/assets/x-icon.svg'

function FaqSection() {
    return (
        <section className="relative mx-auto w-full max-w-[1200px]">
            <Image
                src={Globe}
                height={619}
                width={1440}
                alt="globe"
                className="absolute left-0 top-10 hidden h-auto w-full md:-top-10 lg:block"
            />
            <div className="relative z-20 w-full px-4 pt-20 sm:pt-0 lg:pt-[280px] xl:px-0">
                <div className="mx-auto w-full max-w-[352px]">
                    <h2 className="heading-gradient-text leading-14 font-twk mx-auto mb-6 w-full text-[44px] tracking-[-0.5px] lg:px-0">
                        Questions about <br /> your second brain
                    </h2>
                    <p className="text-white/71 leading-[25px]">
                        Still have questions? No worries, Feel free to contact
                        us
                    </p>
                    <div className="mt-7 flex items-center gap-3">
                        <Link
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="my-outline"
                        >
                            <Image
                                src={Email}
                                alt="email icon"
                                height={43}
                                width={43}
                            />
                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="my-outline"
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
            </div>
        </section>
    )
}

export default FaqSection
