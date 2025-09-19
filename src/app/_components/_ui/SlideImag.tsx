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

function SlideImag() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const [start, setStart] = useState(false)

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => setStart(true), 500)
            return () => clearTimeout(timer)
        }
    }, [isInView])

    return (
        <motion.div
            ref={ref}
            className="absolute inset-0"
            initial={{ scale: 1.3 }}
            animate={{ scale: start ? 1 : 1.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <Image
                alt=""
                src={James}
                width={135}
                height={206}
                className="absolute right-0 top-0 lg:top-[260px]"
                quality={100}
            />
            <Image
                alt=""
                src={EmptyR}
                width={61}
                height={137}
                className="absolute right-0 top-[400px] z-10"
                quality={100}
            />
            <Image
                alt=""
                src={Follow}
                width={161}
                height={118}
                className="absolute right-0 top-[470px] z-20 lg:top-[602px]"
                quality={100}
            />
            <Image
                alt=""
                src={Web}
                width={349}
                height={115}
                className="absolute bottom-0 right-0 z-20"
                quality={100}
            />
            <Image
                alt=""
                src={EmptyBottom}
                width={334}
                height={120}
                className="z- 1 0 absolute bottom-0 right-0 hidden lg:block"
                quality={100}
            />
            <Image
                alt=""
                src={Calendar}
                width={54}
                height={54}
                className="absolute bottom-20 left-3/4 z-20 lg:bottom-0 lg:left-[461px]"
                quality={100}
            />
            <Image
                alt=""
                src={EmptyLeftB}
                width={430}
                height={30}
                className="absolute bottom-0 left-[83px] z-10 hidden lg:block"
                quality={100}
            />
            <Image
                alt=""
                src={Project}
                width={408}
                height={119}
                className="absolute bottom-10 left-0 z-10 lg:bottom-0"
                quality={100}
            />
            <Image
                alt=""
                src={Message}
                width={50}
                height={54}
                className="absolute bottom-3/4 left-0 z-30 lg:bottom-[135px]"
                quality={100}
            />
            <Image
                alt=""
                src={LeftTop}
                width={47}
                height={137}
                className="absolute bottom-3/4 left-0 z-10 lg:bottom-[375px]"
                quality={100}
            />
            <Image
                alt=""
                src={LeftBottom}
                width={50}
                height={229}
                className="absolute bottom-[154px] left-0 z-20"
                quality={100}
            />
        </motion.div>
    )
}

export default SlideImag
