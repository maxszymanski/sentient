'use client'
import ReactFullpage from '@fullpage/react-fullpage'
import { ReactNode } from 'react'

const FullPage = ({ children, ...options }: { children: ReactNode }) => {
    return (
        <ReactFullpage
            credits={{
                enabled: false,
            }}
            licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_KEY}
            {...options}
            render={() => {
                return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>
            }}
        />
    )
}

export default FullPage
