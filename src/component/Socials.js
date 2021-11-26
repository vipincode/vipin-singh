import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Socials() {
    return (
        <div>
            <ul className="grid grid-cols-4 gap-4">
                <li>
                    <Link href="#">
                        <a className="text-lg text-black hover:text-primary transition-color duration-500  ease-in-out"><FaFacebookF /></a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a className="text-lg text-black hover:text-primary transition-color duration-500  ease-in-out"><FaTwitter /></a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a className="text-lg text-black hover:text-primary transition-color duration-500  ease-in-out"><FaLinkedinIn /></a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a className="text-lg text-black hover:text-primary transition-color duration-500  ease-in-out"><FaGithub /></a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
