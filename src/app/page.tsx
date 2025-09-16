import Footer from './_components/_footer/Footer'
import ConnectingSection from './_components/_home/ConnectingSection'
import Header from './_components/_home/Header'
import InteligenceSection from './_components/_home/InteligenceSection'
import ScrollSection from './_components/_home/ScrollSection'
import Nav from './_components/_nav/Nav'

export default function Home() {
    return (
        <>
            <Nav />
            <Header />
            <main>
                <ScrollSection />
                <InteligenceSection />
                <ConnectingSection />
            </main>
            <Footer />
        </>
    )
}
