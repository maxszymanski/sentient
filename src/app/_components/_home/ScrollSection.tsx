import SectionElispe from '@/assets/section-elipse.png'
import Image from 'next/image'

function ScrollSection() {
    return (
        <>
            <section className="flex min-h-screen items-center justify-center">
                <div className="max-w-7xl px-4 py-16 text-center">
                    <h2 className="font-twk md:leading-14 heading-gradient-text max-w-[590px] text-4xl md:text-[44px] md:tracking-[-0.5px]">
                        Your brain wasn&apos;t designed for digital overload
                    </h2>
                    <div className=""></div>
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
