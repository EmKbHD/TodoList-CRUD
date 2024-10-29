import { useState } from 'react'
import PricingCard from './PricingCard'
import { planMonthly } from '../../mockUpData/data'

const Pricing: React.FC = () => {
    const [monthly, setIsMonthly] = useState(false)
    const handleToggle = () => {
        setIsMonthly(!monthly)
    }

    return (
        <div className="container">
            <h2 className="text-left md:text-center mb-10 text-3xl md:text-4xl font-bold">
                Our Pricing Plan
            </h2>
            <div className="font-semibold flex items-center justify-center gap-4 mb-5  ">
                <span className={!monthly ? 'text-[#052D52]' : 'opacity-50'}>
                    Monthly
                </span>
                <label className=" relative w-[50px] h-[24px]">
                    <input
                        type="checkbox"
                        checked={monthly}
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
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {planMonthly.map((data) => {
                    return (
                        <PricingCard
                            key={data.category}
                            category={data.category}
                            price={data.price}
                            features={data.features}
                            buttonText={data.buttonText}
                            recommended={data.recommended}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Pricing

{
    /* <div className="flex items-center">
    <input
        type="checkbox"
        id="toggle"
        checked={monthly}
        onChange={handleToggle}
        className="sr-only peer"
    />
    <div className="w-14 h-7 bg-gray-300 rounded-full peer-checked:bg-blue-500 relative transition-colors duration-300">
        <div className="w-6 h-6 bg-white rounded-full absolute left-1 top-0.5 peer-checked:translate-x-full transform transition-transform duration-300"></div>
    </div>
</div> */
}
