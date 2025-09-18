'use client'
import { useState } from 'react'
import Accordeon from './Accordeon'

const questions = [
    {
        title: 'What data does Sentient access?',
        answer: "Sentient doesn't wait for you to ask questions. It proactively observes your work and offers insights without being prompted.",
    },
    {
        title: 'What data does Sentient access?',
        answer: "Sentient doesn't wait for you to ask questions. It proactively observes your work and offers insights without being prompted.",
    },
    {
        title: 'Where is my data stored?',
        answer: "Sentient doesn't wait for you to ask questions. It proactively observes your work and offers insights without being prompted.",
    },
    {
        title: 'Will it overwhelm me with notifications?',
        answer: "Sentient doesn't wait for you to ask questions. It proactively observes your work and offers insights without being prompted.",
    },
    {
        title: 'How does it learn my preferences?',
        answer: "Sentient doesn't wait for you to ask questions. It proactively observes your work and offers insights without being prompted.",
    },
    {
        title: 'Can I see what it knows about me?',
        answer: "Sentient doesn't wait for you to ask questions. It proactively observes your work and offers insights without being prompted.",
    },
]

function FaqQuestions() {
    const [activeIndex, setActiveIndex] = useState(0)

    const toggleAccordion = (index: number) => {
        if (activeIndex !== index) {
            setActiveIndex(index)
        }
    }

    return (
        <div className="mx-auto flex w-full max-w-[610px] flex-col gap-5 xl:mx-0 xl:ml-auto xl:h-[650px] xl:w-[610px] 2xl:shrink-0">
            {questions.map((item, idx) => (
                <Accordeon
                    key={idx}
                    isOpen={activeIndex === idx}
                    onClick={() => toggleAccordion(idx)}
                    answer={item.answer}
                    title={item.title}
                />
            ))}
        </div>
    )
}

export default FaqQuestions
