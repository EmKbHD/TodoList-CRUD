import { FeaturesData } from '../../mockUpData/data.ts'
import { Link } from 'react-router-dom'

const Features = () => {
    return (
        <div className="container">
            <div className="md:grid-cols-4 gap-6">
                {FeaturesData.map((item) => {
                    return (
                        <div className="space-y-4 p-6 my-2 bg-[#fbfbfb] rounded-lg shadow-lg">
                            <div>
                                {/* Render icon as a JSX component */}
                                {item.icon && (
                                    <item.icon className="w-16 h-16 text-gray-600" />
                                )}
                            </div>
                            <p className="text-2xl font-semibold">
                                {item.title}
                            </p>
                            <p className="text-gray-600">{item.desc}</p>
                            <Link to={item.button.link}>
                                <button className="primary-btn mt-2 !py-2 flex items-center justify-center font-semibold ">
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
                ;
            </div>
        </div>
    )
}

export default Features
