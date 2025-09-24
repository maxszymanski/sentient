'use client'

import { useRive } from '@rive-app/react-canvas'

function RiveAnimation() {
    const { RiveComponent } = useRive({
        src: '/animations/animation.riv',
        autoplay: true,
        stateMachines: 'State Machine 2',
    })

    return (
        <div className="xs:min-w-[500px] absolute mx-auto h-[700px] w-full min-w-[450px]">
            <RiveComponent className="h-full w-full" />
        </div>
    )
}

export default RiveAnimation
