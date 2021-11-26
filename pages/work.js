import Layout from "@/component/Layout"
import WorkCard from "@/component/WorkCard"
import Heading from "@/component/Heading"

export default function work({works}) {
    return (
        <Layout title="My Latest Works">
            <section>
                <div className="container px-4 mx-auto">
                    <div className="text-center pt-14">
                        <Heading lg__Heading="Projects" sm__Heading="My Latest" />
                    </div>
                    <div className="gap-4 mt-14 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {works.length === 0 && <h3>No Data Found, Try Again!</h3>}
                        {works.map( work => (
                            <WorkCard key={work.p_id} workList={work} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Works */}
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_URL}/api`)
    const {works} = await res.json() 
    return {
      props: {
        works
      }
    }
  }