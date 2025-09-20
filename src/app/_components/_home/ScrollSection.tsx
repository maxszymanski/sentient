'use client'
import SectionElispe from '@/assets/section-elipse.png'
import Image from 'next/image'
import Card from '../_ui/Card'
import SlideImag from '../_ui/SlideImag'
import FullPage from './FullPage'
import Header from './Header'
import InteligenceSection from './InteligenceSection'
import SecuritySection from './SecuritySection'
import ConnectingSection from './ConnectingSection'
import ComparisonSection from './ComparisonSection'
import FaqSection from './FaqSection'
import FormSection from './FormSection'
import LargeEllipse from '@/assets/large-ellipse.webp'
import Rectangle from '@/assets/rectangle.webp'
import { useEffect, useRef } from 'react'
import Footer from '../_footer/Footer'
import { motion } from 'framer-motion'

const cards = [
    {
        title: 'Scattered Information',
        position: {
            x: -300,
            y: -110,
        },
        start: 40,
        textOne: 'Important context lives across email,',
        textTwo: 'calendar, docs, and chat',
    },
    {
        title: 'Forgotten Commitments',
        position: {
            x: 280,
            y: -140,
        },
        start: 40,
        textOne: 'Promises made in meetings disappear ',
        textTwo: 'into the void',
    },
    {
        title: 'Lost Context',
        position: {
            x: -330,
            y: 130,
        },
        start: -30,
        textOne: 'Starting every task feels like beginning ',
        textTwo: 'from scratch',
    },
    {
        title: 'Mental Overhead',
        position: {
            x: 305,
            y: 90,
        },
        start: 0,
        textOne: 'Constantly switching between apps ',
        textTwo: 'drains cognitive energy',
    },
]

function ScrollSection() {
    const fullpageOptions = {
        scrollingSpeed: 700,
        controlArrows: false,
        slidesNavigation: false,
        normalScrollElements: '.normal-scroll-section',
        scrollOverflow: false,
    }

    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = scrollRef.current
        if (!element) return

        const handleWheel = (e: WheelEvent) => {
            const { scrollTop } = element

            if (scrollTop === 0 && e.deltaY < 0) {
                e.preventDefault()

                const fullpage = (
                    window as Window & {
                        fullpage_api?: {
                            moveTo: (section: number, slide?: number) => void
                        }
                    }
                ).fullpage_api

                fullpage?.moveTo(3)
            }
        }

        let startY = 0

        const handleTouchStart = (e: TouchEvent) => {
            startY = e.touches[0].clientY
        }

        const handleTouchMove = (e: TouchEvent) => {
            const { scrollTop } = element
            const currentY = e.touches[0].clientY
            const diffY = currentY - startY

            if (scrollTop === 0 && diffY > 0) {
                e.preventDefault()

                const fullpage = (
                    window as Window & {
                        fullpage_api?: {
                            moveTo: (section: number, slide?: number) => void
                        }
                    }
                ).fullpage_api

                fullpage?.moveTo(3)
            }
        }

        element.addEventListener('wheel', handleWheel, { passive: false })
        element.addEventListener('touchstart', handleTouchStart, {
            passive: true,
        })
        element.addEventListener('touchmove', handleTouchMove, {
            passive: false,
        })

        return () => {
            element.removeEventListener('wheel', handleWheel)
            element.removeEventListener('touchstart', handleTouchStart)
            element.removeEventListener('touchmove', handleTouchMove)
        }
    }, [])

    return (
        <FullPage {...fullpageOptions}>
            <Header />

            <div className="section">
                <section className="bg-dark relative flex h-full items-center justify-center overflow-hidden">
                    <div className="relative flex w-full max-w-7xl items-center justify-center gap-8 px-4 py-16 text-center lg:gap-0">
                        <h2 className="font-twk md:leading-14 heading-gradient-text w-f relative z-40 h-full w-full max-w-[590px] text-4xl md:text-[44px] md:tracking-[-0.5px]">
                            Your brain wasn&apos;t designed for digital overload
                        </h2>
                        {cards.map((card, index) => (
                            <motion.div
                                className="absolute z-10"
                                key={card.title}
                                initial={{
                                    opacity: 0,
                                    x: card.position.x,
                                    y: card.position.y + card.start,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: card.position.x,
                                    y: card.position.y,
                                }}
                                viewport={{ once: true, amount: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: 'easeOut',
                                    delay: 1.2 + index * 0.5,
                                }}
                            >
                                <Card title={card.title}>
                                    {card.textOne} <br />
                                    {card.textTwo}
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    <SlideImag />
                </section>
            </div>
            <div className="section">
                <section className="flex h-full items-center justify-center">
                    <div className="flex max-w-7xl flex-col items-center px-4 py-16 text-center">
                        <Image
                            src={SectionElispe}
                            alt=""
                            width={69}
                            height={69}
                        />
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
            </div>
            <div className="section">
                <div
                    className="normal-scroll-section h-full overflow-y-auto"
                    ref={scrollRef}
                >
                    <InteligenceSection />
                    <div className="relative w-full overflow-hidden">
                        <div
                            className="top-30 -right-50 absolute z-20 h-full max-h-[1570px] w-[956px] max-w-full bg-contain bg-no-repeat"
                            style={{
                                backgroundImage: `url(${LargeEllipse.src})`,
                            }}
                        ></div>
                        <SecuritySection />
                        <ConnectingSection />
                        <ComparisonSection />
                        <FaqSection />

                        <FormSection />
                        <div
                            className="absolute -top-[800px] left-0 z-40 h-full w-full bg-cover bg-center bg-no-repeat lg:-top-[500px] 2xl:-top-[800px]"
                            style={{ backgroundImage: `url(${Rectangle.src})` }}
                        ></div>
                    </div>
                    <Footer />
                </div>
            </div>
        </FullPage>
    )
}

export default ScrollSection
