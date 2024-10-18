import { BannersData } from '../../mockUpData/data'

const Banners = () => {
    return (
        <div className="container">
            <div className=" grid grid-cols-1 space-y-7 md:space-y-0 py-14">
                <h2 className="text-3xl font-semibold text-center ">
                    How{' '}
                    <strong className="text-primary">
                        <span className="text-secondary">e</span>Voty{' '}
                    </strong>{' '}
                    works
                </h2>
                <span className="text-lg text-gray-600 font-bold py-4">
                    Why create your vote with us ?
                </span>
                <p className="mt-4 text-lg text-gray-600">
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
                        <section className=" grid grid-cols-1 place-content-center place-items-center gap-4 md:grid-cols-2 py-4">
                            {/* banner image section */}
                            <div
                                className={
                                    item.id === 2
                                        ? 'p-2 order-none drop-shadow md:order-2'
                                        : 'p-2 drop-shadow'
                                }
                            >
                                <img src={item.img_url} alt="dashboard image" />
                            </div>
                            {/* banner text section */}
                            <div className="p-4">
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    {item.title}
                                </h3>
                                <p className="max-w-sm text-lg text-gray-600 mb-6">
                                    {item.description}
                                </p>
                                <a
                                    href={item.button.link}
                                    target="_blank"
                                    className="primary-btn-outline mt-4"
                                >
                                    {item.button.desc}
                                </a>
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default Banners
