import Features from './components/Features/Features'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import WhatIsEVoty from './components/WhatIsEVoty/WhatIsEVoty'
import BgImage from './assets/bg-red.png'
import Banners from './components/Banners/Banners'

const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
}
function App() {
    return (
        <div className="overflow-x-hidden font-sans">
            <div style={bgStyle} className=" max-[767px]:!bg-none ">
                <Navbar />
                <Hero />
            </div>
            <Features />
            <WhatIsEVoty />
            <Banners />
        </div>
    )
}

export default App
