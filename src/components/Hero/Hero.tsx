import { PlayCircleIcon } from '@heroicons/react/24/solid'
import HeroImage from '../../assets/vote-undraw.svg'

const Hero = () => {
    return (
        <>
            <section>
                <div className="container border grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
                    {/* Company information */}
                    <div className=" border flex flex-col justify-center py-14 md:py-0 ">
                        <div className=" space-y-6">
                            <h1 className="text-4xl text-primary lg:text-5xl font-suse font-bold leading-tight capitalize">
                                Vote from <br />{' '}
                                <span className="text-secondary opacity-70">
                                    Anywhere you are
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
                            <div className=" font-semibold flex justify-center items-center gap-4 md:justify-start !mt-4">
                                <button className="primary-btn grow flex justify-center items-center ">
                                    Get started
                                </button>
                                <button className=" secondary-btn flex justify-center items-center ">
                                    <PlayCircleIcon className="w-8" />{' '}
                                    <span>Watch demo</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Hero image */}
                    <div className="border flex items-center justify-start md:justify-normal ">
                        <img
                            src={HeroImage}
                            alt="VOTE IMAGE"
                            className="w-[22rem] md:w-[550px] xl:w-[34.38rem] drop-shadow "
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
