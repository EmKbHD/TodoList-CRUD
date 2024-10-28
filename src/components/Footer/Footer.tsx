import Logo from '../../assets/eVoty.svg'
import { SocialIcon } from 'react-social-icons'
import { NavbarMenu } from '../../mockUpData/data'

const CompanyLinks = [
    {
        id: 1,
        title: 'Our services',
        link: '#',
    },
    {
        id: 2,
        title: 'contact',
        link: '#',
    },
    {
        id: 3,
        title: 'Privacy Policy',
        link: '#',
    },
]

const ResourcesLinks = [
    {
        id: 1,
        title: 'Pricing',
        link: '#',
    },
    {
        id: 2,
        title: 'Vote',
        link: '#',
    },
    {
        id: 3,
        title: 'FAQ',
        link: '#',
    },
]

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-2xl">
            <div className="container">
                {/* company info here */}
                <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-white">
                    <div className=" py-8 px-4 space-y-4">
                        <div>
                            <img
                                src={Logo}
                                alt="Logo-img"
                                className="bg-white rounded-lg px-2"
                            />
                        </div>

                        <p className="py-2 text-justify md:text-left">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. In numquam distinctio aperiam amet culpa?
                        </p>
                        {/* social media icons  */}
                        <div className=" flex items-center justify-start gap-3 mt-2 md:mt-0">
                            <a href="#">
                                <SocialIcon
                                    url="https://www.facebook.com/"
                                    style={{ height: 36, width: 36 }}
                                />
                            </a>
                            <a href="#">
                                <SocialIcon
                                    network="x"
                                    bgColor="white"
                                    fgColor="black"
                                    style={{ height: 36, width: 36 }}
                                />
                            </a>
                            <a href="#">
                                <SocialIcon
                                    network="instagram"
                                    style={{ height: 36, width: 36 }}
                                />
                            </a>
                            <a href="#">
                                <SocialIcon
                                    network="linkedin"
                                    style={{ height: 36, width: 36 }}
                                />
                            </a>
                        </div>
                    </div>
                    {/* links start here */}
                    <div className=" grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
                        <div className=" py-8 px-4">
                            <h2 className="text-lg md:text-xl mb-5 font-bold">
                                Important Links
                            </h2>
                            <ul className="flex flex-col gap-3">
                                {NavbarMenu.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <a
                                                href={item.link}
                                                className="inline-block md:text-lg hover:text-secondary hover:font-semibold"
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className=" py-8 px-4">
                            <h2 className="text-xl mb-5 font-bold">Company</h2>
                            <ul className="flex flex-col gap-3">
                                {CompanyLinks.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <a
                                                href={item.link}
                                                className="inline-block md:text-lg hover:text-secondary hover:font-semibold"
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className=" py-8 px-4">
                            <h2 className="text-xl mb-5 font-bold">
                                Resources
                            </h2>
                            <ul className="flex flex-col gap-3">
                                {ResourcesLinks.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <a
                                                href={item.link}
                                                className="inline-block md:text-lg hover:text-secondary hover:font-semibold"
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* copy right area  */}
                <div className="mt-8">
                    <div className="text-center py-6 border-t-2 border-gray-300/10">
                        <span className="text-sm text-gray-300 opacity-70">
                            &copy; Copyright 2024 Afritic Group. All rights
                            reserved.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
