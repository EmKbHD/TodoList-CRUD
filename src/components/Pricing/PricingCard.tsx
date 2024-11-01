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
            className={`grid ${
                recommended
                    ? ' relative text-center text-white py-16 px-4 md:px-6 bg-[#052D52] rounded-lg  '
                    : ' mt-8 text-center py-8 px-4 md:px-6 border-gray-100 border rounded-lg'
            }`}
        >
            {recommended && (
                <div className="absolute rounded-t-lg top-0 left-0 text-white text-center bg-red-500 py-2 block w-full ">
                    MOST POPULAR
                </div>
            )}
            <div>
                <h3 className="text-2xl font-medium mb-2">{category}</h3>
                <p className="text-2xl font-bold mb-4">{price}</p>
                <p className=" mb-4">{detail}</p>
            </div>
            <ul className="text-left ">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button className="mt-8 text-center font-semibold bg-red-500 hover:bg-red-600 h-fit text-white py-2 px-4 rounded-lg">
                {buttonText}
            </button>
        </div>
    )
}

export default PricingCard
