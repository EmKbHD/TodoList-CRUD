import { motion } from 'framer-motion'
import { SlideLeft } from '../../utility/animation'
const VotePool = () => {
    return (
        <div className=" bg-red-50/50 flex justify-center items-center">
            <div className=" container py-8 md:py-16 flex flex-col justify-center ">
                <motion.h2
                    variants={SlideLeft(0.5)}
                    initial="hidden"
                    whileInView={'visible'}
                    viewport={{ once: true }}
                    className=" text-center font-bold text-2xl md:text-4xl"
                >
                    Votes and Pools are{' '}
                    <span className="text-red-500">
                        easy to
                        <br /> use and secured
                    </span>
                </motion.h2>
                <div className=" flex justify-center pt-8">
                    <motion.div
                        variants={SlideLeft(0.9)}
                        initial="hidden"
                        whileInView={'visible'}
                        viewport={{ once: true }}
                        className="flex min-w-[300px] "
                    >
                        <button className="primary-btn grow mr-4">
                            Try Free
                        </button>
                        <button className="secondary-btn bg-red-100 ">
                            Go Premium
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default VotePool
