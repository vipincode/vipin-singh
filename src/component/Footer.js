import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <div>
           <div className="md:flex md:justify-between md:items-center">
               <div>
                   <Link href="/">
                       <a>
                           <Image src="/img/footer-logo.png" alt="Footer Logo" height={50} width={171} />
                       </a>
                   </Link>
               </div>
               <div className="mt-12 md:mt-0">
                    <a href="/pdf/sample.pdf" download className="px-8 py-3 m-4 text-xl font-semibold border-2 rounded border-primary text-primary font-body">Download CV</a>
                   <Link href="#contact">
                       <a className="px-8 py-3 m-4 text-xl font-semibold border-2 rounded border-primary text-primary font-body">Let&#39;s Talk</a>
                   </Link>
               </div>
           </div>
           <div className="pt-12 md:flex md:justify-between md:items-center md:pt-60">
               <div>
                   <p className="m-4 font-light text-primary">&copy;{new Date().getFullYear()} allright reserved by vipin singh</p>
               </div>
               <div className="md:flex">
                   <Link href="/"><a className="m-4 font-light text-primary">Home</a></Link>
                   <Link href="#"><a className="m-4 font-light text-primary">About</a></Link>
                   <Link href="#"><a className="m-4 font-light text-primary">Work</a></Link>
                   <Link href="#"><a className="m-4 font-light text-primary">Service</a></Link>
                   <Link href="#"><a className="m-4 font-light text-primary">Blog</a></Link>
                   <Link href="#"><a className="m-4 font-light text-primary">Contact</a></Link>
               </div>
           </div>
        </div>
    )
}
