'use client'
import { motion } from 'framer-motion'
import Card from '../_ui/Card'
import SlideImages from '../_ui/SlideImages'

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

function AnimatedSection() {
    return (
        <div className="section">
            <section className="bg-dark relative flex h-dvh items-center justify-center overflow-hidden lg:h-full">
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
                <SlideImages />
            </section>
        </div>
    )
}

export default AnimatedSection
