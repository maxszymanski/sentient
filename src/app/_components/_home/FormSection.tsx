import SectionBg from '@/assets/form-bg.png'

function FormSection() {
    return (
        <section className="pl-2 xl:pl-0">
            <div
                className="relative mx-auto mt-20 flex h-full min-h-[843px] w-full max-w-[1200px] flex-col bg-cover bg-left bg-no-repeat pt-10 lg:mt-32 xl:bg-center"
                style={{ backgroundImage: `url(${SectionBg.src})` }}
            >
                <h2 className="heading-gradient-text sm:leading-14 font-twk mx-auto mb-6 w-full px-2 text-center text-4xl tracking-[-0.5px] sm:text-[44px]">
                    Be among the first to <br /> experience ambient intelligence
                </h2>
                <p className="text-white72 md: mx-auto w-full max-w-[772px] px-2 text-center leading-[25px] md:px-0">
                    Sentient is currently in private beta with a carefully
                    selected group of knowledge workers—designers, researchers,
                    consultants, and product managers who live in information
                    and can&apos;t afford to forget. <br /> Join the waitlist to
                    get early access and help shape the future of human-AI
                    collaboration.
                </p>
            </div>
        </section>
    )
}

export default FormSection
