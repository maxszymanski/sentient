interface BlurLayer {
    blur: number
    startOpacity: number
    endOpacity: number
    startPosition: number
    endPosition: number
}

interface BlurImageProps {
    className?: string
    backgroundGradient?: string
    blurLayers?: BlurLayer[]
    enableProgressiveBlur?: boolean
}

const defaultBlurLayers: BlurLayer[] = [
    {
        blur: 12.5,
        startOpacity: 0,
        endOpacity: 1,
        startPosition: 75,
        endPosition: 100,
    },
    {
        blur: 8,
        startOpacity: 0,
        endOpacity: 1,
        startPosition: 25,
        endPosition: 75,
    },
    {
        blur: 4,
        startOpacity: 0,
        endOpacity: 0.5,
        startPosition: 25,
        endPosition: 50,
    },
]

function BlurBtn({
    className = '',
    backgroundGradient = 'linear-gradient(180deg, rgba(119, 195, 255, 0) 0%, rgba(119, 195, 255, 0.5) 100%)',
    blurLayers = defaultBlurLayers,
    enableProgressiveBlur = true,
}: BlurImageProps) {
    return (
        <div className={className}>
            <div
                className="z-11 absolute bottom-0 left-0 h-full w-full"
                style={{
                    background: backgroundGradient,
                }}
            />

            {enableProgressiveBlur &&
                blurLayers.map((layer, index) => (
                    <div
                        key={index}
                        className={`absolute bottom-0 left-0 h-full w-full`}
                        style={{
                            zIndex: 10 - index,
                            backdropFilter: `blur(${layer.blur}px)`,
                            maskImage: `linear-gradient(180deg, 
                            transparent ${layer.startPosition}%, 
                            rgba(0, 0, 0, ${layer.endOpacity}) ${layer.endPosition}%)`,
                            WebkitMaskImage: `linear-gradient(180deg, 
                            transparent ${layer.startPosition}%, 
                            rgba(0, 0, 0, ${layer.endOpacity}) ${layer.endPosition}%)`,
                        }}
                    />
                ))}
        </div>
    )
}

export default BlurBtn
