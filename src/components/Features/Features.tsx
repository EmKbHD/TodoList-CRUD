import { FeaturesData } from '../../mockUpData/data.ts'
import { Link } from 'react-router-dom'

const Features = () => {
    return (
        <div className="container my-[64px]">
            <h2 className="text-3xl font-medium md:text-center my-[32px] font-suse ">
                Features
            </h2>
            <div className="grid min-[]: md:grid-cols-4 gap-6">
                {FeaturesData.map((item) => {
                    return (
                        <div className="space-y-2 p-6 bg-[#fbfbfb] grid rounded-lg shadow-lg">
                            <div className="md:mx-auto">
                                {/* Render icon as a JSX component */}
                                {item.icon && (
                                    <item.icon className="w-16 h-16 text-secondary/80" />
                                )}
                            </div>
                            <div className="text-2xl font-semibold md:mx-auto">
                                {item.title}
                            </div>
                            <p className="text-gray-600 md:text-center">
                                {item.desc}
                            </p>
                            <Link className="md:mx-auto" to={item.button.link}>
                                <button className="primary-btn-outline mt-2 !py-2 flex items-center justify-center font-semibold ">
                                    {/* Render icon as a JSX component */}
                                    {item.button.desc}
                                    {item.button.icon && (
                                        <item.button.icon className="w-4 h-4 ml-2" />
                                    )}
                                </button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Features
