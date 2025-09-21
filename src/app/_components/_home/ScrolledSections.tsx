'use client'
import { ReactNode, useEffect, useRef } from 'react'

function ScrolledSections({ children }: { children: ReactNode }) {
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
        <div className="section">
            <div
                className="normal-scroll-section h-dvh overflow-y-auto lg:h-full"
                ref={scrollRef}
            >
                {children}
            </div>
        </div>
    )
}

export default ScrolledSections
