import Link from 'next/link'
import Image from 'next/image'

export default function WorkCard({workList}) {
    return (
        <div className="border-4 border-gray rounded overflow-hidden mb-4 md:mb-0">
            <Link href={workList.p_url}>
                <a className="origin-center overflow-hidden">
                    <Image src={workList.p_image} alt={workList.p_itle} height={420} width={700} className="transition-transform  duration-500 ease-in-out transform hover:scale-110" />
                </a>
            </Link>
            <div className="p-4">
                <div>
                    <span className="block text-xs text-secondary font-body">{workList.p_language}</span>
                </div>
                <Link href={workList.p_url}>
                    <a className="text-xl font-body text-black font-medium mb-2 block">{workList.p_name}</a>
                </Link>
                <p className="font-body text-base font-light">{workList.p_description}</p>
                <div className="mt-5">
                    <Link href={workList.p_url}>
                        <a className="bg-primary text-secondary font-medium text-base rounded py-2 px-4">Demo</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
