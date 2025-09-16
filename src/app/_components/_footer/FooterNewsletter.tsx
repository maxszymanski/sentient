import Link from 'next/link'
import { GoArrowRight } from 'react-icons/go'
import { LuArrowUpRight } from 'react-icons/lu'
import { MdOutlineEmail } from 'react-icons/md'

function FooterNewsletter() {
    return (
        <div className="border-white/12 flex w-full flex-wrap justify-between gap-8 border-b pb-11">
            <div>
                <h2 className="sm:leading-14 font-twk mb-1 text-3xl leading-10 sm:text-4xl">
                    Subscribe to Newsletter
                </h2>
                <div className="flex flex-wrap items-center gap-2">
                    <p className="text-white72 text-sm">
                        Unsubscribe at any time.
                    </p>
                    <Link
                        href="/"
                        className="my-outline hover:text-white72 inline-flex items-end gap-2 text-sm text-white transition-colors duration-300"
                    >
                        {' '}
                        <span>Privacy Policy</span>
                        <LuArrowUpRight className="size-4 shrink-0" />
                    </Link>
                </div>
            </div>
            <form className="relative h-[54px] w-full max-w-[398px]">
                <label
                    htmlFor="email"
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                >
                    <MdOutlineEmail className="mt-0.5 size-4" />
                </label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    autoComplete="email"
                    placeholder="Your email..."
                    className="border-white/12 placeholder:text-white/32 my-outline !ring-white/72 relative z-10 block w-full rounded-xl border bg-transparent px-10 py-3 transition-colors duration-300 placeholder:!font-sans placeholder:text-sm focus-visible:!rounded-xl focus-visible:!ring sm:py-3.5 sm:placeholder:text-base"
                />
                <button
                    type="submit"
                    aria-label="submit form"
                    title="submit form"
                    className="my-outline absolute right-0 top-1/2 z-20 flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-colors duration-300 hover:text-white/50"
                >
                    <GoArrowRight className="pointer-events-none size-5" />
                </button>
            </form>
        </div>
    )
}

export default FooterNewsletter
