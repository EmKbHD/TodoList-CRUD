interface Feature {
    title: string
    details?: string[]
}

type PricingCardProps = {
    category: string
    price: string
    detail: string
    features: Feature[]
    buttonText: string
    recommended?: boolean
}

const PricingCard: React.FC<PricingCardProps> = ({
    category,
    price,
    detail,
    features,
    buttonText,
    recommended,
}) => {
    return (
        <div
            className={` grid text-center px-4 w-full md:w-1/3 md:px-6 rounded-lg ${
                recommended
                    ? 'relative text-white bg-[#052D52]   '
                    : ' border-gray-200 border '
            }`}
        >
            {recommended && (
                <div className="absolute rounded-t-lg top-0 left-0 text-white text-center bg-red-500 py-2 block w-full ">
                    MOST POPULAR
                </div>
            )}
            <div className="mt-14">
                <h3 className="text-2xl font-medium mb-2">{category}</h3>
                <p className="text-3xl font-bold mb-4 md:text-4xl">{price}</p>
                <p className=" mb-4">{detail}</p>
                <hr className="border-gray-200 mb-4" />
            </div>

            <ul className="text-left space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✔️</span>
                        <div
                            className={`${recommended ? 'text-white' : 'text-gray-500'}`}
                        >
                            <h4
                                className={`font-semibold ${recommended ? 'text-white' : 'text-blue-900 '}`}
                            >
                                {feature.title}
                            </h4>
                            <ul className="pl-6 list-disc text-sm">
                                {feature.details?.map((detail, id) => (
                                    <li key={id}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="flex justify-center items-center my-8 px-6 w-full">
                <button className=" w-full text-center font-semibold bg-red-500 hover:bg-red-600 h-fit text-white py-2 px-4 rounded-lg">
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default PricingCard
