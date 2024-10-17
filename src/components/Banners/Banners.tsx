import { BannersData } from '../../mockUpData/data'

const Banners = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
                {/* banner image section */}
                <div>
                    <img src="image" alt="" />
                </div>
                {/* banner text section */}
            </div>
        </div>
    )
}

export default Banners
