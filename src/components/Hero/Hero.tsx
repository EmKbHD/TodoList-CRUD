import { PlayCircleIcon } from '@heroicons/react/24/solid'

const Hero = () => {
    return (
        <>
            <section>
                <div className="container border grid grid-cols-1  md:grid-cols-2 min-h-[650px] relative">
                    {/* Company information */}
                    <div className="flex flex-col justify-center py-14 md:py-0 ">
                        <div className=" space-y-6">
                            <h1 className="text-4xl text-primary lg:text-5xl font-suse font-bold leading-tight capitalize">
                                Vote from <br />{' '}
                                <span className="text-secondary">
                                    everywhere you are
                                </span>{' '}
                                {''}
                            </h1>
                            <p className="mt-4 md:text-xl text-gray-700 xl:max-w-[500px] ">
                                <span className="text-xl font-semibold  ">
                                    Easily Create your elections and pool
                                </span>

                                <ol className="mt-2 text-lg list-disc ml-5 ">
                                    <li>
                                        Simple elections and pool management
                                    </li>
                                    <li>Result in real-time</li>
                                    <li>Secure and reliable</li>
                                </ol>
                            </p>
                            {/* CTA button here */}
                            <div className="mt-8 font-semibold flex justify-center sm:max-w-[340px] md:mx-0">
                                <button className="btn grow px-5 py-2 mr-3 border-[1px] bg-primary border-primary text-white hover:bg-white hover:text-primary duration-200 rounded-lg  cursor-pointer">
                                    Get started
                                </button>
                                <button className="btn flex gap-1 items-center justify-center px-5 py-2 border-[1px] border-secondary text-secondary hover:bg-secondary hover:text-white duration-200 rounded-lg cursor-pointer">
                                    <PlayCircleIcon className="w-8" />{' '}
                                    <span>Watch demo</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Hero image */}
                </div>
            </section>
        </>
    )
}

export default Hero
