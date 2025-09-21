import Rectangle from '@/assets/rectangle.webp'
function SectionsLinearBg() {
    return (
        <div
            className="absolute -top-[800px] left-0 z-40 h-full w-full bg-cover bg-center bg-no-repeat lg:-top-[500px] 2xl:-top-[800px]"
            style={{ backgroundImage: `url(${Rectangle.src})` }}
        ></div>
    )
}

export default SectionsLinearBg
