'use client'
import Image from 'next/image'
import James from '@/assets/animated/james.png'
import EmptyR from '@/assets/animated/empty-right.png'
import Follow from '@/assets/animated/follow.png'
import Web from '@/assets/animated/website.png'
import EmptyBottom from '@/assets/animated/empty-bottom.png'
import EmptyLeftB from '@/assets/animated/empty-left.png'
import Calendar from '@/assets/animated/calendar.png'
import Project from '@/assets/animated/project.png'
import Message from '@/assets/animated/message.png'
import LeftTop from '@/assets/animated/left-top.png'
import LeftBottom from '@/assets/animated/left-second.png'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function SlideImages() {
    const ref = useRef(null)

    const [isMobile, setIsMobile] = useState(false)
    const [start, setStart] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)')

        const handleMediaChange = (e: MediaQueryListEvent) =>
            setIsMobile(e.matches)

        setIsMobile(mediaQuery.matches)
        mediaQuery.addEventListener('change', handleMediaChange)

        return () => mediaQuery.removeEventListener('change', handleMediaChange)
    }, [])

    const isInView = useInView(ref, {
        once: true,
        amount: isMobile ? 0.1 : 0.2,
    })

    useEffect(() => {
        if (isInView) {
            const delay = isMobile ? 200 : 400
            const timer = setTimeout(() => setStart(true), delay)
            return () => clearTimeout(timer)
        }
    }, [isInView, isMobile])

    return (
        <motion.div
            ref={ref}
            className="absolute inset-0"
            initial={{ scale: isMobile ? 1.99 : 1.3 }}
            animate={{ scale: start ? 1 : isMobile ? 1.99 : 1.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <Image
                alt="card with icon and text"
                src={James}
                width={135}
                height={206}
                className="absolute right-0 top-0 lg:bottom-1/2 lg:top-auto"
                quality={100}
            />
            <Image
                alt="card with icon and text"
                src={EmptyR}
                width={61}
                height={137}
                className="absolute bottom-[200px] right-0 z-10"
                quality={100}
            />
            <Image
                alt="card with icon and text"
                src={Follow}
                width={161}
                height={118}
                className="absolute -right-14 bottom-[120px] z-20 lg:-right-0"
                quality={100}
            />
            <Image
                alt="card with icon and text"
                src={Web}
                width={349}
                height={115}
                className="absolute bottom-0 right-0 z-20"
                quality={100}
            />
            <Image
                alt="card with icon and text"
                src={EmptyBottom}
                width={334}
                height={120}
                className="absolute bottom-0 right-0 z-10 hidden lg:block"
                quality={100}
            />
            <Image
                alt="card with icon and text"
                src={Calendar}
                width={54}
                height={54}
                className="absolute bottom-20 left-3/4 z-20 lg:bottom-0 lg:left-[461px]"
                quality={100}
            />
            <Image
                alt="card with icon and text"
                src={EmptyLeftB}
                width={430}
                height={30}
                className="absolute bottom-0 left-[83px] z-10 hidden lg:block"
                quality={100}
            />
            <Image
                alt="card with icon and text"
                src={Project}
                width={408}
                height={119}
                className="absolute bottom-0 left-0 z-10"
                quality={100}
            />
            <Image
                alt="card with icon and text"
                src={Message}
                width={50}
                height={54}
                className="absolute bottom-3/4 left-0 z-30 lg:bottom-[135px]"
                quality={100}
            />
            <Image
                alt="card with icon and text"
                src={LeftTop}
                width={47}
                height={137}
                className="absolute left-0 top-16 z-10 lg:bottom-[375px] lg:top-auto"
                quality={100}
            />
            <Image
                alt="card with icon and text"
                src={LeftBottom}
                width={50}
                height={229}
                className="absolute bottom-[154px] left-0 z-20"
                quality={100}
            />
        </motion.div>
    )
}

export default SlideImages
