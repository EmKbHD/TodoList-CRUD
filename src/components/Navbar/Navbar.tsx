import { useState } from 'react'
import { NavbarMenu } from '../../mockUpData/data.ts'
import { Bars3Icon } from '@heroicons/react/24/outline'
import MobileMenu from './MobileMenu'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className=" container flex justify-between items-center py-5 ">
                {/* <div className="container flex justify-between items-center py-5"> */}
                {/* logo area */}
                <div className="font-suse font-bold text-3xl flex items-center gap-2 hover:opacity-[.9]">
                    {/* <VoteIcon /> */}
                    <a href="/" className="text-secondary">
                        e<span className="text-[#173C6C]">Voty</span>
                    </a>
                </div>
                {/* menu items area */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-4 text-gray-600">
                        {NavbarMenu.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a
                                        href="{item.link}"
                                        className="inline-block py-1 px-3 hover:text-secondary font-semibold "
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {/* CTA button area for sign up or login */}
                <div className=" font-semibold md:block">
                    <button
                        className="btn px-4 py-1.5 mr-2 border-[1px] border-secondary text-secondary hover:bg-secondary hover:text-white duration-200 rounded-lg cursor-pointer"
                        type="button"
                    >
                        Sign up
                    </button>
                    <button
                        className="btn px-4 py-1.5 border-[1px] bg-primary border-primary  text-white hover:bg-white hover:text-primary duration-200 rounded-lg cursor-pointer"
                        type="button"
                    >
                        Log in
                    </button>
                </div>
                {/* mobile hamburger menu area */}
                <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <Bars3Icon className="w-7 text-gray-900 cursor-pointer" />
                </div>
            </nav>
            {/* mobile sidebar menu section */}
            <MobileMenu open={isOpen} />
        </>
    )
}

export default Navbar
