import Layout from "@/component/Layout"
import Link from "next/link"

export default function pageNotFound() {
    return (
        <Layout title="Page Not Found, Back to home!">
            <section className="mt-20 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-6xl font-body font-bold">Page Not Found</h1>
                        <h2 className="text-2xl lg:text-4xl font-display font-light mt-2 mb-5 text-primary">OOPs Something Wrong!</h2>
                        <Link href="/">
                            <a className="bg-primary text-xl mt-15 rounded py-2 px-4 font-bold font-body text-secondary inline-block">Back to Home</a>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
