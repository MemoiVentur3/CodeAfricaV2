import Navbar from "../components/Navbar"
import Footer from "../components/Footer";


export default function Example() {
    return (
        <div className="bg-[#020710]">
            <Navbar />
            <div className="bg-[#020710] h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="max-w-max mx-auto">
                    <main className="sm:flex">
                        <p className="text-4xl font-extrabold text-[#2063F2] sm:text-5xl">404</p>
                        <div className="sm:ml-6">
                            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                                <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">Page not found</h1>
                                <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
                            </div>
                            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                <a
                                    href="/"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#2063F2] hover:bg-[#2063F2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Go back home
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#2063F2] bg-white  focus:outline-none focus:ring-2 focus:ring-offset-2 f"
                                >
                                    Contact support
                                </a>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}