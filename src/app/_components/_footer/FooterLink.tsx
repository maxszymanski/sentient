import Link from 'next/link'

function FooterLink({ href, name }: { href: string; name: string }) {
    return (
        <li>
            <Link
                href={href}
                className="text-white72 my-outline text-sm leading-8 transition-colors duration-300 hover:text-white"
            >
                {name}
            </Link>
        </li>
    )
}

export default FooterLink
