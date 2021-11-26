import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'
import SmallHeader from "@/component/SmallHeader"
import Footer from './Footer'

export default function Layout({title, description, keywords, children}) {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" description={description} />
                <meta name="keywords" description={keywords} />
                <link rel="ico" href="/img/favicon.ico" />
            </Head>

            { router.pathname === "/" && <Header /> }
            {router.pathname !== '/' && <SmallHeader /> }
            <main>
                {children}

                <section className="mt-32 border-t border-secondary pt-20 pb-5">
                    <div className="container mx-auto px-4">
                    <Footer />
                    </div>
                </section>
                {/* Footer */}
            </main>
        </div>
    )
}

Layout.defaultProps = {
    title: "Vipin's Singh || Front-End-Developer",
    description: "Hi I'm Vipin's Singh Front End Developer",
    keywords: "Front-End-Developer, UX/UI Developer, Web Designer",
}
