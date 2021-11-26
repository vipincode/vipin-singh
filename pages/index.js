import Link from 'next/link'
import Layout from "@/component/Layout"
import Skills from "@/component/Skills"
import Heading from "@/component/Heading"
import Works from "@/component/Works"
import Button from "@/component/Button"
import ContactUs from "@/component/ContactUs"

export default function HomePage({data}) {
  return (
    <Layout>

      <section className="mt-20">
        <div className="container px-4 mx-auto">
          <Heading lg__Heading= "My Feature Skills" p__Title="I have specialize in these fields, and I did’t comprmize in quality of work " />
          <div className="gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-14">
            {data.skillsData.length == 0 && <h3>No data found, try again!</h3>}
            {data.skillsData.map( skill => (
              <Skills key={skill.id} skills={skill} />
            ))}
          </div>
          <div className="my-20 text-center">
            <Button link="/skill" linkText="View More Skill"  />
          </div>
        </div>
      </section>
      {/* Skills */}

      <section className="mt-20">
        <div className="container px-4 mx-auto">
          <Heading sm__Heading="Portfolio" lg__Heading= "My Latest Work"/>
          <div className="gap-4 md:grid md:grid-cols-2 mt-14">
            {data.worksData.length === 0 && <h3>No data found, try again!</h3>}
            {data.worksData.map( work => (
              <Works key={work.p_id} works={work} />
            ))}
          </div>
          <div className="my-20 text-center">
            <Button link="/work" linkText="View More Work" />
          </div>
        </div>
      </section>
      {/* Work */}

      <section className="bg-center bg-cover bg-sec-banner py-28">
        <div className="container px-4 mx-auto">
          <div className="text-center text-secondary">
            <h2 className="text-lg font-medium uppercase font-body">About Us</h2>
            <h2 className="text-3xl font-bold lg:text-4xl font-body">A Quick Bio</h2>
            <p className="m-auto mt-4 text-xl font-light leading-8 lg:text-2xl font-body lg:w-3/4">
            Innovative Front End Developer with 2+ years of experience
            building and maintaining a responsive website in the recruiting
            industry. Proficient in HTML, CSS, javascript. Plus modern
            Libraries and frameworks. Passionate about usability and
            process working knowledge of Adobe Photoshop cc and
            adobe Illustrator cc.</p>
            <Link href="#contact">
              <a className="inline-block px-8 py-3 mt-6 text-2xl font-semibold border-2 rounded border-secondary font-body">Hire Me</a>
            </Link>
          </div>
        </div>
      </section>
      {/* About */}

      <section className="my-20">
        <div className="container px-4 mx-auto">
          <div className="gap-5 p-8 md:grid md:grid-cols-4 lg:mx-auto">
            <div className="col-span-3">
              <div className="md:grid md:grid-cols-3">
                <article>
                  <h2 className="text-xl font-semibold font-body before:content-['hello'] before:block">Experiance</h2>
                </article>
                <div className="col-span-2">
                  <article className="pb-4 border-b border-solid border-secondary">
                    <h3 className="text-lg font-semibold font-body">Diptimate Consultants Pvt. Ltd. / Web Designer</h3>
                    <span className="block text-sm font-semibold text-secondary">January 2021 - Present, Lucknow</span>
                    <p className="mt-2 text-sm font-body">
                    In Diptimate Consultants, I am Work as Web Designer, Work independent and also with .Net Developers.
                    </p>
                  </article>
                  <article className="py-4 border-b border-solid border-secondary">
                    <h3 className="text-lg font-semibold font-body">Ebslon Infotech Pvt. Ltd / Web Designer</h3>
                    <span className="block text-sm font-semibold text-secondary">November 2019 - December 2021, Delhi</span>
                    <p className="mt-2 text-sm font-body">
                      In Ebslon Infotech, I am Work as Web Designer, Work independent and also with PHP Developers 
                    </p>
                  </article>
                </div>
              </div>
              {/* Experiance */}
              <div className="mt-10 md:grid md:grid-cols-3">
                <article>
                  <h2 className="text-xl font-semibold font-body">Education</h2>
                </article>
                <div className="col-span-2">
                  <article className="pb-4 border-b-2 border-solid border-secondary">
                    <h3 className="text-lg font-semibold font-body">Online Training / Teamtreehouse, Linkedin, Udemy.com</h3>
                    <span className="block text-sm font-semibold text-secondary">July 2017 - Pesent</span>
                    <p className="mt-2 text-sm font-body">
                      I am life long learner, and I grow my skills with various line laerning plaform, And I passed Linkedin assessment.
                    </p>
                  </article>
                  <article className="py-4 border-b-2 border-solid border-secondary">
                    <h3 className="text-lg font-semibold font-body">AIET / B-Tech</h3>
                    <span className="block text-sm font-semibold text-secondary">July 2008 - June 2012, Lucknow</span>
                    <p className="mt-2 text-sm font-body">
                      I had completed my graduation from AIET luckow, Which is associated with GBTU university lucknow, In First grade.
                    </p>
                  </article>
                </div>
              </div>
              {/* Educarton */}
            </div>
            <div>
              <div>
                <h3 className="text-base font-bold font-body">GitHub Profile</h3>
                <Link href="https://github.com/vipincode">
                  <a  className="text-base font-body text-primary">View My GitHub Profile</a>
                </Link>
              </div>
              <div className="my-4">
                <h3 className="text-base font-bold font-body">Linkedin Profile</h3>
                <Link href="https://www.linkedin.com/in/vipinsingh32/">
                  <a className="text-base font-body text-primary">View My Linkedin Profile</a>
                </Link>
              </div>
              {/* <h2>Whit I do?</h2> */}
            </div>
            {/* What I do */}
          </div>
        </div>
      </section>

      <section id="contact" className="mt-20">
        <div className="container px-4 mx-auto">
          <Heading lg__Heading= "Contact Me" p__Title="Contact me for, freelancing, fulltime job, parttime job" />
          <ContactUs />
        </div>
      </section>
      {/* Contact */}

    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api`)
  const {skills, works} = await res.json() 
  return {
    props: {
      data: {
        skillsData: skills.slice(0, 12), 
        worksData: works.slice(0, 4)
      }
    }
  }
}

