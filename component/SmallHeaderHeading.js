export default function SmallHeaderHeading({headingText}) {
    return (
        <div className="md:flex md:items-center md:justify-center md:h-full mt-16 md:mt-0">
            <div className="pt-8 md:pt-12">
                <h1 className="text-4xl lg:text-5xl text-secondary font-bold font-display text-center md:text-left">{headingText}</h1>
            </div>
        </div>
    )
}
