import NavLink from './NavLink'

const list = [
    { name: 'About Us', href: '/' },
    { name: 'Features', href: '/' },
    { name: 'How it works', href: '/' },
    { name: 'Security', href: '/' },
]

function NavList() {
    return (
        <ul className={`flex flex-col gap-5 md:flex-row md:gap-3`}>
            {list.map((l, index) => (
                <NavLink key={l.name} {...l} square={index != 3} />
            ))}
        </ul>
    )
}

export default NavList
