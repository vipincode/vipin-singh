import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
    return (
        <div>
            <nav className="absolute top-5 left-0 w-full px-4 md:flex md:justify-between md:items-center">
                <Link href="/">
                    <a><Image src="/img/logo.png" alt="Site Logo" width={171} height={50} /></a>
                </Link>
                <ul className="md:flex hidden">
                    <li>
                        <Link href="/"><a className="text-secondary text-xl font-medium md:px-4 py-3 block font-body uppercase">Home</a></Link>
                    </li>
                    <li>
                        <Link href="/skill"><a className="text-secondary text-xl font-medium md:px-4 py-3 block font-body uppercase">Skills</a></Link>
                    </li>
                    <li>
                        <Link href="/work"><a className="text-secondary text-xl font-medium md:px-4 py-3 block font-body uppercase">Work</a></Link>
                    </li>
                    <li>
                        <Link href="/contact"><a className="text-secondary text-xl font-medium md:px-4 py-3 block font-body uppercase">Contact</a></Link>
                    </li>
                    <li>
                        <Link href="/blog"><a className="text-secondary text-xl font-medium md:px-4 py-3 block font-body uppercase">Blog</a></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
