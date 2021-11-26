import Link from 'next/link'
import Image from 'next/image'

export default function Hamburger() {
    return (
        <div className="bg-secondary py-8 px-8 fixed top-0 left-0 w-72 h-full z-10">
            <div className="mb-4">
                <Image src="/img/footer-logo.png" alt="Mobile log" width={171} height={50} />
            </div>
            <div>
                <Link href="/">
                    <a className="block py-3 text-2xl uppercase font-display">Home</a>
                </Link>
                <Link href="/skill">
                    <a className="block py-3 text-2xl uppercase font-display">Skills</a>
                </Link>
                <Link href="/work">
                    <a className="block py-3 text-2xl uppercase font-display">Work</a>
                </Link>
                <Link href="/contact">
                    <a className="block py-3 text-2xl uppercase font-display">Contact</a>
                </Link>
                <Link href="/blog">
                    <a className="block py-3 text-2xl uppercase font-display">Blog</a>
                </Link>
            </div>
            <Link href="#">
                <a className="bg-primary px-6 py-3 rounded-md text-secondary text-xl font-medium mt-24 text-center block">Download CV</a>
            </Link>
        </div>
    )
}
