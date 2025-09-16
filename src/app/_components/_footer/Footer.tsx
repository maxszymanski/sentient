import FooterBg from '@/assets/footer-bg.png'
import FooterNewsletter from './FooterNewsletter'
import FooterNav from './FooterNav'
import FooterSocial from './FooterSocial'

function Footer() {
    return (
        <footer
            className="mt-20 flex min-h-[899px] w-full items-end bg-contain bg-top bg-no-repeat px-2 pb-5 pt-16 sm:bg-center"
            style={{ backgroundImage: `url(${FooterBg.src})` }}
        >
            <div className="footer-nav mx-auto w-full max-w-[1400px] rounded-3xl px-4 pt-10 xl:px-14 2xl:px-20">
                <FooterNewsletter />
                <FooterNav />
                <FooterSocial />
            </div>
        </footer>
    )
}

export default Footer
