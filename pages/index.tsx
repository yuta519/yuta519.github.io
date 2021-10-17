import Image from "next/image"
import { Typography } from '@material-ui/core'

import Header from '@/components/Header'
// import profileimg from '@/public/profile.jpeg'

export default function Home() {
    return (
        <>
            <Header />
            <p className="min-h-screen py--0 px-2 flex flex-col justify-center items-center">
                <Typography variant="h4" component="div" gutterBottom>
                    About Me
                </Typography>
                {/* <Image src={profileimg} width={400} height={512} alt="My avatar" /> */}
            </p>
        </>
    )
}

