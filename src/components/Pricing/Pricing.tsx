import { useState } from 'react'
import PricingCard from './PricingCard'
import { planAnnual, planMonthly } from '../../mockUpData/data'

const Pricing: React.FC = () => {
    const [monthly, setIsMonthly] = useState(true)

    const handleToggle = () => {
        setIsMonthly((monthly) => !monthly)
    }

    // Selection of the plans based on the toggle state
    const plans = monthly ? planMonthly : planAnnual

    return (
        <div className="container">
            <div className="py-8 md:py-16 space-y-6">
                <h2 className="text-left md:text-center mb-10 text-3xl md:text-4xl font-bold">
                    Choose your Pricing Plan
                </h2>
                <div className="font-semibold flex items-center justify-center gap-4 mb-5  ">
                    <div className="flex bg-gray-200 rounded-full p-1 w-max">
                        <button
                            onClick={handleToggle}
                            className={`px-4 py-1 rounded-full ${
                                monthly
                                    ? 'bg-white text-black'
                                    : 'text-gray-600'
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={handleToggle}
                            className={`px-4 py-1 rounded-full ${
                                !monthly
                                    ? 'bg-white text-black'
                                    : 'text-gray-600'
                            }`}
                        >
                            Annual (save 15%)
                        </button>
                    </div>

                    {/* toggle with input checked */}

                    {/* <span
                        className={!monthly ? 'text-[#052D52]' : 'opacity-50'}
                    >
                        Monthly
                    </span>

                    <label className="relative w-[50px] h-[24px]">
                        <input
                            type="checkbox"
                            checked={!monthly}
                            onChange={handleToggle}
                            className="opacity-0 checked:bg-[#052D52] "
                        />
                        <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#052D52] transition-[0.4s] rounded-[24px] " />
                    </label>
                    <span className={monthly ? 'text-[#052D52]' : 'opacity-50'}>
                        Annual{' '}
                        <small
                            className={
                                monthly
                                    ? 'bg-[#1e7b48] rounded-md ml-2 p-2 text-white'
                                    : 'bg-gray-400 opacity-50 rounded-md ml-2 p-2 text-white'
                            }
                        >
                            15% OFF
                        </small>
                    </span> */}
                </div>
                {/* <div className="border grid grid-cols-1 place-items-center md:grid-cols-3 gap-4"> */}
                <div className="border px-4 grid grid-cols-1 md:flex gap-4">
                    {plans.map((data) => {
                        return (
                            <PricingCard
                                key={data.category}
                                category={data.category}
                                price={data.price}
                                detail={data.detail}
                                features={data.features}
                                buttonText={data.buttonText}
                                recommended={data.recommended}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Pricing
