'use client'

import Image from 'next/image'
import LogoIcon from '@/assets/logo.png'
import Link from 'next/link'

function LogoLink() {
    const handleClick = () => {
        if (typeof window !== 'undefined') {
            const fullpage = (
                window as Window & {
                    fullpage_api?: {
                        moveTo: (section: number, slide?: number) => void
                    }
                }
            ).fullpage_api
            fullpage?.moveTo(1)
        }
    }

    return (
        <Link
            href="/"
            onClick={handleClick}
            className="my-outline cursor-pointer"
        >
            <Image
                src={LogoIcon}
                width={109}
                height={25}
                alt="company logo"
                quality={100}
            />
        </Link>
    )
}

export default LogoLink
