import SectionElispe from '@/assets/section-elipse.png'
import Image from 'next/image'
import Card from '../_ui/Card'

const cards = [
    {
        title: 'Scattered Information',
        position: {
            x: 180,
            y: -120,
        },
        textOne: 'Important context lives across email,',
        textTwo: 'calendar, docs, and chat',
    },
    {
        title: 'Forgotten Commitments',
        position: {
            x: 750,
            y: -150,
        },
        textOne: 'Promises made in meetings disappear ',
        textTwo: 'into the void',
    },
    {
        title: 'Lost Context',
        position: {
            x: 140,
            y: 120,
        },
        textOne: 'Starting every task feels like beginning ',
        textTwo: 'from scratch',
    },
    {
        title: 'Mental Overhead',
        position: {
            x: 785,
            y: 80,
        },
        textOne: 'Constantly switching between apps ',
        textTwo: 'drains cognitive energy',
    },
]

function ScrollSection() {
    return (
        <>
            <section className="flex min-h-screen items-center justify-center">
                <div className="relative flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-4 py-16 text-center lg:gap-0">
                    <h2 className="font-twk md:leading-14 heading-gradient-text w-f z-20 h-full w-full max-w-[590px] text-4xl md:text-[44px] md:tracking-[-0.5px] lg:absolute">
                        Your brain wasn&apos;t designed for digital overload
                    </h2>
                    {cards.map((card) => (
                        <Card
                            key={card.title}
                            title={card.title}
                            position={card.position}
                        >
                            {card.textOne} <br />
                            {card.textTwo}
                        </Card>
                    ))}
                </div>
            </section>
            <section className="flex min-h-screen items-center justify-center">
                <div className="flex max-w-7xl flex-col items-center px-4 py-16 text-center">
                    <Image src={SectionElispe} alt="" width={69} height={69} />
                    <h2 className="font-twk md:leading-14 heading-gradient-text mb-10 mt-6 max-w-[676px] text-4xl md:text-[44px] md:tracking-[-0.5px]">
                        Meet Sentient <br />
                        Intelligence that connects the dots
                    </h2>
                    <p className="font-diatype text-mygray/72 max-w-[838px] text-base leading-7 tracking-[-2%] md:text-lg">
                        Sentient watches your digital behaviour across every
                        tool you use, building a living memory graph of your
                        work, relationships, and commitments. Then it
                        proactively surfaces relevant insights, forgotten
                        context, and actionable suggestions—all without you
                        having to ask.
                    </p>
                </div>
            </section>
        </>
    )
}

export default ScrollSection
