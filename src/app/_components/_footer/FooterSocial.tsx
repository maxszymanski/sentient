import Link from 'next/link'
import { BsTwitterX } from 'react-icons/bs'
import {
    FaFacebook,
    FaLinkedinIn,
    FaRedditAlien,
    FaYoutube,
} from 'react-icons/fa'

function FooterSocial() {
    return (
        <div className="flex flex-wrap items-center justify-between gap-7 py-7">
            <p className="text-base leading-5 text-white">
                © 2025 Sentient.{' '}
                <span className="text-white72">All Rights Reserved</span>{' '}
            </p>
            <div className="flex flex-wrap items-center justify-evenly gap-10 sm:gap-[41px]">
                <Link
                    href="https://x.com"
                    className="hover:text-white/72 shrink-0 text-white transition-colors duration-300"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <BsTwitterX className="size-5 shrink-0" />
                </Link>
                <Link
                    href="https://linkedin.com"
                    className="hover:text-white/72 shrink-0 text-white transition-colors duration-300"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FaLinkedinIn className="size-5 shrink-0" />
                </Link>
                <Link
                    href="https://reddit.com"
                    className="hover:text-white/72 shrink-0 text-white transition-colors duration-300"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FaRedditAlien className="size-5 shrink-0" />
                </Link>
                <Link
                    href="https://x.com"
                    className="hover:text-white/72 shrink-0 text-white transition-colors duration-300"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FaYoutube className="size-5 shrink-0" />
                </Link>
                <Link
                    href="https://x.com"
                    className="hover:text-white/72 shrink-0 text-white transition-colors duration-300"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FaFacebook className="size-5 shrink-0" />
                </Link>
            </div>
        </div>
    )
}

export default FooterSocial
