import { useState } from 'react'
import { useRouter } from 'next/router'
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/Ai';
import Nav from './Nav'
import styles from "@/styles/style.module.css"
import Hamburger from './Hamburger'
import SmallHeaderHeading from './SmallHeaderHeading';

export default function SmallHeader() {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    return (
        <header className={`${styles.smallBanner} px-4 py-4 bg-sm-banner bg-primary bg-cover bg-center relative`}>
            {open ? <Hamburger /> : ''}
            <Nav />
            <div className="fixed right-5 top-7 z-20 md:hidden cursor-pointer" onClick={ () => setOpen(!open) }>
                <span className="text-secondary bg-primary px-2 py-2 rounded inline-block">
                    {open ? <AiOutlineClose size='32px' color='#cfd0bf' /> : <AiOutlineMenu size='32px' color='#cfd0bf' /> }
                </span>
            </div>
            { router.pathname==='/skill' && <SmallHeaderHeading headingText="My Skills" />}
            { router.pathname==='/work' && <SmallHeaderHeading headingText="My Latest Work" />}
            { router.pathname==='/contact' && <SmallHeaderHeading headingText="Contact Me" />}
            { router.pathname==='/blog' && <SmallHeaderHeading headingText="My Latest Blog" />}
            { router.pathname==='/404' && <SmallHeaderHeading headingText="Page Not Found!" />}
        </header>
    )
}
