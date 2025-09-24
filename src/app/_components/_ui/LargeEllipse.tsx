import LargeEllipseBg from '@/assets/large-ellipse.webp'

function LargeEllipse() {
    return (
        <div
            className="top-30 -right-50 absolute z-50 h-full max-h-[1570px] w-[956px] max-w-full bg-contain bg-no-repeat md:z-[60]"
            style={{
                backgroundImage: `url(${LargeEllipseBg.src})`,
            }}
        ></div>
    )
}

export default LargeEllipse
