'use client'
import ReactFullpage from '@fullpage/react-fullpage'
import { ReactNode } from 'react'

const FullPage = ({ children, ...options }: { children: ReactNode }) => {
    return (
        <ReactFullpage
            credits={{
                enabled: true,
                label: 'Made with fullPage.js',
                position: 'right',
            }}
            licenseKey="xxxxxxxxxxxxxx"
            {...options}
            render={() => {
                return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>
            }}
        />
    )
}

export default FullPage
