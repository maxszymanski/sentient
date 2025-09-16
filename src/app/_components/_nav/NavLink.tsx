import Link from 'next/link'

import { TbChevronDown } from 'react-icons/tb'

function NavLink({
    href,
    name,
    square,
}: {
    href: string
    name: string
    square: boolean
}) {
    return (
        <li className="md:flex md:items-center">
            <Link
                className="my-outline text-mygray flex items-center gap-1 text-nowrap p-1 text-base transition-colors duration-300 hover:text-white md:px-0 lg:text-sm lg:leading-5"
                href={href}
            >
                {name}
                {name === 'Features' && <TbChevronDown />}
            </Link>
            {square && (
                <span className="ml-3 hidden size-0.5 rounded-full bg-white md:block"></span>
            )}
        </li>
    )
}

export default NavLink
