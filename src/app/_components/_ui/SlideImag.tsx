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

function SlideImag() {
    return (
        <div className="absolute inset-0 hidden lg:block">
            <Image
                alt=""
                src={James}
                width={135}
                height={206}
                className="absolute right-0 top-[260px]"
                quality={100}
            />
            <Image
                alt=""
                src={EmptyR}
                width={61}
                height={137}
                className="absolute right-0 top-[500px] z-10"
                quality={100}
            />
            <Image
                alt=""
                src={Follow}
                width={161}
                height={118}
                className="absolute right-0 top-[602px] z-20"
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
                className="absolute bottom-0 right-0 z-10"
                quality={100}
            />
            <Image
                alt=""
                src={Calendar}
                width={54}
                height={54}
                className="absolute bottom-0 left-[461px] z-20"
                quality={100}
            />
            <Image
                alt=""
                src={EmptyLeftB}
                width={430}
                height={30}
                className="absolute bottom-0 left-[83px] z-10"
                quality={100}
            />
            <Image
                alt=""
                src={Project}
                width={408}
                height={119}
                className="absolute bottom-0 left-0 z-10"
                quality={100}
            />
            <Image
                alt=""
                src={Message}
                width={50}
                height={54}
                className="absolute bottom-[135px] left-0 z-30"
                quality={100}
            />
            <Image
                alt=""
                src={LeftTop}
                width={47}
                height={137}
                className="absolute bottom-[375px] left-0 z-10"
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
        </div>
    )
}

export default SlideImag
