const Hero = () => {
    return (
        <>
            <section>
                <div className="container border grid grid-cols-1  md:grid-cols-2 min-h-[650px] relative">
                    {/* Company information */}
                    <div className="flex flex-col justify-center py-14 md:py-0 ">
                        <h1 className="text-4xl text-primary lg:text-5xl font-bold leading-tight xl:leading-normal capitalize">
                            Vote from{' '}
                            <span className="text-secondary">
                                everywhere you are
                            </span>{' '}
                            {''}
                        </h1>
                        <p className="mt-4 md:text-xl text-gray-700 xl:max-w-[500px] ">
                            <span className="text-xl font-semibold  ">
                                Easily Create your elections and pool
                            </span>

                            <ol className="mt-2 text-lg ">
                                <li>Simple elections and pool management</li>
                                <li>Result in real-time</li>
                                <li>Secure and reliable</li>
                            </ol>
                        </p>
                        {/* CTA button here */}
                        <div className="mt-8 md:mx-0">
                            <button className="btn px-5 py-2 mr-2 border-[1px] bg-primary border-primary text-white hover:bg-white hover:text-primary duration-200 rounded-[4px]  cursor-pointer">
                                Get started
                            </button>
                            <button className="btn px-10 py-2 border-[1px] border-secondary text-secondary hover:bg-secondary hover:text-white duration-200 rounded-[4px] cursor-pointer">
                                Demo
                            </button>
                        </div>
                    </div>
                    {/* Hero image */}
                </div>
            </section>
        </>
    )
}

export default Hero
