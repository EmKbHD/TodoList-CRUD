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
                    ? 'text-center text-white py-8 px-2 bg-[#052D52] border-gray-400 border rounded-lg'
                    : '"text-center py-8 px-2 border-gray-400 border rounded-lg"'
            }
        >
            {recommended && (
                <div className="text-white text-center bg-red-500 py-2 block ">
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
