import Link from 'next/link'

export default function Button({link, linkText}) {
    return (
        <div>
             <Link href={link}>
                <a className="bg-primary text-secondary py-2 px-4 md:py-3 md:px-6 rounded text-xl lg:text-2xl font-medium font-body">{linkText}</a>
              </Link>
        </div>
    )
}
