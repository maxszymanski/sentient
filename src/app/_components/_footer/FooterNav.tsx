import Logo from '../_icons/Logo'
import FooterLink from './FooterLink'

const footerLinks = [
    {
        title: 'Quick Links',
        links: [
            { name: 'How it Works', href: '/' },
            { name: 'Features', href: '/' },
            { name: 'Trust & Privacy', href: '/' },
            { name: 'Use Cases', href: '/' },
        ],
    },
    {
        title: 'Company',
        links: [
            { name: 'About Sentient', href: '/' },
            { name: 'Team', href: '/' },
            { name: 'Careers', href: '/' },
            { name: 'Contact', href: '/' },
        ],
    },
    {
        title: 'Product',
        links: [
            { name: 'How It Works', href: '/' },
            { name: 'Privacy Policy', href: '/' },
            { name: 'Terms of Service ', href: '/' },
            { name: 'System Requirements', href: '/' },
        ],
    },
    {
        title: 'Community',
        links: [
            { name: 'Twitter', href: '/' },
            { name: 'Blog', href: '/' },
            { name: 'Newsletter', href: '/' },
            { name: 'Early Access', href: '/' },
        ],
    },
]

function FooterNav() {
    return (
        <div className="border-white/12 flex flex-col gap-12 border-b pb-12 pt-12 md:flex-row md:items-start md:justify-between md:gap-6 xl:pb-[61px]">
            <Logo />
            <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap lg:gap-20 xl:gap-[100px]">
                {footerLinks.map((section) => (
                    <div key={section.title}>
                        <h3 className="mb-6 text-base leading-5 text-white">
                            {section.title}
                        </h3>
                        <ul className="flex flex-col">
                            {section.links.map((link) => (
                                <FooterLink
                                    key={link.name}
                                    href={link.href}
                                    name={link.name}
                                />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FooterNav
