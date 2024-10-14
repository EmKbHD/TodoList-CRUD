import { PlayCircleIcon } from '@heroicons/react/24/solid'
import HeroImage from '../../assets/vote-undraw.svg'
// import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <>
            <section>
                <div className="container grid align-items-center grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
                    {/* Company information */}
                    <div className=" flex flex-col justify-center py-14 md:py-0 ">
                        <div className=" space-y-6 ">
                            <h1 className="text-4xl text-primary lg:text-5xl font-suse font-bold leading-tight capitalize">
                                Vote from <br />{' '}
                                <span className="text-secondary/80">
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
                            <div className="md:max-w-[400px] font-semibold flex gap-4 md:justify-start !mt-4">
                                <button className=" max-w-[190px] primary-btn grow flex justify-center items-center ">
                                    Get started
                                </button>
                                <button className=" secondary-btn hover:!bg-transparent hover:!text-secondary flex justify-center items-center ">
                                    <PlayCircleIcon className="w-8" />{' '}
                                    <span>Watch demo</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Hero image */}
                    <div className=" order-first md:order-none flex justify-center items-center md:justify-normal ">
                        <img
                            src={HeroImage}
                            alt="VOTE IMAGE"
                            className="w-[21.875rem] h-4/5 md:w-[34.375rem] xl:w-[43.75rem] drop-shadow "
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
