import Header from './_components/_home/Header'
import ScrollSection from './_components/_home/ScrollSection'
import Nav from './_components/_nav/Nav'

export default function Home() {
    return (
        <>
            <Nav />
            <Header />
            <main>
                <ScrollSection />
            </main>
        </>
    )
}
