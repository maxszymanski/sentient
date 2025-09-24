'use client'

import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

function RiveAnimation() {
    const { rive, RiveComponent } = useRive({
        src: '/animations/rive.riv',
        autoplay: true,
        stateMachines: 'State Machine 2',
    })

    const serverHover = useStateMachineInput(
        rive,
        'State Machine 2',
        'Server_Hover'
    )
    const brainHover = useStateMachineInput(
        rive,
        'State Machine 2',
        'Brain_Hover'
    )
    const userHover = useStateMachineInput(
        rive,
        'State Machine 2',
        'User_Hover'
    )
    const hoverPencil = useStateMachineInput(
        rive,
        'State Machine 2',
        'Hover_Pencil'
    )

    return (
        <div className="relative mx-auto w-full sm:h-[800px]">
            <RiveComponent className="h-full w-full" />
        </div>
    )
}

export default RiveAnimation
