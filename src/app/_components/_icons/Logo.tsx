import Image from 'next/image'
import LogoIcon from '@/assets/logo.png'

function Logo() {
    return <Image src={LogoIcon} width={109} height={25} alt="company logo" />
}

export default Logo
