import Link from 'next/link'

function ReqestLink() {
    return (
        <Link
            href="/"
            className="request-bg text-mygray reques-link-shadow my-outline relative flex h-[39px] w-[160px] items-center justify-center text-nowrap text-base tracking-[-2%] transition-colors duration-300 hover:text-white md:z-20"
        >
            <span className="request-shadow mr-3 size-2 shrink-0 rounded-full bg-white"></span>{' '}
            <span>Request Demo</span>
        </Link>
    )
}

export default ReqestLink
