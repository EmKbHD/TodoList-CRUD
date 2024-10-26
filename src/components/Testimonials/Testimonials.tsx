import { TestimonialsData } from '../../mockUpData/data'
import Slider from 'react-slick'
const Testimonials = () => {
    const settingCarousel = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay set to true
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <div className="py-14 mb-10">
            <div className="container">
                {/* header section start here */}
                <h2 className="text-left mb-10 text-3xl md:text-4xl font-bold">
                    What are the Customers
                    <br /> Saying about us ?
                </h2>
                {/* testimonials customers card start here */}
                <div>
                    <Slider {...settingCarousel}>
                        {TestimonialsData.map((item) => (
                            <div
                                key={item.id}
                                className=" rounded-lg p-4 mr-2 my-6"
                            >
                                <div className=" flex mb-2">
                                    <img
                                        src={item.img}
                                        alt="profile-img"
                                        className="w-20 h-20 rounded-full"
                                    />
                                    <div className="flex flex-col justify-center ml-4">
                                        <strong>{item.name}</strong>
                                        <p className="text-sm">{item.role}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>{item.desc}</p>
                                </div>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
