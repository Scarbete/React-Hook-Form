import { FC, ReactNode } from 'react'
import type { Metadata } from 'next'
import '../application/styles/core.scss'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

type Props = {
    children: ReactNode
}

const RootLayout: FC<Props> = (props) => {

    const {children} = props

    return (
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout