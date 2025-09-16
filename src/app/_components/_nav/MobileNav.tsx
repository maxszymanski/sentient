'use client'

import { TbMenu2, TbX } from 'react-icons/tb'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Logo from '../_icons/Logo'
import NavList from './NavList'
import ReqestLink from '../_ui/ReqestLink'

export interface NavProps {
    toogleNav: () => void
    isExpanded: boolean
    closeNav: () => void
}

function MobileNav({ toogleNav, isExpanded, closeNav }: NavProps) {
    const pathname = usePathname()

    useEffect(() => {
        closeNav()
    }, [pathname, closeNav])

    return (
        <div className="relative h-[56px] w-full md:hidden">
            <div className="nav-bg relative z-50 flex items-center justify-between border-b px-4 py-3">
                <Logo />
                <button
                    className="my-outline text-mygray flex size-8 shrink-0 items-center justify-center rounded-full px-1 duration-300"
                    onClick={toogleNav}
                    aria-label={`${isExpanded ? 'Close' : 'Open'} navigation`}
                >
                    {isExpanded ? (
                        <TbX className="pointer-events-none size-8" />
                    ) : (
                        <TbMenu2 className="pointer-events-none size-8" />
                    )}
                </button>
                <div className="nav-small-border absolute bottom-0 left-1/2 h-px w-[230px] -translate-x-1/2"></div>
            </div>

            <div
                className={`text-mygray nav-bg sticky z-40 flex flex-col gap-8 px-4 py-6 transition-transform duration-300 ${isExpanded ? '-translate-y-0' : '-translate-y-[140%]'}`}
            >
                <NavList />
                <ReqestLink />
            </div>
        </div>
    )
}

export default MobileNav
