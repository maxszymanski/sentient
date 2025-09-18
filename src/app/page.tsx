import Footer from './_components/_footer/Footer'
import ComparisonSection from './_components/_home/ComparisonSection'
import ConnectingSection from './_components/_home/ConnectingSection'
import FaqSection from './_components/_home/FaqSection'
import FormSection from './_components/_home/FormSection'
import Header from './_components/_home/Header'
import InteligenceSection from './_components/_home/InteligenceSection'
import ScrollSection from './_components/_home/ScrollSection'
import SecuritySection from './_components/_home/SecuritySection'
import Nav from './_components/_nav/Nav'
import LargeEllipse from '@/assets/large-ellipse.webp'
import Rectangle from '@/assets/rectangle.webp'

export default function Home() {
    return (
        <>
            <Nav />
            <Header />
            <main>
                <ScrollSection />
                <InteligenceSection />
                <div className="relative w-full overflow-hidden">
                    <div
                        className="top-30 -right-50 absolute z-20 h-full max-h-[1570px] w-[956px] max-w-full bg-contain bg-no-repeat"
                        style={{ backgroundImage: `url(${LargeEllipse.src})` }}
                    ></div>
                    <SecuritySection />
                    <ConnectingSection />
                    <ComparisonSection />
                    <FaqSection />

                    <FormSection />
                    <div
                        className="absolute -top-[500px] left-0 z-40 h-full w-full bg-cover bg-center bg-no-repeat 2xl:-top-[800px]"
                        style={{ backgroundImage: `url(${Rectangle.src})` }}
                    ></div>
                </div>
            </main>
            <Footer />
        </>
    )
}
