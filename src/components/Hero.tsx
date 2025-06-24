import bg2 from '../assets/images/bg-2.jpg';

export default function Hero() {
    return (
        <>


            <section className="bg-white pt-14 lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
                <div
                    className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
                >
                    <div className="max-w-prose text-left">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
                            Global communication
                            <strong className="text-indigo-600"> seamlessly </strong>
                            delivered
                        </h1>

                        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
                            we provides expert languages translation solutions to connect Your business with global audience. our team of skilled linguists and advanced technology ensure accurate and culturally relevant translations across various industries.
                        </p>

                        <div className="mt-4 flex gap-4 sm:mt-6">
                            <a
                                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                                href="#"
                            >
                                explore services
                            </a>

                            <a
                                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                                href="#"
                            >
                                contact us
                            </a>
                        </div>
                    </div>

                    <div className="mx-auto hidden max-w-md text-gray-900 md:block dark:text-white">
                        <img src={bg2} alt="banner image" className='object-cover ' />
                    </div>
                </div>
            </section>

        </>
    )
}

