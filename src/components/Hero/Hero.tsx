import { PlayCircleIcon } from '@heroicons/react/24/solid'
import HeroImage from '../../assets/vote-undraw.svg'
import { motion } from 'framer-motion'
import { SlideLeft, SlideRight } from '../../utility/animation.js'

const Hero = () => {
    return (
        <>
            <section>
                <div className=" container grid place-content-center grid-cols-1 md:grid-cols-2 min-h-[568px] relative">
                    {/* Company information */}
                    <div className=" flex flex-col justify-center ">
                        <div className=" space-y-8 ">
                            <motion.h1
                                variants={SlideRight(0.6)}
                                initial="hidden"
                                animate="visible"
                                className="text-4xl text-primary lg:text-7xl font-suse font-bold leading-tight capitalize"
                            >
                                Vote anywhere <br />{' '}
                                <span className="text-secondary/80">
                                    you are
                                </span>{' '}
                                {''}
                            </motion.h1>
                            <motion.p
                                variants={SlideRight(1.2)}
                                initial="hidden"
                                animate="visible"
                                className=" md:text-xl text-gray-700 xl:max-w-[500px] "
                            >
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
                            </motion.p>
                            {/* CTA button here */}
                            <motion.div
                                variants={SlideRight(1.5)}
                                initial="hidden"
                                animate="visible"
                                className="md:max-w-[400px] font-semibold flex gap-4 md:justify-start"
                            >
                                <button className=" max-w-[190px] primary-btn grow flex justify-center items-center ">
                                    Get started
                                </button>
                                <button className=" secondary-btn hover:!bg-transparent hover:!text-secondary flex justify-center items-center ">
                                    <PlayCircleIcon className="w-8" />{' '}
                                    <span>Watch demo</span>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                    {/* Hero image */}
                    <div className=" flex justify-center items-center order-first md:justify-normal md:order-none ">
                        <motion.img
                            variants={SlideLeft(1)}
                            animate="visible"
                            initial={{ opacity: 0, x: 100 }}
                            src={HeroImage}
                            alt="VOTE IMAGE"
                            className="w-[21.875rem] h-2/3 md:w-[34.375rem] xl:w-[43.75rem] drop-shadow "
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
