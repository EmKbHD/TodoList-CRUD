import React from 'react'

type PricingCardProps = {
    category: string
    price: string
    features: string[]
    buttonText: string
    recommended?: boolean
}

const PricingCard: React.FC<PricingCardProps> = ({
    category,
    price,
    features,
    buttonText,
    recommended,
}) => {
    return (
        <div
            className={
                recommended
                    ? 'relative text-center text-white py-16 px-2 bg-[#052D52] border-gray-400 flex flex-col items-center justify-center border rounded-lg  '
                    : 'flex flex-col items-center justify-center text-center py-8 px-2 border-gray-400 border rounded-lg'
            }
        >
            {recommended && (
                <div className="absolute rounded-t-lg top-0 left-0 text-white text-center bg-red-500 py-2 block w-full ">
                    Bonus
                </div>
            )}
            <h3>{category}</h3>
            <p className="price">{price}</p>
            <ul className="features">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button className="button">{buttonText}</button>
        </div>
    )
}

export default PricingCard
