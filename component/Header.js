import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/Ai';
import Nav from './Nav'
import styles from "@/styles/style.module.css"
import Hamburger from './Hamburger'

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className={`${styles.banner} ${styles.heding} px-4 py-4 bg-hero-banner bg-primary md:h-screen bg-cover bg-center relative`}>
            {open ? <Hamburger /> : ''}
            <Nav />
            <div className="fixed z-20 cursor-pointer right-5 top-7 md:hidden" onClick={ () => setOpen(!open) }>
                <span className="inline-block px-2 py-2 rounded text-secondary bg-primary">
                    {open ? <AiOutlineClose size='32px' color='#cfd0bf' /> : <AiOutlineMenu size='32px' color='#cfd0bf' /> }
                </span>
            </div>
            <div className="mt-16 md:flex md:items-center md:justify-center md:h-full md:mt-0">
                <div className="p-4">
                    <Image src="/img/profile-pick.png" alt="Profile picture" height={345} width={345} />
                </div>
                <div className="p-4">
                    <div>
                        <h1 className="text-2xl font-bold text-center md:text-4xl lg:text-5xl xl:text-6xl text-secondary font-display md:text-left">
                            Hello, I&rsquo;m Vipin Singh
                        </h1>
                        <h2 className="mt-2 text-2xl font-bold text-center md:text-4xl lg:text-5xl xl:text-6xl text-secondary font-display md:mt-8 md:text-left">
                            Front-End Developer
                        </h2>
                        <p className="mt-2 text-xl tracking-widest text-center uppercase text-secondary md:text-3xl md:mt-8 md:text-left">
                            UX/UI Designer
                        </p>
                    </div>
                </div>
            </div>
            <div className="self-start w-full px-4 py-5 text-center md:grid md:grid-cols-3 md:gap-5 md:border-t-2 border-secondary md:absolute md:left-0 md:bottom-0">
                <div>
                    <h3 className="mb-1 text-xl font-semibold text-secondary font-display">Download CV</h3>
                    <a href="/pdf/sample.pdf" download className="block mb-6 text-lg text-secondary hover:underline md:mb-0">vipin-singh.pdf</a>
                </div>
                <div>
                    <h3 className="mb-1 text-xl font-semibold text-secondary font-display">Phone</h3>
                    <Link href="#">
                        <a className="block mb-6 text-lg text-secondary hover:underline md:mb-0">
                        (+91) - 9555572905 </a>
                    </Link>
                </div>
                <div>
                    <h3 className="mb-1 text-xl font-semibold text-secondary font-display">Drop Your Message</h3>
                    <Link href="#">
                        <a className="block text-lg text-secondary hover:underline">
                        svipin174@gmail.com</a>
                    </Link>
                </div>
            </div>
        </header>
    )
}
