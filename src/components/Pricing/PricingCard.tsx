import React from 'react'

type PricingCardProps = {
    category: string
    price: string
    detail: string
    features: string[]
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
            className={
                recommended
                    ? ' relative text-center text-white py-16 px-4 bg-[#052D52] flex flex-col items-center justify-center rounded-lg  '
                    : 'flex-col items-center justify-center mt-8 text-center py-8 px-2 border-gray-100 border rounded-lg'
            }
        >
            {recommended && (
                <div className="absolute rounded-t-lg top-0 left-0 text-white text-center bg-red-500 py-2 block w-full ">
                    Bonus
                </div>
            )}
            <div>
                <h3 className="text-2xl font-medium mb-2">{category}</h3>
                <p className="text-2xl font-bold mb-4">{price}</p>
                <p className=" mb-4">{detail}</p>
            </div>
            <ul className="text-left px-2">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button className="mt-8 text-center font-semibold bg-red-500 hover:bg-red-600 w-full h-fit text-white py-2 px-4 rounded-lg">
                {buttonText}
            </button>
        </div>
    )
}

export default PricingCard
