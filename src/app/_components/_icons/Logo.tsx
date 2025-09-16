import Image from 'next/image'
import Link from 'next/link'
import LogoIcon from '@/assets/logo.png'

function Logo() {
    return (
        <Link href="/" className="my-outline">
            <Image src={LogoIcon} width={109} height={25} alt="company logo" />
        </Link>
    )
}

export default Logo
