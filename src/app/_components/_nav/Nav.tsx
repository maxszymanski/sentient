'use client'
import { useCallback, useRef, useState } from 'react'
import useClickOutside from '@/app/_hooks/useClickOutside'
import { createPortal } from 'react-dom'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

function Nav() {
    const navRef = useRef(null)
    const [isExpanded, setIsExpanded] = useState(false)

    const toogleNav = () => {
        setIsExpanded((is) => !is)
    }
    const closeNav = useCallback(() => {
        setIsExpanded(false)
    }, [])

    useClickOutside(navRef, closeNav)
    return (
        <nav
            className={`fixed left-0 top-0 z-[100] w-full md:absolute md:left-1/2 md:top-10 md:max-w-[826px] md:-translate-x-1/2`}
        >
            <div ref={navRef}>
                <MobileNav
                    isExpanded={isExpanded}
                    toogleNav={toogleNav}
                    closeNav={closeNav}
                />
                <DesktopNav />
            </div>
            <div className="nav-small-border absolute bottom-0 left-1/2 h-px w-[230px] -translate-x-1/2"></div>
            {isExpanded &&
                createPortal(
                    <div className="bg-dark/40 fixed inset-0 z-40 backdrop-blur-sm lg:hidden"></div>,
                    document.body
                )}
        </nav>
    )
}

export default Nav
