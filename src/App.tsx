import Features from './components/Features/Features'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import BgImage from './assets/bg.png'

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
            <Navbar />
            <div style={bgStyle} className=" max-[767px]:!bg-none ">
                <Hero />
            </div>
            <Features />
        </div>
    )
}

export default App
