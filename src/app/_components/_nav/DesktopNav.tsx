import Logo from '../_icons/Logo'
import ReqestLink from '../_ui/ReqestLink'
import NavList from './NavList'

function DesktopNav() {
    return (
        <div className="nav-bg relative hidden items-center justify-between gap-2 rounded-[47px] border py-2 pl-4 pr-2 md:flex">
            <Logo />
            <div className="flex items-center gap-[70px]">
                <NavList />
                <ReqestLink />
            </div>
        </div>
    )
}

export default DesktopNav
