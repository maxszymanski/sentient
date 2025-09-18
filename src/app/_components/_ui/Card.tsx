'use client'
import Image from 'next/image'
import Ellipse from '@/assets/card-ellipse.png'
import { ReactNode } from 'react'

interface CardProps {
    title: string
    children: ReactNode
    position: { x: number; y: number }
}

function Card({ title, children, position }: CardProps) {
    return (
        <div
            className={`faq-border card-bg relative z-10 overflow-hidden rounded-2xl p-6 text-left lg:absolute`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        >
            <Image
                src={Ellipse}
                fill
                alt=""
                className="rounded-2xl object-left"
            />
            <p className="heading-gradient-text font-twk mb-4 leading-5">
                {title}
            </p>
            <p className="text-white72 leading-[25px]">{children}</p>
        </div>
    )
}

export default Card
