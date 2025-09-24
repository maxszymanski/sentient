'use client'
import ReactFullpage from '@fullpage/react-fullpage'
import { ReactNode } from 'react'

const FullPage = ({ children, ...options }: { children: ReactNode }) => {
    return (
        <ReactFullpage
            credits={{
                enabled: false,
            }}
            licenseKey="NF77H-QTJI6-ZID7I-HZQ78-XWEAL"
            {...options}
            render={() => {
                return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>
            }}
        />
    )
}

export default FullPage
