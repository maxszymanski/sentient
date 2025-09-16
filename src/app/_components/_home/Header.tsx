import Hero from '@/assets/Hero.webp'
import Link from 'next/link'

function Header() {
    return (
        <header
            className="flex h-[883px] min-h-screen items-end justify-center bg-cover bg-center lg:pb-[104px]"
            style={{ backgroundImage: `url(${Hero.src})` }}
        >
            <div className="mx-auto flex w-full max-w-[675px] flex-col items-center px-4 text-center md:px-0">
                <h1 className="gradient-text font-twk text-5xl leading-[56px] tracking-[-2px] md:text-[56px]">
                    Meet Sentient <br /> Your Personal AI Companion
                </h1>
                <p className="font-britti text-white72 mx-auto mb-10 mt-6 w-full max-w-[552px] text-sm tracking-[-2%] sm:leading-6 md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad{' '}
                </p>
                <Link
                    href="/"
                    className="header-link text-dark my-outline hover: hover:text-dark/80 flex h-[39px] w-[169px] items-center justify-center rounded-[59px] border-[0.5px] border-white/50 transition-colors duration-300"
                >
                    Request a Demo
                </Link>
            </div>
        </header>
    )
}

export default Header
