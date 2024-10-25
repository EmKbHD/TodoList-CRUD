import { BannersData } from '../../mockUpData/data'
import { motion } from 'framer-motion'
import { SlideUp } from '../../utility/animation'

const Banners = () => {
    return (
        <div className=" container">
            <div className=" grid grid-cols-1 space-y-6 md:space-y-0 pt-8 md:py-16">
                <h2 className=" text-3xl font-semibold text-center md:py-4 ">
                    How{' '}
                    <strong className="text-primary">
                        <span className="text-secondary">e</span>Voty{' '}
                    </strong>{' '}
                    works
                </h2>
                <span className=" text-lg text-gray-600 font-bold md:py-4">
                    Why create your vote with us ?
                </span>
                <p className=" text-lg text-gray-600">
                    Let's start by identifying what the PM is not. The PM is not
                    the owner of the project. The PM is the sponsor, i.e. the
                    person who appoints the PM and makes the commitment. eVoty
                    is a platform that allows users to easily create, manage,
                    and vote on their favorite candidates. It's designed to be
                    accessible, transparent, and easy to use for everyone.
                </p>
                {/* Render each banner as a section with image and text */}
                {BannersData.map((item) => {
                    return (
                        <section className=" grid grid-cols-1 place-content-center place-items-center gap-4 md:grid-cols-2 py-8">
                            {/* banner image section */}
                            <div
                                className={
                                    item.id === 2
                                        ? 'p-2 order-none drop-shadow md:order-2 '
                                        : 'p-2 drop-shadow '
                                }
                            >
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 100,
                                        delay: 0.2,
                                    }}
                                    src={item.img_url}
                                    alt="dashboard image"
                                    className="object-cover min-w-[360px] "
                                />
                            </div>
                            {/* banner text section */}
                            <div
                                className={
                                    item.id === 2
                                        ? ' relative p-4 md:p-11 w-full min-h-fit space-y-4 text-left'
                                        : ' relative p-4 md:p-11 w-full space-y-4 flex '
                                }
                            >
                                <div
                                    className={
                                        item.id === 1
                                            ? 'md:absolute md:inset-y-0 md:right-0 flex flex-col justify-center w-fit md:px-4 lg:px-0'
                                            : ' py-4 '
                                    }
                                >
                                    <motion.h3
                                        variants={SlideUp(0.5)}
                                        initial="hidden"
                                        whileInView={'visible'}
                                        viewport={{ once: true }}
                                        className="text-2xl space-y-4 font-semibold text-gray-800"
                                    >
                                        {item.title}
                                    </motion.h3>
                                    <motion.p
                                        variants={SlideUp(0.7)}
                                        initial="hidden"
                                        whileInView={'visible'}
                                        viewport={{ once: true }}
                                        className="max-w-sm lg:max-w-lg text-lg text-gray-600 my-2 lg:my-4 "
                                    >
                                        {item.description}
                                    </motion.p>
                                    <motion.p
                                        variants={SlideUp(0.9)}
                                        initial="hidden"
                                        whileInView={'visible'}
                                        viewport={{ once: true }}
                                        className={
                                            item.id === 2 ? 'mt-8' : 'mt-4'
                                        }
                                    >
                                        <a
                                            href={item.button.link}
                                            target="_blank"
                                            className="primary-btn-outline w-fit"
                                        >
                                            {item.button.desc}
                                        </a>
                                    </motion.p>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default Banners
