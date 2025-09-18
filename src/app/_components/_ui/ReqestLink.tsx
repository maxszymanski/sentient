import Image from 'next/image'
import Link from 'next/link'
import Circle from '@/assets/request-circle.png'

function ReqestLink() {
    return (
        <Link
            href="/"
            className="request-bg text-mygray reques-link-shadow my-outline rlative relative flex h-[39px] w-[160px] items-center justify-end overflow-hidden text-nowrap pr-4 text-base tracking-[-2%] transition-colors duration-300 hover:text-white md:z-20"
        >
            <Image
                src={Circle}
                alt=""
                width={70}
                height={39}
                className="absolute left-0"
            />
            <span className="">Request Demo</span>
        </Link>
    )
}

export default ReqestLink
