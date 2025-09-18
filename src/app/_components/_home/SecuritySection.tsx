import SectionBg from '@/assets/security-bg.webp'
import Logo from '../_icons/Logo'
import StarsIcon from '../_icons/StarsIcon'
import ControlIcon from '../_icons/ControlIcon'
import EyeIcon from '../_icons/EyeIcon'
import LockIcon from '../_icons/LockIcon'
import Image from 'next/image'
import Shield from '@/assets/security-shield.png'

function SecuritySection() {
    return (
        <section className="relative z-10 pl-2 pt-40 lg:pt-52 xl:pl-0">
            <h2 className="heading-gradient-text leading-14 font-twk mx-auto mb-[60px] w-full text-center text-[44px] tracking-[-0.5px]">
                Trust through transparency, <br /> privacy through design
            </h2>
            <div
                className="relative z-10 mx-auto flex h-[781px] w-full max-w-[1200px] flex-col bg-cover bg-left bg-no-repeat py-6 md:flex-row md:py-0 xl:bg-center"
                style={{ backgroundImage: `url(${SectionBg.src})` }}
            >
                <div className="relative flex w-full cursor-default flex-col pb-16 md:max-w-[273px]">
                    <div className="border-white/12 flex w-full border-b px-5 pb-7 md:pt-6 lg:px-9">
                        <Logo />
                    </div>
                    <div className="flex flex-col gap-5 px-4 py-7 lg:px-8">
                        <p className="inline-flex gap-2.5 tracking-[-2%] text-white/50 transition-colors duration-300 hover:text-white">
                            {' '}
                            <StarsIcon /> <span>Local Intelligence</span>
                        </p>
                        <p className="inline-flex items-center gap-2.5 tracking-[-2%] text-white/50 transition-colors duration-300 hover:text-white">
                            {' '}
                            <ControlIcon /> <span>Granular Control</span>
                        </p>
                        <p className="inline-flex items-center gap-2.5 tracking-[-2%] text-white/50 transition-colors duration-300 hover:text-white">
                            {' '}
                            <EyeIcon /> <span>Transparent Operations</span>
                        </p>
                    </div>
                    <div className="px-4 lg:pl-5">
                        <p className="security-button hover:text-white/72 inline-flex w-[233px] items-center gap-2.5 rounded-[60px] py-2.5 pl-[13px] tracking-[-2%] text-white transition-colors duration-300">
                            <LockIcon /> <span>Encrypted Everything</span>
                        </p>
                    </div>
                </div>
                <div className="line-security hidden h-[90%] w-px min-w-px md:block"></div>
                <div className="relative z-20 w-full px-4 md:pt-6 lg:px-6">
                    <div className="security-box relative flex flex-col items-center rounded-xl py-9 md:h-[95%]">
                        <Image
                            alt="security shield"
                            src={Shield}
                            quality={100}
                            width={398}
                            height={262}
                        />
                        <div className="relative w-full text-center">
                            <h3 className="heading-gradient-text leading-11 font-twk mb-6 text-3xl tracking-[-0.5px] sm:text-[32px]">
                                Security at every level
                            </h3>
                            <p className="relative z-30 mx-auto w-full max-w-[610px] leading-[25px] text-[#F1F7FEB5]">
                                When you do choose cloud features, everything is
                                encrypted end-to-end. Your local data is
                                protected with device-level security. Even we
                                can&apos;t see your information—that&apos;s not
                                a promise, it&apos;s architecture.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 z-40 hidden h-[300px] w-full bg-[#010513] blur-[50px] md:block"></div>
            </div>
        </section>
    )
}

export default SecuritySection
