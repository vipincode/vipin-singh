import Image from 'next/image'

export default function Skills({skills}) {
    return (
        <div className="px-2 py-4 mb-4 text-center border-4 rounded-sm md:mb-0 border-gray">
            <Image src={skills.image} alt={skills.title} width={62} height={58} />
            <h2 className="mb-2 text-xl font-bold text-black font-body">{skills.skill}</h2>
            <p className="text-lg font-light leading-3 text-black font-body">{skills.description}</p>
        </div>
    )
}
