import {API_URL} from '@/config/index'
import Layout from "@/component/Layout"
import Heading from '@/component/Heading'
import Skills from '@/component/Skills'

export default function skill({skills}) {
    return (
        <Layout title="My Skill's">
           <section>
                <div className="container px-4 mx-auto">
                    <div className="text-center pt-14">
                        <Heading lg__Heading="Skill&#39;s" sm__Heading="Featured" />
                    </div>
                    <div className="gap-4 mt-14 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {skills.length === 0 && <h3>No Data Found, Try Again!</h3>}
                        {skills.map( skill => (
                            <Skills key={skill.id} skills={skill} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Skills */}
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_URL}/api`)
    const {skills} = await res.json() 
    return {
      props: {
        skills
      }
    }
  }