export default function Heading({sm__Heading, lg__Heading, p__Title}) {
    return (
        <div>
            <article className="text-center">
                {sm__Heading != null && <h2 className="text-xl text-primary font-medium font-body">{sm__Heading}</h2> }
                {lg__Heading != null && <h2 className="font-body font-bold text-3xl lg:text-4xl text-black">{lg__Heading}</h2>}
                {p__Title != null && <p className="text-2xl font-body font-light mt-4 text-black">{p__Title}</p>}
            </article>
        </div>
    )
}
