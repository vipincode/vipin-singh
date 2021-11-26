import Image from "next/image"
import Link from "next/link"

export default function Works({works}) {
    return (
        <Link href={works.p_url}>
            <a>
                <div className="rounded border-4 border-gray overflow-hidden">
                    <div className="leading-none origin-center">
                        <Image className="transform hover:scale-110 transition-transform duration-500 ease-in-out" src={works.p_image} alt={works.p_title} width={800} height={420} />
                    </div>
                </div>
            </a>
        </Link>
    )
}
