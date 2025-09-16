import Image from 'next/image'
import Meter from '@/assets/meter.png'

function ConnectingSection() {
    return (
        <section>
            <div className="relative mx-auto h-[250px] w-full max-w-[767px] sm:h-[398px]">
                <Image
                    alt="meter"
                    src={Meter}
                    fill
                    className="object-contain"
                    quality={100}
                />
            </div>
        </section>
    )
}

export default ConnectingSection
